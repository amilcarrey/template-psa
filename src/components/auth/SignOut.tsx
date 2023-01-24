'use client'
import React, { useEffect, useState } from 'react'
import { useSupabase } from '@supabase/SupabaseProvider'
import { Session } from '@supabase/auth-helpers-nextjs'

const SignOut = () => {
   const { supabase } = useSupabase()
   const [session, setSession] = useState<Session | null>(null)
   
   useEffect(() => {
      supabase.auth.getSession().then((res) => {
         setSession(res.data.session)
      })
   }, [supabase])

   const signOut = async () => {
      const { error } = await supabase.auth.signOut()
      if (error) console.log('error', error)
      setSession(null)
   }
   return session ? <span className='cursor-pointer' onClick={() => signOut()}>Sign out</span> : null
}

export default SignOut

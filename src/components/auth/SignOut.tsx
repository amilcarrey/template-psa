'use client'
import React, { useEffect, useState } from 'react'
import { useSupabase } from '@supabase/SupabaseProvider'
import { Session } from '@supabase/auth-helpers-nextjs'
import toast from 'react-hot-toast'

const SignOut = () => {
   const { supabase } = useSupabase()
   const [session, setSession] = useState<Session | null>(null)
   
   useEffect(() => {
      supabase.auth.getSession().then((res) => {
         setSession(res.data.session)
      })
   }, [supabase])

   const signOut = async () => {
      const res = await toast.promise(
         supabase.auth.signOut(),
         {
            loading: 'Signing out...',
            success: <b>You have been logged out</b>,
            error: <b>There was an error logging out</b>,
         },
         { duration: 4000 }
      )
      
      if (!res.error) setSession(null)
   }
   return session ? <span className='cursor-pointer' onClick={() => signOut()}>Sign out</span> : null
}

export default SignOut

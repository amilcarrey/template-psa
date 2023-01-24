import React from 'react'
import { createClient } from '@utils/supabase/supabase-server'
import Link from 'next/link'


const UserName = async () => {
  const supabase = createClient()
  
  const user = await supabase.auth.getUser()

   return user.data.user ? (
      <pre>{JSON.stringify(user.data.user.email, null, 2)}</pre>
   ) : (
      <Link href='/login' className="text-xl">Login</Link>
   )
}

export default UserName

import React from 'react'
import { createClient } from '@utils/supabase/supabase-server'


const UserName = async () => {
  const supabase = createClient()
  
  const user = await supabase.auth.getUser()

   return user ? (
      <pre>{JSON.stringify(user.data.user.email, null, 2)}</pre>
   ) : (
      <h1 className="text-xl">NO USER</h1>
   )
}

export default UserName

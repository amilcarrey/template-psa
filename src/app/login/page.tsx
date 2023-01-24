'use client'
import { SignIn } from '@/components/auth/SignIn'
// import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import React from 'react'

const Login = () => {
   return (
      <div className="flex h-screen items-center justify-center bg-slate-700 text-black">
         <SignIn />
      </div>
   )
   //  return (
   //     <Auth supabaseClient={supabaseClient} appearance={{ theme: ThemeSupa }} />
   //  )
}

export default Login

'use client'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/20/solid'
// import { showNotification, useNotifications } from '@mantine/notifications'
import { Button } from '@elements/Button'
import { useSupabase } from '@supabase/SupabaseProvider'

export const SignIn = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const notifications = useNotifications()

    const { supabase } = useSupabase()

    const handleSignIn = async () => {
      const res = await supabase.auth.signInWithPassword({email, password})

      router.push('/')
      

      if (res?.error)
      console.log(res.error);
      
          // return notifications.showNotification({
          //     title: 'No se pudo iniciar sesión',
          //     message: 'Credenciales inválidas',
          //     color: 'red',
          // })
      // router.push('/protected')
  }


    return (
  
        <div className="border-2 border-solid border-white flex flex-col shadow-md shadow-white h-1/2 items-center justify-center pt-4 pb-12 rounded-xl bg-black">
            <div className=" flex items-center text-sm font-bold uppercase text-primary">
                <div className="flex flex-col items-center justify-center py-10 text-center">
                    <UserCircleIcon
                        className="self-start h-36 w-36
                        transition duration-200 text-white/50"
                        width={400}
                        height={400}
                    />
                    {/* <p>Sign In</p> */}
                </div>
            </div>

            <div className=" flex w-full flex-col items-stretch gap-6 px-24">
                <input
                    type="email"
                    className="rounded-md bg-black text-white border-2 border-solid border-white/70"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="rounded-md bg-black text-white border-2 border-solid border-white/70"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    onClick={handleSignIn}
                    type="submit"
                >
                    Iniciar sesión
                 </Button>
                {/*<Button
                    onClick={(e: any) => {
                        e.preventDefault()
                        signIn('azure-ad', { callbackUrl: '/protected' })
                    }}
                >
                    <span>Iniciar sesión con</span>
                    <Image
                        className="-my-6 ml-2"
                        src="/microsoft-svgrepo-com.svg"
                        alt="Microsoft Logo"
                        width={70}
                        height={20}
                    />
                </Button> */}
            </div>
        </div>
      
        
    )
}

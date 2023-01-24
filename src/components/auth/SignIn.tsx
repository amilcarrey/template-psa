'use client'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'
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
  
        <div className="flex flex-col shadow-lg h-1/2 items-center justify-center pt-4 pb-12 rounded-xl bg-white/90">
            <div className=" flex items-center text-sm font-bold uppercase text-primary">
                <div className="flex flex-col items-center justify-center py-10 text-center">
                    <UserCircleIcon
                        className="h-[30%]
                        w-[30%] transition duration-200 md:h-[50%] md:w-[50%] text-neutral-700"
                        width={400}
                        height={400}
                    />
                    <p>Sign In</p>
                </div>
            </div>

            <div className=" flex w-full flex-col items-stretch gap-6 px-24">
                <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="input"
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

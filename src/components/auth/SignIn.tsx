'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/20/solid'
// import { showNotification, useNotifications } from '@mantine/notifications'
import { Button } from '@elements/Button'
import { useSupabase } from '@supabase/SupabaseProvider'
import toast from 'react-hot-toast'

export const SignIn = () => {
   const router = useRouter()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   // const notifications = useNotifications()

   const { supabase } = useSupabase()

   const handleSignIn = async () => {
      const res = await toast.promise(
         supabase.auth.signInWithPassword({ email, password }),
         {
            loading: 'Logging in...',
            success: <b>You have been logged in</b>,
            error: <b>There was an error logging in</b>,
         },
         { duration: 4000 }
      )
      router.push('/')


      // return notifications.showNotification({
      //     title: 'No se pudo iniciar sesión',
      //     message: 'Credenciales inválidas',
      //     color: 'red',
      // })
      // router.push('/protected')
   }

   return (
      <div className="flex h-1/2 flex-col items-center justify-center rounded-xl border-2 border-solid border-white bg-black pt-4 pb-12 shadow-md shadow-white">
         <div className=" text-primary flex items-center text-sm font-bold uppercase">
            <div className="flex flex-col items-center justify-center py-10 text-center">
               <UserCircleIcon
                  className="h-36 w-36 self-start
                        text-white/50 transition duration-200"
                  width={400}
                  height={400}
               />
               {/* <p>Sign In</p> */}
            </div>
         </div>

         <div className=" flex w-full flex-col items-stretch gap-6 px-24">
            <input
               type="email"
               className="rounded-md border-2 border-solid border-white/70 bg-black text-white"
               placeholder="Email"
               onChange={(e) => setEmail(e.target.value)}
            />
            <input
               type="password"
               className="rounded-md border-2 border-solid border-white/70 bg-black text-white"
               placeholder="Password"
               onChange={(e) => setPassword(e.target.value)}
            />

            <Button onClick={handleSignIn} type="submit">
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

import './globals.css'
import Providers from './providers'
import SupabaseListener from '@supabase/SupabaseListener'
import { createClient } from '@utils/supabase/supabase-server'
import { Footer } from '@/components/layout/Footer'
import ClientComponentWrapper from '@/components/layout/ClientComponentWrapper'

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   const supabase = createClient()

   const {
      data: { session },
   } = await supabase.auth.getSession()
   return (
      <html lang="en">
         {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
         <head />
         <Providers>
            <SupabaseListener serverAccessToken={session?.access_token} />
            <body>
               <ClientComponentWrapper />
               {children}
               <Footer />
            </body>
         </Providers>
      </html>
   )
}

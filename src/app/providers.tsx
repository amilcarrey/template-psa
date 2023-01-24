import { ReactNode, useState } from 'react'
import SupabaseProvider from '@supabase/SupabaseProvider'

export default function Providers({ children }: { children: ReactNode }) {
   return (
      <SupabaseProvider>
            {children}
      </SupabaseProvider>
      
   )
}

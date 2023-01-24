'use client'

import { createContext, useContext, useState } from 'react'
import { createClient } from '@utils/supabase/supabase-browser'

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'

type SupabaseContext = {
  supabase: SupabaseClient
}

const Context = createContext<SupabaseContext>({} as SupabaseContext)

export default function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createClient())

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  )
}

export const useSupabase = () => useContext(Context)
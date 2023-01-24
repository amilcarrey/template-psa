import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import type { Database } from '../lib/database.types'

export async function middleware(req: NextRequest) {

  const res = NextResponse.next()

  const supabase = createMiddlewareSupabaseClient({ req, res })

  const { data: { session } } = await supabase.auth.getSession()

  console.log('middleware', session);
  
  if (!session) {
    return NextResponse.redirect('/login')
  }
  
  return res
}

//Matcher is the path that will be catched by the middleware. In this case, all the requests that start with /api/ will be catched by the middleware.
export const config = {
  matcher: '/api/:function*',
};
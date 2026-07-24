import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // 현재 사용자의 로그인 세션 확인
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const url = request.nextUrl.clone()
  const pathname = url.pathname

  // 1. 로그인을 안 했는데 /home 이나 내부 페이지로 들어가려고 할 때 -> 로그인 페이지(/)로 강제 이동
  if (!user && pathname.startsWith('/home')) {
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  // 2. 이미 로그인을 했는데 로그인 페이지(/)로 다시 가려고 할 때 -> 홈 화면(/home)으로 강제 이동
  if (user && pathname === '/') {
    url.pathname = '/home'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

// 미들웨어가 작동할 경로 지정
export const config = {
  matcher: [
    '/',
    '/home/:path*',
  ],
}
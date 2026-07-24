import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          supabaseResponse = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // 현재 로그인된 사용자인지 확인
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // ============================================
  // 1. 로그인하지 않은 사용자
  // 로그인 페이지(/)를 제외한 모든 페이지 접근 차단
  // ============================================
  if (!user && pathname !== '/') {
    const url = request.nextUrl.clone();

    url.pathname = '/';
    url.search = '';

    return NextResponse.redirect(url);
  }

  // ============================================
  // 2. 이미 로그인한 사용자
  // 로그인 페이지(/)에 들어오면 /home으로 이동
  // ============================================
  if (user && pathname === '/') {
    const url = request.nextUrl.clone();

    url.pathname = '/home';

    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

/*
 * 사이트의 거의 모든 주소에서 로그인 여부 확인
 *
 * 제외:
 * - Next.js 내부 파일
 * - 이미지
 * - favicon
 */
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
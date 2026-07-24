import {
    createServerClient,
    type CookieOptions,
  } from '@supabase/ssr';
  
  import {
    NextResponse,
    type NextRequest,
  } from 'next/server';
  
  type CookieToSet = {
    name: string;
    value: string;
    options: CookieOptions;
  };
  
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
  
          setAll(cookiesToSet: CookieToSet[]) {
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
  
    const {
      data: { user },
    } = await supabase.auth.getUser();
  
    const pathname = request.nextUrl.pathname;
  
    // 로그인 안 한 사람은 로그인 페이지(/) 외에 전부 차단
    if (!user && pathname !== '/') {
      const url = request.nextUrl.clone();
  
      url.pathname = '/';
      url.search = '';
  
      return NextResponse.redirect(url);
    }
  
    // 로그인한 사람이 로그인 페이지에 접근하면 홈으로 이동
    if (user && pathname === '/') {
      const url = request.nextUrl.clone();
  
      url.pathname = '/home';
  
      return NextResponse.redirect(url);
    }
  
    return supabaseResponse;
  }
  
  export const config = {
    matcher: [
      '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
  };
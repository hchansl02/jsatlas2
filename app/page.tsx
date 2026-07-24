'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dancing_Script, Merriweather } from 'next/font/google';
import { supabase } from '@/app/lib/supabase';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
});

function PlaneIcon({
  className = '',
  strokeWidth = 1.7,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      className="h-[18px] w-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20c.7-4 3-6 6.5-6s5.8 2 6.5 6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      className="h-[18px] w-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 018 0v3" />
    </svg>
  );
}

function EyeIcon({ closed }: { closed: boolean }) {
  return (
    <svg
      className="h-[19px] w-[19px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {closed ? (
        <>
          <path d="M3 3l18 18" />
          <path d="M10.6 10.6a2 2 0 002.8 2.8" />
          <path d="M9.9 4.2A10.5 10.5 0 0112 4c5.5 0 9 6 9 8a10.8 10.8 0 01-2 3.1" />
          <path d="M6.3 6.3C4.1 7.8 3 10.3 3 12c0 2 3.5 8 9 8a9.7 9.7 0 004-.8" />
        </>
      ) : (
        <>
          <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
          <circle cx="12" cy="12" r="2.5" />
        </>
      )}
    </svg>
  );
}

function EnvelopeDecoration() {
  return (
    <div className="pointer-events-none absolute -left-[120px] top-[49%] hidden h-[420px] w-[510px] -translate-y-1/2 -rotate-[11deg] xl:block">
      <div className="absolute inset-0 rounded-[8px] bg-white shadow-[0_25px_45px_rgba(56,84,120,0.18)]">
        {/* 우편 줄무늬 */}
        <div className="airmail-strip absolute left-0 right-0 top-0 h-[16px]" />
        <div className="airmail-strip absolute bottom-0 left-0 right-0 h-[16px]" />

        <div className="airmail-strip-vertical absolute bottom-0 left-0 top-0 w-[16px]" />
        <div className="airmail-strip-vertical absolute bottom-0 right-0 top-0 w-[16px]" />

        {/* 봉투 접힌 선 */}
        <svg
          className="absolute inset-0 h-full w-full text-[#d9dee8]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.45"
        >
          <path d="M0 0 L50 57 L100 0" />
          <path d="M0 100 L38 57" />
          <path d="M100 100 L62 57" />
        </svg>

        {/* 우편 스탬프 */}
        <div className="absolute left-[74px] top-[92px] flex h-[112px] w-[112px] -rotate-[8deg] items-center justify-center rounded-full border-[2px] border-[#2d78d1]/60 text-[#2d78d1]">
          <div className="flex h-[96px] w-[96px] flex-col items-center justify-center rounded-full border border-dashed border-[#2d78d1]/70">
            <PlaneIcon className="mb-1 h-7 w-7" strokeWidth={1.5} />
            <span className="text-[8px] tracking-[0.22em]">OUR TRIP</span>
            <span className={`${merriweather.className} mt-1 text-[14px] font-bold`}>
              JS ATLAS
            </span>
          </div>
        </div>

        <div className="absolute left-[172px] top-[128px] flex flex-col gap-[8px] opacity-40">
          <span className="h-[1px] w-[110px] bg-[#2d78d1]" />
          <span className="h-[1px] w-[115px] bg-[#2d78d1]" />
          <span className="h-[1px] w-[105px] bg-[#2d78d1]" />
          <span className="h-[1px] w-[112px] bg-[#2d78d1]" />
        </div>
      </div>
    </div>
  );
}

function BoardingPass() {
  return (
    <div className="pointer-events-none absolute right-[5%] top-[25%] hidden w-[420px] -rotate-[5deg] overflow-hidden rounded-[10px] bg-white shadow-[0_22px_40px_rgba(46,83,127,0.20)] xl:block">
      <div className="flex h-[55px] items-center justify-between bg-[#2478c9] px-7 text-white">
        <div className="flex items-center gap-2">
          <PlaneIcon className="h-5 w-5" />
          <span className="text-[15px] font-bold tracking-[0.08em]">
            BOARDING PASS
          </span>
        </div>

        <span className="text-[13px] font-medium">JS ♡</span>
      </div>

      <div className="relative flex min-h-[190px] bg-white px-7 py-6">
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="text-[9px] font-bold tracking-[0.14em] text-gray-400">
              FROM
            </p>
            <p className="mt-1 text-[20px] font-bold text-[#273343]">
              우리의 오늘
            </p>
          </div>

          <div>
            <p className="text-[9px] font-bold tracking-[0.14em] text-gray-400">
              TO
            </p>
            <p className="mt-1 text-[20px] font-bold text-[#273343]">
              함께하는 내일
            </p>
          </div>
        </div>

        <div className="mx-6 border-l border-dashed border-gray-300" />

        <div className="flex w-[100px] flex-col justify-between">
          <div>
            <p className="text-[9px] font-bold tracking-[0.14em] text-gray-400">
              SEAT
            </p>
            <p className="mt-1 text-[18px] font-bold text-[#273343]">07A</p>
          </div>

          <div>
            <p className="text-[9px] font-bold tracking-[0.14em] text-gray-400">
              DATE
            </p>
            <p className="mt-1 text-[16px] font-bold text-[#273343]">
              FOREVER
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 px-7 pb-6">
        <div className="barcode h-[29px] w-[125px]" />

        <span className="whitespace-nowrap text-[8px] font-semibold tracking-[-0.02em] text-gray-500">
          MEMORIES WE COLLECT TOGETHER
        </span>
      </div>
    </div>
  );
}

function PlaneRoute() {
  return (
    <div className="pointer-events-none absolute right-[5%] top-[3%] hidden h-[195px] w-[500px] xl:block">
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 500 190"
        fill="none"
      >
        <path
          d="M20 143
             C65 152, 90 130, 93 102
             C95 68, 46 65, 48 103
             C51 142, 113 152, 161 130
             C210 109, 241 71, 286 69
             C332 67, 349 89, 380 82
             C421 72, 435 39, 486 36"
          stroke="#4b98e9"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity=".65"
        />
      </svg>

      <div className="absolute right-[102px] top-[22px] rotate-[18deg] text-[#1876d1]">
        <svg
          width="55"
          height="55"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.5 15.4v-2l-8-5.1V3.1c0-.8-.6-1.4-1.5-1.4-.8 0-1.5.6-1.5 1.4v5.2l-8 5.1v2l8-2.6v5l-2.2 1.7v1.7l3.7-1.1 3.7 1.1v-1.7l-2.2-1.7v-5l8 2.6Z" />
        </svg>
      </div>
    </div>
  );
}

function TravelPostcard() {
  return (
    <div className="pointer-events-none absolute bottom-[7%] right-[9%] hidden rotate-[6deg] xl:block">
      <div className="stamp-edge relative w-[230px] bg-white p-[15px] shadow-[0_18px_30px_rgba(55,85,125,0.18)]">
        <img
          src="/jsatlas-santorini.png"
          alt=""
          className="h-[170px] w-full object-cover"
        />
      </div>

      <div className="absolute -bottom-[35px] -left-[62px] flex h-[105px] w-[105px] -rotate-[10deg] items-center justify-center rounded-full border-[3px] border-[#2876c5]/60 bg-[#dceeff]/55 text-[#2876c5]">
        <div className="flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full border border-dashed border-[#2876c5]/60">
          <span className="text-[8px] tracking-[0.15em]">LOVETRIP</span>
          <span className="mt-1 text-[17px] font-bold">MEMORIES</span>
          <span className="text-[12px]">♡</span>
          <span className="text-[7px] tracking-[0.12em]">TOGETHER</span>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setErrorMsg('');

    try {
      const fullEmail = `${username.trim()}@jyatlas.com`;

      const { data, error } = await supabase.auth.signInWithPassword({
        email: fullEmail,
        password,
      });

      if (error) {
        setErrorMsg('아이디 또는 비밀번호가 일치하지 않습니다.');
        setIsLoading(false);
        return;
      }

      if (data.session) {
        router.push('/home');
        router.refresh();
      }
    } catch {
      setErrorMsg('로그인 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-[#edf6ff]">
      {/* ================= HEADER ================= */}
      <header className="relative z-30 flex h-[86px] shrink-0 items-center border-b border-[#dbeaf8] bg-white/95 px-8 shadow-[0_3px_15px_rgba(50,90,130,0.04)] md:px-[6%]">
        <div className="flex items-center gap-3 text-[#267ad0]">
          <PlaneIcon className="h-[34px] w-[34px] -rotate-[10deg]" strokeWidth={1.35} />

          <span
            className={`${merriweather.className} text-[26px] font-bold tracking-[-0.02em]`}
          >
            JS ATLAS
          </span>
        </div>
      </header>

      {/* ================= MAIN BACKGROUND ================= */}
      <section className="travel-sky relative flex min-h-[720px] flex-1 items-center justify-center overflow-hidden px-4 py-10">
        {/* 은은한 지도 질감 */}
        <div className="map-lines pointer-events-none absolute inset-0 opacity-[0.13]" />

        {/* 구름 */}
        <div className="cloud cloud-one" />
        <div className="cloud cloud-two" />
        <div className="cloud cloud-three" />
        <div className="cloud cloud-four" />

        <EnvelopeDecoration />
        <BoardingPass />
        <PlaneRoute />
        <TravelPostcard />

        {/* ================= LOGIN CARD ================= */}
        <div className="relative z-20 w-full max-w-[550px]">
          <div className="rounded-[25px] border border-white/90 bg-white/88 p-[8px] shadow-[0_20px_55px_rgba(54,91,137,0.20)] backdrop-blur-[12px]">
            <form
              onSubmit={handleLogin}
              className="rounded-[20px] border border-dashed border-[#bcd8f4] bg-white/82 px-8 py-9 md:px-[50px] md:py-[42px]"
            >
              {/* 제목 */}
              <div className="text-center">
                <p
                  className={`${dancingScript.className} mb-1 text-[18px] tracking-[0.02em] text-[#5598e3]`}
                >
                  journey together, letters forever... ♡
                </p>

                <h1
                  className={`${merriweather.className} text-[38px] font-bold tracking-[-0.04em] text-[#1f6fc0] md:text-[43px]`}
                >
                  Welcome Aboard
                </h1>

                <p className="mt-3 text-[14px] font-medium text-[#667587]">
                  함께 떠나는 여행의 첫걸음, 로그인하세요. ♡
                </p>

                <div className="my-5 flex items-center justify-center gap-3 text-[#81b8ec]">
                  <span className="h-px w-[105px] border-t border-dashed border-[#b6d6f3]" />
                  <PlaneIcon className="h-[21px] w-[21px]" strokeWidth={1.4} />
                  <span className="h-px w-[105px] border-t border-dashed border-[#b6d6f3]" />
                </div>
              </div>

              {/* 아이디 */}
              <div className="mt-2">
                <label
                  htmlFor="username"
                  className="mb-2 block text-[13px] font-semibold text-[#495666]"
                >
                  아이디
                </label>

                <div className="relative">
                  <div className="pointer-events-none absolute left-[16px] top-1/2 -translate-y-1/2 text-[#a0a9b5]">
                    <UserIcon />
                  </div>

                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="아이디를 입력하세요"
                    required
                    autoComplete="username"
                    className="h-[51px] w-full rounded-[10px] border border-[#d8dee6] bg-white/95 pl-[48px] pr-4 text-[14px] text-[#263443] outline-none transition placeholder:text-[#adb5bf] focus:border-[#5a9ee3] focus:ring-2 focus:ring-[#5a9ee3]/15"
                  />
                </div>
              </div>

              {/* 비밀번호 */}
              <div className="mt-[19px]">
                <label
                  htmlFor="password"
                  className="mb-2 block text-[13px] font-semibold text-[#495666]"
                >
                  비밀번호
                </label>

                <div className="relative">
                  <div className="pointer-events-none absolute left-[16px] top-1/2 -translate-y-1/2 text-[#a0a9b5]">
                    <LockIcon />
                  </div>

                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호를 입력하세요"
                    required
                    autoComplete="current-password"
                    className="h-[51px] w-full rounded-[10px] border border-[#d8dee6] bg-white/95 pl-[48px] pr-[48px] text-[14px] text-[#263443] outline-none transition placeholder:text-[#adb5bf] focus:border-[#5a9ee3] focus:ring-2 focus:ring-[#5a9ee3]/15"
                  />

                  <button
                    type="button"
                    aria-label="비밀번호 보기"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#a0a9b5] transition hover:text-[#5b88b9]"
                  >
                    <EyeIcon closed={showPassword} />
                  </button>
                </div>
              </div>

              {/* 상태 유지 / 비밀번호 */}
              <div className="mt-[17px] flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-[13px] text-[#606d7b]">
                  <input
                    type="checkbox"
                    className="h-[16px] w-[16px] rounded border-[#bcc5cf] accent-[#267ad0]"
                  />
                  로그인 상태 유지
                </label>

                <button
                  type="button"
                  onClick={() =>
                    alert('비밀번호 변경은 JS ATLAS 관리자에게 문의해주세요 :)')
                  }
                  className="text-[13px] font-semibold text-[#2a83db] hover:underline"
                >
                  비밀번호 찾기
                </button>
              </div>

              {/* 에러 */}
              {errorMsg && (
                <div className="mt-4 rounded-[8px] border border-red-100 bg-red-50 px-4 py-3 text-center text-[12px] font-medium text-red-500">
                  {errorMsg}
                </div>
              )}

              {/* 로그인 버튼 */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-[22px] flex h-[55px] w-full items-center justify-center gap-3 rounded-[10px] bg-gradient-to-r from-[#267bd0] to-[#2d91e6] text-[15px] font-bold text-white shadow-[0_8px_18px_rgba(38,123,208,0.24)] transition hover:-translate-y-[1px] hover:shadow-[0_11px_22px_rgba(38,123,208,0.28)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  '로그인 중...'
                ) : (
                  <>
                    로그인
                    <PlaneIcon className="h-[20px] w-[20px]" strokeWidth={1.8} />
                  </>
                )}
              </button>

              {/* 회원가입 부분 */}
              <div className="mt-[28px]">
                <div className="flex items-center gap-4">
                  <span className="h-px flex-1 border-t border-dashed border-[#bcd8f4]" />
                  <span className="text-[13px] text-[#8d9aa7]">
                    처음이신가요?
                  </span>
                  <span className="h-px flex-1 border-t border-dashed border-[#bcd8f4]" />
                </div>

                <button
                  type="button"
                  onClick={() =>
                    alert('JS ATLAS는 초대된 사용자만 이용할 수 있어요 ♡')
                  }
                  className="mt-[18px] flex h-[50px] w-full items-center justify-center rounded-[9px] border border-[#75ade3] bg-white text-[14px] font-bold text-[#2b83d6] transition hover:bg-[#f2f8ff]"
                >
                  회원가입
                  <span className="absolute" />
                  <svg
                    className="absolute ml-[330px] h-[18px] w-[18px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m14 7 5 5-5 5" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-30 flex h-[62px] shrink-0 items-center justify-between border-t border-[#dbeaf8] bg-white/85 px-6 text-[#708497] md:px-[5%]">
        <div className="flex items-center gap-3">
          <PlaneIcon
            className="h-[28px] w-[28px] text-[#3988d8]"
            strokeWidth={1.4}
          />

          <span
            className={`${dancingScript.className} hidden text-[17px] text-[#71879c] sm:block`}
          >
            같이 봐도 지도, 함께면 여행. ♡
          </span>
        </div>

        <p className="text-[11px] md:text-[12px]">
          © 2026 JS ATLAS. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
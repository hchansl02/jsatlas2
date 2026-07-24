import Link from 'next/link';
import { Dancing_Script, Merriweather } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
});

function PlaneIcon({
  className = '',
  fill = false,
}: {
  className?: string;
  fill?: boolean;
}) {
  if (fill) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21.5 15.4v-2l-8-5.1V3.1c0-.8-.6-1.4-1.5-1.4-.8 0-1.5.6-1.5 1.4v5.2l-8 5.1v2l8-2.6v5l-2.2 1.7v1.7l3.7-1.1 3.7 1.1v-1.7l-2.2-1.7v-5l8 2.6Z" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  );
}

/* ===========================
   왼쪽 큰 편지봉투
=========================== */

function BigEnvelope() {
  return (
    <div className="pointer-events-none absolute -left-[115px] top-[205px] z-[2] hidden h-[410px] w-[530px] -rotate-[8deg] xl:block 2xl:-left-[70px] 2xl:h-[460px] 2xl:w-[600px]">
      <div className="absolute inset-0 rounded-[12px] bg-white shadow-[0_25px_45px_rgba(52,84,125,0.19)]">
        {/* 에어메일 테두리 */}
        <div
          className="absolute left-0 right-0 top-0 h-[18px] rounded-t-[12px]"
          style={{
            background:
              'repeating-linear-gradient(135deg,#e05b61 0 24px,#fff 24px 42px,#5176b7 42px 66px,#fff 66px 84px)',
          }}
        />

        <div
          className="absolute bottom-0 left-0 right-0 h-[18px] rounded-b-[12px]"
          style={{
            background:
              'repeating-linear-gradient(135deg,#e05b61 0 24px,#fff 24px 42px,#5176b7 42px 66px,#fff 66px 84px)',
          }}
        />

        {/* 봉투 선 */}
        <svg
          className="absolute inset-0 h-full w-full text-[#d9e0ea]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth=".45"
        >
          <path d="M0 0 L50 56 L100 0" />
          <path d="M0 100 L38 57" />
          <path d="M100 100 L62 57" />
        </svg>

        {/* 도장 */}
        <div className="absolute left-[75px] top-[94px] flex h-[125px] w-[125px] -rotate-[5deg] items-center justify-center rounded-full border-[2px] border-[#3882d1]/65 text-[#3882d1]">
          <div className="flex h-[106px] w-[106px] flex-col items-center justify-center rounded-full border border-dashed border-[#3882d1]/60">
            <PlaneIcon className="mb-1 h-7 w-7" />
            <span className="text-[8px] tracking-[0.16em]">OUR TRIP</span>
            <span
              className={`${merriweather.className} mt-1 text-[15px] font-bold`}
            >
              JS ATLAS
            </span>
          </div>
        </div>

        {/* 우편 스탬프 선 */}
        <div className="absolute left-[190px] top-[128px] flex flex-col gap-[8px] opacity-45">
          <span className="h-px w-[115px] bg-[#4387d0]" />
          <span className="h-px w-[125px] bg-[#4387d0]" />
          <span className="h-px w-[120px] bg-[#4387d0]" />
          <span className="h-px w-[110px] bg-[#4387d0]" />
        </div>
      </div>
    </div>
  );
}

/* ===========================
   오른쪽 보딩패스
=========================== */

function BoardingPass() {
  return (
    <div className="pointer-events-none absolute right-[1.5%] top-[165px] z-[3] hidden w-[390px] -rotate-[4deg] overflow-hidden rounded-[10px] bg-white shadow-[0_22px_40px_rgba(49,86,129,0.2)] xl:block 2xl:right-[3%] 2xl:w-[450px]">
      <div className="flex h-[54px] items-center justify-between bg-[#2777c9] px-6 text-white">
        <div className="flex items-center gap-2">
          <PlaneIcon className="h-4 w-4" />
          <span className="text-[14px] font-bold tracking-[0.08em]">
            BOARDING PASS
          </span>
        </div>

        <span className="text-[12px]">JS ♡</span>
      </div>

      <div className="flex min-h-[165px] px-6 py-5">
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="text-[8px] font-bold tracking-widest text-gray-400">
              FROM
            </p>
            <p className="mt-1 text-[18px] font-bold text-[#273443]">
              우리의 오늘
            </p>
          </div>

          <div>
            <p className="text-[8px] font-bold tracking-widest text-gray-400">
              TO
            </p>
            <p className="mt-1 text-[18px] font-bold text-[#273443]">
              함께하는 내일
            </p>
          </div>
        </div>

        <div className="mx-5 border-l border-dashed border-gray-300" />

        <div className="flex w-[82px] flex-col justify-between">
          <div>
            <p className="text-[8px] font-bold tracking-widest text-gray-400">
              SEAT
            </p>
            <p className="mt-1 text-[15px] font-bold text-[#273443]">
              07A
            </p>
          </div>

          <div>
            <p className="text-[8px] font-bold tracking-widest text-gray-400">
              DATE
            </p>
            <p className="mt-1 text-[14px] font-bold text-[#273443]">
              FOREVER
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between px-6 pb-5">
        <div
          className="h-[26px] w-[112px]"
          style={{
            background:
              'repeating-linear-gradient(90deg,#263443 0 2px,transparent 2px 4px,#263443 4px 5px,transparent 5px 8px,#263443 8px 12px,transparent 12px 15px)',
          }}
        />

        <span className="text-[7px] font-semibold text-gray-500">
          MEMORIES WE COLLECT TOGETHER
        </span>
      </div>
    </div>
  );
}

/* ===========================
   비행기 궤적
=========================== */

function FlightRoute() {
  return (
    <div className="pointer-events-none absolute right-[3%] top-[72px] z-[2] hidden h-[135px] w-[420px] xl:block">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 420 130"
        fill="none"
      >
        <path
          d="M5 102
             C40 110 64 91 61 69
             C59 46 27 47 29 69
             C32 101 84 111 127 96
             C171 80 203 51 243 52
             C287 53 300 74 334 63
             C361 55 377 36 410 32"
          stroke="#4d99e9"
          strokeWidth="1.7"
          strokeDasharray="5 5"
          opacity=".7"
        />
      </svg>

      <PlaneIcon
        fill
        className="absolute right-[18px] top-[12px] h-[40px] w-[40px] rotate-[20deg] text-[#2375c8]"
      />
    </div>
  );
}

/* ===========================
   카드 이미지
=========================== */

function Photo({
  emoji,
  background,
  rotate,
}: {
  emoji: string;
  background: string;
  rotate: string;
}) {
  return (
    <div
      className={`absolute right-5 top-[118px] z-[1] h-[145px] w-[125px] bg-white p-[9px] shadow-[0_9px_15px_rgba(0,0,0,0.13)] transition-transform duration-500 group-hover:scale-[1.04] ${rotate}`}
    >
      <div
        className={`flex h-[100px] w-full items-center justify-center ${background}`}
      >
        <span className="text-[38px]">{emoji}</span>
      </div>
    </div>
  );
}

/* ===========================
   홈
=========================== */

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#dceeff] font-sans">

      {/* ================= HEADER ================= */}

      <header className="relative z-50 flex h-[72px] shrink-0 items-center border-b border-[#d8e9f7] bg-white/90 px-6 shadow-[0_2px_12px_rgba(44,79,116,0.04)] backdrop-blur-md md:px-[5%]">
        <div className="flex items-center gap-3 text-[#2b70bd]">
          <PlaneIcon className="h-[30px] w-[30px] -rotate-[10deg]" />

          <span
            className={`${merriweather.className} text-[22px] font-bold tracking-[0.02em]`}
          >
            JS ATLAS
          </span>
        </div>
      </header>

      {/* ================= BACKGROUND ================= */}

      <main
        className="relative flex flex-1 flex-col overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse 33% 25% at 4% 15%,rgba(255,255,255,.95),transparent 70%), radial-gradient(ellipse 32% 25% at 96% 13%,rgba(255,255,255,.95),transparent 70%), radial-gradient(ellipse 40% 25% at 20% 73%,rgba(255,255,255,.55),transparent 75%), linear-gradient(180deg,#c7e3fb 0%,#dceeff 48%,#ecf7ff 100%)',
        }}
      >
        {/* 은은한 지도 라인 */}

        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.11]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(22deg,transparent 0,transparent 85px,rgba(65,123,178,.35) 86px,transparent 87px,transparent 150px), repeating-linear-gradient(-28deg,transparent 0,transparent 115px,rgba(65,123,178,.25) 116px,transparent 117px,transparent 190px)',
          }}
        />

        {/* 구름 */}

        <div className="pointer-events-none absolute -left-[100px] top-[20px] z-[1] h-[220px] w-[460px] rounded-full bg-white/70 blur-[70px]" />

        <div className="pointer-events-none absolute -right-[80px] top-[15px] z-[1] h-[230px] w-[480px] rounded-full bg-white/75 blur-[75px]" />

        <div className="pointer-events-none absolute bottom-[0px] left-[10%] z-[1] h-[210px] w-[600px] rounded-full bg-white/35 blur-[80px]" />

        <BigEnvelope />
        <BoardingPass />
        <FlightRoute />

        {/* ================= HERO ================= */}

        <section className="relative z-10 mx-auto flex w-full max-w-[1750px] flex-col items-center px-4 pt-[55px] sm:px-6 lg:pt-[62px] 2xl:pt-[72px]">
          <div className="text-center">
            <p
              className={`${dancingScript.className} mb-1 text-[17px] tracking-[0.05em] text-[#4887cf] md:text-[20px]`}
            >
              journey together, letters forever... ♡
            </p>

            <div className="relative inline-block">
              <h1
                className={`${merriweather.className} text-[52px] font-bold leading-none tracking-[0.035em] text-[#2168b4] drop-shadow-[0_2px_1px_rgba(255,255,255,0.5)] sm:text-[64px] lg:text-[76px] 2xl:text-[88px]`}
              >
                JS ATLAS
              </h1>
            </div>

            <p className="mt-5 text-[14px] font-medium text-[#526678] md:text-[16px]">
              함께 걷는 모든 순간을 지도에 담아,
            </p>

            <p className="mt-1 flex items-center justify-center gap-1 text-[14px] font-medium text-[#526678] md:text-[16px]">
              우리만의 이야기로 만들어가는 공간
              <span className="text-[#4c91df]">♡</span>
            </p>
          </div>

          {/* ================= CARDS ================= */}

          <div className="relative z-20 mt-[60px] grid w-full max-w-[1540px] grid-cols-1 gap-5 pb-[78px] md:grid-cols-2 xl:grid-cols-4 2xl:mt-[72px] 2xl:gap-6">

            {/* 01 함께 가볼 곳 */}

            <Link
              href="/places"
              className="group relative flex h-[370px] flex-col overflow-hidden rounded-[24px] border border-white/90 bg-white/95 p-7 shadow-[0_14px_28px_rgba(48,84,122,0.16)] transition-all duration-300 hover:-translate-y-[7px] hover:shadow-[0_22px_38px_rgba(48,84,122,0.19)] 2xl:h-[405px] 2xl:p-8"
            >
              <div className="absolute -top-[7px] left-[22%] h-[20px] w-[57px] -rotate-[3deg] bg-[#8db9ee]/80 shadow-sm" />

              <div className="mb-5 mt-1 flex items-center gap-3">
                <span className="rounded-full bg-[#e9f3ff] px-3 py-1 text-[10px] font-bold text-[#3a79c6]">
                  01
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#3a79c6]">
                  Destinations
                </span>
              </div>

              <div className="relative z-10">
                <h2 className="text-[26px] font-bold tracking-[-0.03em] text-[#1558a3] 2xl:text-[29px]">
                  함께 가볼 곳
                </h2>

                <p className="mt-3 text-[13px] leading-[1.8] text-[#697786] 2xl:text-[14px]">
                  언젠간 꼭 같이 갈
                  <br />
                  수많은 장소들
                </p>
              </div>

              <Photo
                emoji="🌴"
                background="bg-[#cce4fb]"
                rotate="rotate-[5deg] group-hover:rotate-[8deg]"
              />

              <div className="mt-auto flex items-end justify-between">
                <div
                  className="h-[18px] w-[68px] opacity-55"
                  style={{
                    background:
                      'repeating-linear-gradient(90deg,#29333e 0 2px,transparent 2px 4px,#29333e 4px 5px,transparent 5px 8px)',
                  }}
                />

                <span className="text-[10px] font-bold tracking-[0.1em] text-[#3678c5]">
                  NEXT ADVENTURE →
                </span>
              </div>
            </Link>

            {/* 02 함께 해볼 것 */}

            <Link
              href="/activities"
              className="group relative flex h-[370px] flex-col overflow-hidden rounded-[24px] border border-white/90 bg-white/95 p-7 shadow-[0_14px_28px_rgba(48,84,122,0.16)] transition-all duration-300 hover:-translate-y-[7px] hover:shadow-[0_22px_38px_rgba(48,84,122,0.19)] 2xl:h-[405px] 2xl:p-8"
            >
              <div className="absolute -top-[7px] left-[34%] h-[20px] w-[60px] rotate-[2deg] bg-[#80cdb0]/80 shadow-sm" />

              <div className="mb-5 mt-1 flex items-center gap-3">
                <span className="rounded-full bg-[#e8f7f0] px-3 py-1 text-[10px] font-bold text-[#30916b]">
                  02
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#30916b]">
                  Activities
                </span>
              </div>

              <div className="relative z-10">
                <h2 className="text-[26px] font-bold tracking-[-0.03em] text-[#176044] 2xl:text-[29px]">
                  함께 해볼 것
                </h2>

                <p className="mt-3 text-[13px] leading-[1.8] text-[#697786] 2xl:text-[14px]">
                  매일 매일 다양한
                  <br />
                  콘텐츠를 해보자!
                </p>
              </div>

              <Photo
                emoji="🎈"
                background="bg-[#efc496]"
                rotate="-rotate-[3deg] group-hover:-rotate-[6deg]"
              />

              <div className="absolute bottom-[58px] right-[105px] flex h-[57px] w-[57px] rotate-[10deg] items-center justify-center rounded-full border border-dashed border-[#909b9a]/50 text-center text-[6px] font-bold leading-[1.25] tracking-[0.12em] text-[#7d8b88]">
                LET&apos;S
                <br />
                TRY
                <br />
                TOGETHER
              </div>

              <div className="mt-auto">
                <span className="text-[10px] font-bold tracking-[0.1em] text-[#329067]">
                  LET&apos;S TRY →
                </span>
              </div>
            </Link>

            {/* 03 서로에게 */}

            <Link
              href="/letters"
              className="group relative h-[370px] overflow-hidden rounded-[24px] shadow-[0_14px_28px_rgba(48,84,122,0.17)] transition-all duration-300 hover:-translate-y-[7px] hover:shadow-[0_22px_38px_rgba(48,84,122,0.21)] 2xl:h-[405px]"
              style={{
                background:
                  'repeating-linear-gradient(45deg,#e04b51 0 13px,#fff 13px 27px,#3e75b9 27px 40px,#fff 40px 54px)',
              }}
            >
              <div className="absolute inset-[7px] flex flex-col overflow-hidden rounded-[19px] bg-white p-7 2xl:p-8">
                <div className="absolute -top-[8px] left-[28%] h-[20px] w-[55px] -rotate-[3deg] bg-[#f48d9a]/80 shadow-sm" />

                <div className="mb-5 mt-1 flex items-center gap-3">
                  <span className="rounded-full bg-[#fff0f2] px-3 py-1 text-[10px] font-bold text-[#e24657]">
                    03
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#e24657]">
                    Letters
                  </span>
                </div>

                <div className="relative z-10">
                  <h2 className="text-[26px] font-bold tracking-[-0.03em] text-[#a52932] 2xl:text-[29px]">
                    서로에게
                  </h2>

                  <p className="mt-3 text-[13px] leading-[1.8] text-[#697786] 2xl:text-[14px]">
                    내 마음을 가득 담아
                    <br />
                    너에게 보낼게
                  </p>
                </div>

                <Photo
                  emoji="💗"
                  background="bg-[#ffb9c0]"
                  rotate="rotate-[3deg] group-hover:rotate-[6deg]"
                />

                <div className="absolute bottom-[72px] right-[112px] flex -rotate-[10deg] flex-col gap-[7px] opacity-25">
                  <span className="h-[2px] w-[70px] bg-[#6b7280]" />
                  <span className="h-[2px] w-[70px] bg-[#6b7280]" />
                  <span className="h-[2px] w-[70px] bg-[#6b7280]" />
                </div>

                <div className="mt-auto">
                  <span className="text-[10px] font-bold tracking-[0.1em] text-[#e04453]">
                    WRITE A LETTER →
                  </span>
                </div>
              </div>
            </Link>

            {/* 04 다녀온 기록 */}

            <a
              href="https://drive.google.com/drive/folders/1qQ4977BYf33o_T9rzVmhiHX3YbFzyFOA?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-[370px] flex-col overflow-hidden rounded-[24px] border border-white/90 bg-white/95 p-7 shadow-[0_14px_28px_rgba(48,84,122,0.16)] transition-all duration-300 hover:-translate-y-[7px] hover:shadow-[0_22px_38px_rgba(48,84,122,0.19)] 2xl:h-[405px] 2xl:p-8"
            >
              <div className="absolute -top-[7px] right-[25%] h-[20px] w-[58px] rotate-[3deg] bg-[#8fc2f5]/80 shadow-sm" />

              <div className="mb-5 mt-1 flex items-center gap-3">
                <span className="rounded-full bg-[#edf5ff] px-3 py-1 text-[10px] font-bold text-[#367bd0]">
                  04
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#367bd0]">
                  Memories
                </span>
              </div>

              <div className="relative z-10">
                <h2 className="text-[26px] font-bold tracking-[-0.03em] text-[#1955a0] 2xl:text-[29px]">
                  다녀온 기록
                </h2>

                <p className="mt-3 text-[13px] leading-[1.8] text-[#697786] 2xl:text-[14px]">
                  우리의 추억과
                  <br />
                  기록들
                </p>
              </div>

              <Photo
                emoji="🏞️"
                background="bg-[#a8d8ff]"
                rotate="-rotate-[5deg] group-hover:-rotate-[8deg]"
              />

              <div className="absolute bottom-[55px] right-[92px] flex h-[64px] w-[64px] rotate-[10deg] items-center justify-center rounded-full border-[1.5px] border-[#65a7e8] bg-white/55">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-dashed border-[#65a7e8] text-[7px] font-bold tracking-[0.08em] text-[#367bd0]">
                  MEMORIES
                </div>
              </div>

              <div className="mt-auto">
                <span className="text-[10px] font-bold tracking-[0.1em] text-[#367bd0]">
                  VIEW MEMORIES →
                </span>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="relative z-50 flex min-h-[62px] shrink-0 items-center justify-between border-t border-white/70 bg-[#edf6ff]/90 px-6 text-[#7f9dbd] md:px-[5%]">
        <div className="flex items-center gap-3">
          <PlaneIcon className="h-[24px] w-[24px] text-[#4b8ed3]" />

          <span
            className={`${dancingScript.className} hidden text-[16px] sm:block`}
          >
            같이 만든 지도, 평생의 여행. ♡
          </span>
        </div>

        <span className="text-[10px] md:text-[11px]">
          © 2026 JS ATLAS. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
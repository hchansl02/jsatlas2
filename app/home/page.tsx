import Link from 'next/link';
import { Dancing_Script, Merriweather } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
});

function PlaneOutline({
  className = '',
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
    </svg>
  );
}

function PlaneFilled({
  className = '',
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.5 15.4v-2l-8-5.1V3.1c0-.8-.6-1.4-1.5-1.4-.8 0-1.5.6-1.5 1.4v5.2l-8 5.1v2l8-2.6v5l-2.2 1.7v1.7l3.7-1.1 3.7 1.1v-1.7l-2.2-1.7v-5l8 2.6Z" />
    </svg>
  );
}

function HeartIcon({
  className = '',
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}

function Barcode({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        background:
          'repeating-linear-gradient(90deg, #23354a 0px, #23354a 2px, transparent 2px, transparent 4px, #23354a 4px, #23354a 5px, transparent 5px, transparent 8px, #23354a 8px, #23354a 12px, transparent 12px, transparent 15px)',
      }}
    />
  );
}

function EnvelopeDecoration() {
  return (
    <div className="pointer-events-none absolute -left-[95px] top-[20px] hidden h-[285px] w-[445px] -rotate-[8deg] xl:block 2xl:-left-[65px] 2xl:h-[320px] 2xl:w-[500px]">
      <div className="absolute -right-[35px] -top-[35px] h-[120px] w-[155px] rotate-[9deg] border-[9px] border-white bg-gradient-to-br from-[#94c8f5] via-[#d8efff] to-[#397ec6] shadow-[0_15px_30px_rgba(57,93,137,0.22)]">
        <div className="flex h-full items-center justify-center text-[42px]">
          🏝️
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden rounded-[6px] bg-white shadow-[0_25px_45px_rgba(51,83,119,0.2)]">
        <div
          className="absolute inset-x-0 top-0 h-[15px]"
          style={{
            background:
              'repeating-linear-gradient(135deg, #df6367 0px, #df6367 20px, #fff 20px, #fff 38px, #5a7db8 38px, #5a7db8 58px, #fff 58px, #fff 76px)',
          }}
        />

        <div
          className="absolute inset-x-0 bottom-0 h-[15px]"
          style={{
            background:
              'repeating-linear-gradient(135deg, #df6367 0px, #df6367 20px, #fff 20px, #fff 38px, #5a7db8 38px, #5a7db8 58px, #fff 58px, #fff 76px)',
          }}
        />

        <div
          className="absolute inset-y-0 left-0 w-[15px]"
          style={{
            background:
              'repeating-linear-gradient(45deg, #df6367 0px, #df6367 20px, #fff 20px, #fff 38px, #5a7db8 38px, #5a7db8 58px, #fff 58px, #fff 76px)',
          }}
        />

        <div
          className="absolute inset-y-0 right-0 w-[15px]"
          style={{
            background:
              'repeating-linear-gradient(45deg, #df6367 0px, #df6367 2015px]"
          style={{
            background:
              'px, #fff 20px, #fff 38px, #5a7db8 38px, #5a7db8 58px, #fff 58px, #fff 76px)',
          }}
        />

        <svg
          className="absolute inset-0 h-full w-full text-[#d4dae3]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.45"
        >
          <path d="M0 0 50 58 100 0" />
          <path d="M0 100 38 58" />
          <path d="M100 100 62 58" />
        </svg>

        <div className="absolute left-[72px] top-[88px] flex h-[105px] w-[105px] -rotate-[7deg] items-center justify-center rounded-full border-2 border-[#347fc9]/60 text-[#347fc9]">
          <div className="flex h-[90px] w-[90px] flex-col items-center justify-center rounded-full border border-dashed border-[#347fc9]/60">
            <PlaneOutline className="mb-1 h-7 w-7" />
            <span className="text-[7px] tracking-[0.16em]">
              OUR JOURNEY
            </span>
            <span
              className={`${merriweather.className} mt-1 text-[13px] font-bold`}
            >
              JS ATLAS
            </span>
          </div>
        </div>

        <div className="absolute left-[172px] top-[116px] flex flex-col gap-[8px] opacity-35">
          <span className="h-px w-[105px] bg-[#347fc9]" />
          <span className="h-px w-[115px] bg-[#347fc9]" />
          <span className="h-px w-[100px] bg-[#347fc9]" />
          <span className="h-px w-[110px] bg-[#347fc9]" />
        </div>
      </div>
    </div>
  );
}

function BoardingPassDecoration() {
  return (
    <div className="pointer-events-none absolute -right-[35px] top-[55px] hidden w-[390px] -rotate-[5deg] overflow-hidden rounded-[10px] bg-white shadow-[0_22px_42px_rgba(45,78,116,0.22)] xl:block 2xl:right-[10px] 2xl:w-[440px]">
      <div className="flex h-[52px] items-center justify-between bg-[#2678c9] px-6 text-white">
        <div className="flex items-center gap-2">
          <PlaneFilled className="h-5 w-5" />

          <span className="text-[13px] font-bold tracking-[0.08em]">
            BOARDING PASS
          </span>
        </div>

        <span className="text-[12px]">
          JS ♡
        </span>
      </div>

      <div className="flex min-h-[145px] px-6 py-5">
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="text-[8px] font-bold tracking-[0.14em] text-gray-400">
              FROM
            </p>

            <p className="mt-1 text-[17px] font-bold text-[#263447]">
              우리의 오늘
            </p>
          </div>

          <div>
            <p className="text-[8px] font-bold tracking-[0.14em] text-gray-400">
              TO
            </p>

            <p className="mt-1 text-[17px] font-bold text-[#263447]">
              함께하는 내일
            </p>
          </div>
        </div>

        <div className="mx-5 border-l border-dashed border-gray-300" />

        <div className="flex w-[90px] flex-col justify-between">
          <div>
            <p className="text-[8px] font-bold tracking-[0.14em] text-gray-400">
              SEAT
            </p>

            <p className="mt-1 text-[16px] font-bold text-[#263447]">
              07A
            </p>
          </div>

          <div>
            <p className="text-[8px] font-bold tracking-[0.14em] text-gray-400">
              DATE
            </p>

            <p className="mt-1 text-[14px] font-bold text-[#263447]">
              FOREVER
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 px-6 pb-5">
        <Barcode className="h-[27px] w-[115px]" />

        <span className="whitespace-nowrap text-[7px] font-semibold text-gray-500">
          MEMORIES WE COLLECT TOGETHER
        </span>
      </div>
    </div>
  );
}

function RouteDecoration() {
  return (
    <div className="pointer-events-none absolute right-[3%] top-[5px] hidden h-[150px] w-[440px] lg:block xl:hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 440 150"
        fill="none"
      >
        <path
          d="M10 118C58 140 91 111 75 84C60 59 29 76 50 105C76 140 147 125 191 95C236 64 263 42 310 57C350 70 371 43 427 28"
          stroke="#3484d4"
          strokeWidth="1.7"
          strokeDasharray="5 6"
          opacity=".55"
        />
      </svg>

      <PlaneFilled className="absolute right-[30px] top-[12px] h-10 w-10 rotate-[18deg] text-[#2878c9]" />
    </div>
  );
}

function PhotoCard({
  emoji,
  gradient,
  rotation,
}: {
  emoji: string;
  gradient: string;
  rotation: string;
}) {
  return (
    <div
      className={`absolute right-[22px] top-[105px] z-10 h-[145px] w-[130px] border-[9px] border-white bg-white shadow-[0_13px_25px_rgba(40,62,88,0.18)] transition-transform duration-500 group-hover:scale-[1.04] ${rotation}`}
    >
      <div
        className={`flex h-full w-full items-center justify-center text-[38px] ${gradient}`}
      >
        <span role="img" aria-hidden="true">
          {emoji}
        </span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#eaf5ff] text-[#263447]">
      {/* 상단 로고바 */}
      <header className="relative z-50 flex h-[70px] shrink-0 items-center border-b border-[#dceaf7] bg-white/90 px-5 shadow-[0_3px_16px_rgba(41,76,111,0.05)] backdrop-blur-md md:px-10 xl:px-[5%]">
        <Link
          href="/home"
          className="flex items-center gap-3 text-[#2676c8]"
        >
          <PlaneOutline className="h-[30px] w-[30px] -rotate-[10deg]" />

          <span
            className={`${merriweather.className} text-[22px] font-bold tracking-[0.02em]`}
          >
            JS ATLAS
          </span>
        </Link>
      </header>

      {/* 메인 화면 */}
      <main className="relative flex flex-1 overflow-hidden">
        {/* 전체 배경 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#c7e2fa] via-[#dbeeff] to-[#edf7ff]" />

        {/* 은은한 지도선 */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(22deg, transparent 0px, transparent 75px, rgba(53,118,179,0.35) 76px, transparent 77px, transparent 155px), repeating-linear-gradient(-28deg, transparent 0px, transparent 98px, rgba(53,118,179,0.25) 99px, transparent 100px, transparent 190px)',
          }}
        />

        {/* 구름 효과 */}
        <div className="pointer-events-none absolute -left-[100px] top-[35px] h-[260px] w-[500px] rounded-full bg-white/80 blur-[75px]" />
        <div className="pointer-events-none absolute -right-[120px] top-[15px] h-[260px] w-[520px] rounded-full bg-white/85 blur-[75px]" />
        <div className="pointer-events-none absolute bottom-[10px] left-[15%] h-[220px] w-[600px] rounded-full bg-white/45 blur-[90px]" />
        <div className="pointer-events-none absolute bottom-[30px] right-[10%] h-[240px] w-[550px] rounded-full bg-white/40 blur-[90px]" />

        <section className="relative z-10 mx-auto flex w-full max-w-[1660px] flex-col px-4 pb-8 pt-5 md:px-8 lg:px-10 xl:px-12 2xl:px-8">
          {/* 상단 히어로 */}
          <div className="relative flex min-h-[280px] items-center justify-center md:min-h-[310px] xl:min-h-[330px] 2xl:min-h-[355px]">
            <EnvelopeDecoration />
            <BoardingPassDecoration />
            <RouteDecoration />

            <div className="relative z-20 mx-auto flex max-w-[720px] flex-col items-center px-3 text-center">
              <div className="mb-2 flex items-center gap-3">
                <p
                  className={`${dancingScript.className} text-[18px] tracking-[0.08em] text-[#4386cd] md:text-[21px]`}
                >
                  journey together, letters forever...
                </p>

                <HeartIcon className="h-5 w-5 text-[#4a92dc]" />
              </div>

              <div className="relative">
                <h1
                  className={`${merriweather.className} text-[54px] font-bold tracking-[0.04em] text-[#1e64ae] drop-shadow-sm md:text-[76px] lg:text-[88px] 2xl:text-[100px]`}
                >
                  JS ATLAS
                </h1>

                <div className="pointer-events-none absolute left-[101%] top-[40%] hidden w-[190px] md:block xl:hidden">
                  <svg
                    viewBox="0 0 190 60"
                    fill="none"
                    className="w-full"
                  >
                    <path
                      d="M0 37C45 5 88 48 135 20"
                      stroke="#347fc9"
                      strokeWidth="1.4"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>
              </div>

              <p className="mt-4 text-[15px] font-medium leading-[1.8] text-[#566a7e] md:text-[17px] 2xl:text-[18px]">
                함께 걷는 모든 순간을 지도에 담아,
                <br />
                우리만의 이야기로 만들어가는 공간
                <HeartIcon className="ml-2 inline h-5 w-5 text-[#478ed5]" />
              </p>
            </div>
          </div>

          {/* 네 개 메뉴 카드 */}
          <div className="relative z-20 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:-mt-3 xl:grid-cols-4 2xl:gap-6">
            {/* 함께 가볼 곳 */}
            <Link
              href="/places"
              className="group relative h-[350px] overflow-hidden rounded-[26px] border border-white/90 bg-white/95 p-7 shadow-[0_18px_32px_rgba(47,78,111,0.17)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_42px_rgba(47,78,111,0.22)] md:h-[370px] 2xl:h-[400px] 2xl:p-9"
            >
              <div className="absolute -top-[5px] left-[25%] h-[19px] w-[62px] -rotate-[3deg] bg-[#83b6ec]/80 shadow-sm" />
              <div className="absolute -top-[4px] right-[13%] h-[18px] w-[52px] rotate-[5deg] bg-[#6d9ed8]/75 shadow-sm" />

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#eaf3fd] px-3 py-1 text-[10px] font-bold text-[#3478bf]">
                  01
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#3478bf]">
                  Destinations
                </span>
              </div>

              <h2 className="mt-7 text-[27px] font-bold text-[#175c9f] 2xl:text-[31px]">
                함께 가볼 곳
              </h2>

              <p className="mt-4 text-[14px] leading-[1.8] text-[#687789] 2xl:text-[15px]">
                우리의 버킷리스트와
                <br />
                다음 여행지를 모아두었어요.
              </p>

              <PhotoCard
                emoji="🏝️"
                gradient="bg-gradient-to-br from-[#d5ecff] to-[#8fc3ed]"
                rotation="rotate-[6deg] group-hover:rotate-[10deg]"
              />

              <Barcode className="absolute bottom-[32px] left-7 h-[19px] w-[72px] opacity-55 2xl:left-9" />

              <span className="absolute bottom-[31px] right-7 text-[10px] font-bold tracking-[0.13em] text-[#3478bf] 2xl:right-9">
                NEXT ADVENTURE →
              </span>
            </Link>

            {/* 함께 해볼 것 */}
            <Link
              href="/activities"
              className="group relative h-[350px] overflow-hidden rounded-[26px] border border-white/90 bg-white/95 p-7 shadow-[0_18px_32px_rgba(47,78,111,0.17)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_42px_rgba(47,78,111,0.22)] md:h-[370px] 2xl:h-[400px] 2xl:p-9"
            >
              <div className="absolute -top-[5px] left-[34%] h-[20px] w-[66px] rotate-[2deg] bg-[#7fcbb0]/75 shadow-sm" />

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#e7f6ef] px-3 py-1 text-[10px] font-bold text-[#338966]">
                  02
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#338966]">
                  Activities
                </span>
              </div>

              <h2 className="mt-7 text-[27px] font-bold text-[#176543] 2xl:text-[31px]">
                함께 해볼 것
              </h2>

              <p className="mt-4 text-[14px] leading-[1.8] text-[#687789] 2xl:text-[15px]">
                새로운 경험, 우리를
                <br />
                더 가깝게 만들어줘요.
              </p>

              <PhotoCard
                emoji="🎈"
                gradient="bg-gradient-to-br from-[#ffe4c7] to-[#e9a56f]"
                rotation="-rotate-[4deg] group-hover:-rotate-[8deg]"
              />

              <div className="absolute bottom-[47px] right-[112px] flex h-[62px] w-[62px] rotate-[12deg] items-center justify-center rounded-full border border-dashed border-[#8a9a93]/70 text-center text-[6px] font-bold leading-[1.3] tracking-[0.12em] text-[#72847c]">
                LET&apos;S
                <br />
                TRY
                <br />
                TOGETHER
              </div>

              <span className="absolute bottom-[31px] left-7 text-[10px] font-bold tracking-[0.13em] text-[#338966] 2xl:left-9">
                LET&apos;S TRY →
              </span>
            </Link>

            {/* 서로에게 */}
            <Link
              href="/letters"
              className="group relative h-[350px] overflow-hidden rounded-[27px] p-[7px] shadow-[0_18px_32px_rgba(47,78,111,0.17)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_42px_rgba(47,78,111,0.22)] md:h-[370px] 2xl:h-[400px]"
              style={{
                background:
                  'repeating-linear-gradient(45deg, #dd4c4c 0px, #dd4c4c 14px, white 14px, white 28px, #4276b4 28px, #4276b4 42px, white 42px, white 56px)',
              }}
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-[21px] bg-white p-6 2xl:p-8">
                <div className="absolute -top-[5px] left-[26%] h-[19px] w-[62px] -rotate-[3deg] bg-[#f297a5]/80 shadow-sm" />

                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#fff0f2] px-3 py-1 text-[10px] font-bold text-[#dd4860]">
                    03
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#dd4860]">
                    Letters
                  </span>
                </div>

                <h2 className="mt-7 text-[27px] font-bold text-[#a22631] 2xl:text-[31px]">
                  서로에게
                </h2>

                <p className="mt-4 text-[14px] leading-[1.8] text-[#687789] 2xl:text-[15px]">
                  마음이 닿는 편지에
                  <br />
                  작은 설렘을 담아보세요.
                </p>

                <PhotoCard
                  emoji="💗"
                  gradient="bg-gradient-to-br from-[#ffd4da] to-[#f07e8e]"
                  rotation="rotate-[4deg] group-hover:rotate-[8deg]"
                />

                <div className="absolute bottom-[65px] right-[105px] flex -rotate-[10deg] flex-col gap-[7px] opacity-30">
                  <span className="h-[2px] w-[70px] rounded bg-gray-600" />
                  <span className="h-[2px] w-[63px] rounded bg-gray-600" />
                  <span className="h-[2px] w-[70px] rounded bg-gray-600" />
                </div>

                <span className="absolute bottom-[26px] left-6 text-[10px] font-bold tracking-[0.13em] text-[#dd4860] 2xl:left-8">
                  WRITE A LETTER →
                </span>
              </div>
            </Link>

            {/* 다녀온 기록 */}
            <a
              href="https://drive.google.com/drive/folders/1qQ4977BYf33o_T9rzVmhiHX3YbFzyFOA?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[350px] overflow-hidden rounded-[26px] border border-white/90 bg-white/95 p-7 shadow-[0_18px_32px_rgba(47,78,111,0.17)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_42px_rgba(47,78,111,0.22)] md:h-[370px] 2xl:h-[400px] 2xl:p-9"
            >
              <div className="absolute -top-[5px] right-[26%] h-[19px] w-[62px] rotate-[3deg] bg-[#8fc1f1]/75 shadow-sm" />

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#eaf3ff] px-3 py-1 text-[10px] font-bold text-[#3478ce]">
                  04
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#3478ce]">
                  Memories
                </span>
              </div>

              <h2 className="mt-7 text-[27px] font-bold text-[#1658a0] 2xl:text-[31px]">
                다녀온 기록
              </h2>

              <p className="mt-4 text-[14px] leading-[1.8] text-[#687789] 2xl:text-[15px]">
                우리의 추억을 사진과 글로
                <br />
                차곡차곡 기록해요.
              </p>

              <PhotoCard
                emoji="🏔️"
                gradient="bg-gradient-to-br from-[#d8ecff] to-[#67a9e4]"
                rotation="-rotate-[6deg] group-hover:-rotate-[10deg]"
              />

              <div className="absolute bottom-[42px] right-[103px] flex h-[66px] w-[66px] rotate-[12deg] items-center justify-center rounded-full border-2 border-[#5ca1df]/75 bg-white/60">
                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-dashed border-[#5ca1df] text-[7px] font-bold tracking-[0.09em] text-[#357fc6]">
                  MEMORIES
                </div>
              </div>

              <span className="absolute bottom-[31px] left-7 text-[10px] font-bold tracking-[0.13em] text-[#3478ce] 2xl:left-9">
                VIEW MEMORIES →
              </span>
            </a>
          </div>
        </section>
      </main>

      {/* 하단 푸터 */}
      <footer className="relative z-50 flex min-h-[58px] shrink-0 flex-col items-center justify-between gap-2 border-t border-white/70 bg-[#e8f3fd]/90 px-5 py-3 text-[11px] text-[#7498bf] md:flex-row md:px-10 xl:px-[5%]">
        <div className="flex items-center gap-3">
          <PlaneOutline className="h-6 w-6 text-[#4389cd]" />

          <span className={`${dancingScript.className} text-[15px]`}>
            같이 만든 지도, 평생의 여행. ♡
          </span>
        </div>

        <span>
          © 2026 JS ATLAS. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
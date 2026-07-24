import Link from "next/link";
import { Dancing_Script, Merriweather } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function PlaneIcon({
  className = "",
  filled = false,
}: {
  className?: string;
  filled?: boolean;
}) {
  if (filled) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
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
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  );
}

function FlightRoute() {
  return (
    <div className="pointer-events-none absolute right-[12px] top-[20px] z-[2] h-[120px] w-[170px] sm:right-[26px] sm:top-[28px] sm:h-[170px] sm:w-[260px] lg:right-[40px] lg:top-[36px] lg:h-[210px] lg:w-[360px]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 360 210"
        fill="none"
      >
        <path
          d="M30 145
             C76 162, 116 132, 112 98
             C108 64, 66 64, 68 99
             C72 145, 141 158, 192 125
             C230 101, 247 80, 273 69
             C296 60, 320 54, 345 35"
          stroke="#5a9bea"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity=".8"
        />
      </svg>

      <PlaneIcon
        filled
        className="absolute right-[10px] top-[2px] h-[28px] w-[28px] rotate-[18deg] text-[#3d88df] sm:h-[40px] sm:w-[40px]"
      />
    </div>
  );
}

function EnvelopeDecoration() {
  return (
    <div className="pointer-events-none absolute left-[-25px] top-[60px] z-[2] h-[160px] w-[170px] -rotate-[8deg] sm:left-[-10px] sm:top-[78px] sm:h-[230px] sm:w-[240px] lg:left-[15px] lg:top-[92px] lg:h-[310px] lg:w-[330px]">
      <div className="absolute inset-0 rounded-[10px] bg-white shadow-[0_22px_40px_rgba(58,82,118,0.18)]">
        <div
          className="absolute inset-x-0 top-0 h-[12px] rounded-t-[10px]"
          style={{
            background:
              "repeating-linear-gradient(135deg,#e26166 0 17px,#fff 17px 30px,#5078ba 30px 47px,#fff 47px 60px)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-[12px] rounded-r-[10px]"
          style={{
            background:
              "repeating-linear-gradient(45deg,#e26166 0 17px,#fff 17px 30px,#5078ba 30px 47px,#fff 47px 60px)",
          }}
        />

        <svg
          className="absolute inset-0 h-full w-full text-[#dde6f0]"
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

        <div className="absolute left-[10px] bottom-[6px] h-[54px] w-[54px] rounded-full border border-[#4f8fe1]/45 text-[#4f8fe1] sm:h-[72px] sm:w-[72px] lg:left-[18px] lg:bottom-[10px] lg:h-[90px] lg:w-[90px]">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-dashed border-[#4f8fe1]/60 text-[5px] sm:text-[6px]">
            <PlaneIcon className="mb-[2px] h-3 w-3 sm:h-4 sm:w-4" />
            <span className="tracking-[0.15em]">JS ATLAS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomPostcard() {
  return (
    <div className="pointer-events-none absolute bottom-[14px] right-[8px] z-[3] w-[125px] rotate-[6deg] sm:bottom-[18px] sm:right-[18px] sm:w-[190px] lg:bottom-[22px] lg:right-[34px] lg:w-[260px]">
      <div className="overflow-hidden rounded-[8px] border-[8px] border-white bg-white shadow-[0_18px_26px_rgba(56,84,125,0.18)]">
        <img
          src="/jsatlas-santorini.png"
          alt=""
          className="h-[92px] w-full object-cover sm:h-[130px] lg:h-[170px]"
        />
      </div>

      <div className="absolute -left-[30px] top-[46px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-[2px] border-[#3a87e0] bg-white/55 text-[#3a87e0] sm:-left-[40px] sm:top-[70px] sm:h-[82px] sm:w-[82px] lg:-left-[54px] lg:top-[95px] lg:h-[100px] lg:w-[100px]">
        <div className="flex h-[48px] w-[48px] flex-col items-center justify-center rounded-full border border-dashed border-[#3a87e0] text-[7px] font-bold sm:h-[66px] sm:w-[66px] sm:text-[9px] lg:h-[82px] lg:w-[82px] lg:text-[11px]">
          <span>MEMORIES</span>
          <span className="text-[6px] font-medium sm:text-[7px] lg:text-[8px]">
            TOGETHER
          </span>
        </div>
      </div>
    </div>
  );
}

type CardItem = {
  number: string;
  label: string;
  title: string;
  description: string[];
  href: string;
  cta: string;
  imageSrc: string;
  color: "blue" | "green" | "pink";
  style?: "airmail";
};

const cards: CardItem[] = [
  {
    number: "01",
    label: "DESTINATIONS",
    title: "함께 가볼 곳",
    description: ["우리의 버킷리스트로", "다음 여행지를 모아두었어요."],
    href: "/places",
    cta: "NEXT ADVENTURE",
    imageSrc: "/home-card-1.jpg", // ← 네 현재 이미지 경로로 바꿔
    color: "blue",
  },
  {
    number: "02",
    label: "ACTIVITIES",
    title: "함께 해볼 것",
    description: ["새로운 경험, 우리를", "더 가깝게 만들어줘요."],
    href: "/activities",
    cta: "LET’S TRY",
    imageSrc: "/home-card-2.jpg", // ← 네 현재 이미지 경로로 바꿔
    color: "green",
  },
  {
    number: "03",
    label: "LETTERS",
    title: "서로에게",
    description: ["마음이 닿는 편지에", "작은 설렘을 담아보세요."],
    href: "/letters",
    cta: "WRITE A LETTER",
    imageSrc: "/home-card-3.jpg", // ← 네 현재 이미지 경로로 바꿔
    color: "pink",
    style: "airmail",
  },
  {
    number: "04",
    label: "MEMORIES",
    title: "다녀온 기록",
    description: ["우리의 추억을 사진과 글로", "차곡차곡 기록해요."],
    href: "https://drive.google.com/drive/folders/1qQ4977BYf33o_T9rzVmhiHX3YbFzyFOA?usp=sharing",
    cta: "VIEW MEMORIES",
    imageSrc: "/home-card-4.jpg", // ← 네 현재 이미지 경로로 바꿔
    color: "blue",
  },
];

function getColorStyle(color: CardItem["color"]) {
  if (color === "green") {
    return {
      badgeBg: "bg-[#e8f7f0]",
      badgeText: "text-[#2f956d]",
      labelText: "text-[#2f956d]",
      titleText: "text-[#156d4a]",
      ctaText: "text-[#2f956d]",
      tape: "bg-[#8bd6c0]/85",
      stampBorder: "border-[#7f8c89]/40",
      stampText: "text-[#7f8c89]",
    };
  }

  if (color === "pink") {
    return {
      badgeBg: "bg-[#fff0f3]",
      badgeText: "text-[#f05d78]",
      labelText: "text-[#f05d78]",
      titleText: "text-[#4b3d40]",
      ctaText: "text-[#f05d78]",
      tape: "bg-[#f8a7ba]/85",
      stampBorder: "border-[#999]",
      stampText: "text-[#8f8f8f]",
    };
  }

  return {
    badgeBg: "bg-[#eaf3ff]",
    badgeText: "text-[#2f7de0]",
    labelText: "text-[#2f7de0]",
    titleText: "text-[#0d58b3]",
    ctaText: "text-[#2f7de0]",
    tape: "bg-[#9dceff]/85",
    stampBorder: "border-[#68a7e8]/50",
    stampText: "text-[#2f7de0]",
  };
}

function HomeCard({ item }: { item: CardItem }) {
  const color = getColorStyle(item.color);

  const isExternal = item.href.startsWith("http");

  const content = (
    <div
      className={`group relative h-full overflow-hidden rounded-[22px] bg-white/97 p-4 shadow-[0_12px_24px_rgba(55,84,122,0.13)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(55,84,122,0.17)] sm:rounded-[26px] sm:p-6 ${
        item.style === "airmail"
          ? ""
          : "border border-white/95"
      }`}
    >
      <div
        className={`absolute right-[18px] top-[-8px] h-[22px] w-[16px] rotate-[7deg] shadow-sm sm:h-[26px] sm:w-[18px] ${color.tape}`}
      />

      <div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-3">
        <span
          className={`rounded-full px-[10px] py-[4px] text-[10px] font-bold sm:px-3 sm:py-1 sm:text-[11px] ${color.badgeBg} ${color.badgeText}`}
        >
          {item.number}
        </span>
        <span
          className={`text-[10px] font-bold tracking-[0.06em] sm:text-[12px] ${color.labelText}`}
        >
          {item.label}
        </span>
      </div>

      <div className="relative z-10 pr-[86px] sm:pr-[120px]">
        <h3
          className={`text-[20px] font-bold tracking-[-0.03em] sm:text-[28px] ${color.titleText}`}
        >
          {item.title}
        </h3>

        <div className="mt-4 space-y-1 text-[13px] leading-[1.65] text-[#5f6772] sm:mt-6 sm:space-y-2 sm:text-[16px]">
          {item.description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className="absolute right-3 top-[72px] z-[1] w-[78px] rotate-[7deg] bg-white p-[6px] shadow-[0_10px_18px_rgba(0,0,0,0.12)] sm:right-4 sm:top-[95px] sm:w-[122px] sm:p-[8px]">
        <img
          src={item.imageSrc}
          alt=""
          className="h-[95px] w-full object-cover sm:h-[140px]"
        />
      </div>

      {item.number === "01" && (
        <div className="absolute bottom-[58px] left-[18px] flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#7db0ef]/50 bg-white/70 text-[#69a0e8] sm:bottom-[70px] sm:left-[28px] sm:h-[76px] sm:w-[76px]">
          <div className="flex h-[42px] w-[42px] flex-col items-center justify-center rounded-full border border-dashed border-[#7db0ef]/60 text-[7px] font-bold sm:h-[58px] sm:w-[58px] sm:text-[9px]">
            <PlaneIcon className="mb-[2px] h-3 w-3 sm:h-4 sm:w-4" />
            <span>JS ATLAS</span>
          </div>
        </div>
      )}

      {item.number === "02" && (
        <div
          className={`absolute bottom-[56px] right-[76px] flex h-[56px] w-[56px] rotate-[8deg] items-center justify-center rounded-full border border-dashed text-center text-[7px] font-bold leading-[1.2] tracking-[0.06em] sm:bottom-[68px] sm:right-[100px] sm:h-[72px] sm:w-[72px] sm:text-[9px] ${color.stampBorder} ${color.stampText}`}
        >
          LET&apos;S
          <br />
          TRY
          <br />
          TOGETHER
        </div>
      )}

      {item.number === "03" && (
        <div className="absolute bottom-[68px] right-[80px] flex -rotate-[10deg] flex-col gap-[5px] opacity-30 sm:bottom-[86px] sm:right-[110px] sm:gap-[7px]">
          <span className="h-[1.5px] w-[45px] bg-[#6b7280] sm:w-[70px]" />
          <span className="h-[1.5px] w-[45px] bg-[#6b7280] sm:w-[70px]" />
          <span className="h-[1.5px] w-[45px] bg-[#6b7280] sm:w-[70px]" />
        </div>
      )}

      {item.number === "04" && (
        <div className="absolute bottom-[58px] right-[74px] flex h-[58px] w-[58px] rotate-[10deg] items-center justify-center rounded-full border border-[#6aa8eb]/40 bg-white/65 sm:bottom-[72px] sm:right-[100px] sm:h-[78px] sm:w-[78px]">
          <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-dashed border-[#6aa8eb]/60 text-[7px] font-bold text-[#367bd0] sm:h-[62px] sm:w-[62px] sm:text-[9px]">
            MEMORIES
          </div>
        </div>
      )}

      <div
        className={`absolute bottom-4 left-4 text-[12px] font-bold tracking-[0.03em] sm:bottom-6 sm:left-6 sm:text-[15px] ${color.ctaText}`}
      >
        {item.cta} <span className="ml-1">→</span>
      </div>
    </div>
  );

  if (item.style === "airmail") {
    const wrap = (
      <div
        className="h-full rounded-[24px] p-[4px] sm:rounded-[28px]"
        style={{
          background:
            "repeating-linear-gradient(45deg,#ef7186 0 10px,#fff 10px 20px,#5b8bd3 20px 30px,#fff 30px 40px)",
        }}
      >
        <div className="h-full rounded-[20px] bg-white p-[0px] sm:rounded-[24px]">
          {content}
        </div>
      </div>
    );

    if (isExternal) {
      return (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
          {wrap}
        </a>
      );
    }

    return <Link href={item.href}>{wrap}</Link>;
  }

  if (isExternal) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className="block h-full">
      {content}
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#ecf6ff] px-2 py-2 sm:px-4 sm:py-4">
      <div className="mx-auto w-full max-w-[1500px] overflow-hidden rounded-[26px] bg-white shadow-[0_18px_48px_rgba(44,70,108,0.12)] sm:rounded-[34px]">
        {/* 상단 바 */}
        <header className="flex h-[58px] items-center border-b border-[#e4eef8] bg-white/95 px-4 sm:h-[72px] sm:px-8">
          <div className="flex items-center gap-2 text-[#2e79d9] sm:gap-3">
            <PlaneIcon className="h-[20px] w-[20px] -rotate-[10deg] sm:h-[28px] sm:w-[28px]" />
            <span
              className={`${merriweather.className} text-[15px] font-bold sm:text-[22px]`}
            >
              JS ATLAS
            </span>
          </div>
        </header>

        {/* 본문 */}
        <section
          className="relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 35% 25% at 8% 10%, rgba(255,255,255,0.92), transparent 70%), radial-gradient(ellipse 32% 24% at 92% 12%, rgba(255,255,255,0.92), transparent 70%), linear-gradient(180deg,#d7ebfd 0%,#e9f5ff 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(20deg,transparent 0,transparent 80px,rgba(69,126,184,.3) 81px,transparent 82px,transparent 140px), repeating-linear-gradient(-25deg,transparent 0,transparent 110px,rgba(69,126,184,.2) 111px,transparent 112px,transparent 170px)",
            }}
          />

          <div className="pointer-events-none absolute -left-[40px] top-[10px] h-[130px] w-[170px] rounded-full bg-white/75 blur-[40px] sm:-left-[60px] sm:top-[0px] sm:h-[220px] sm:w-[260px]" />
          <div className="pointer-events-none absolute -right-[40px] top-[10px] h-[150px] w-[180px] rounded-full bg-white/80 blur-[45px] sm:-right-[60px] sm:top-[10px] sm:h-[240px] sm:w-[280px]" />

          <EnvelopeDecoration />
          <FlightRoute />

          <div className="relative z-10 px-4 pb-[180px] pt-8 sm:px-8 sm:pb-[240px] sm:pt-12 lg:px-12 lg:pb-[260px] lg:pt-14">
            {/* 히어로 */}
            <div className="mx-auto max-w-[820px] text-center">
              <div className="mb-2 flex items-center justify-center gap-2 text-[#2f7de0] sm:mb-4 sm:gap-3">
                <PlaneIcon className="h-[20px] w-[20px] -rotate-[10deg] sm:h-[28px] sm:w-[28px]" />
                <span
                  className={`${merriweather.className} text-[15px] font-bold sm:text-[20px]`}
                >
                  JS ATLAS
                </span>
              </div>

              <p
                className={`${dancingScript.className} text-[15px] text-[#5a92d4] sm:text-[22px]`}
              >
                journey together, letters forever...
              </p>

              <h1
                className={`${merriweather.className} mt-3 text-[56px] font-bold leading-none tracking-[0.03em] text-[#2d75d8] sm:mt-5 sm:text-[92px] lg:text-[118px]`}
              >
                JS ATLAS
              </h1>

              <div className="mt-4 space-y-1 text-[18px] leading-[1.5] text-[#444] sm:mt-6 sm:space-y-2 sm:text-[28px] lg:text-[32px]">
                <p>함께 걷는 모든 순간을 지도에 담아,</p>
                <p className="flex items-center justify-center gap-2">
                  우리만의 이야기로 만들어가는 공간
                  <span className="text-[#4d92e2]">♡</span>
                </p>
              </div>
            </div>

            {/* 카드 4개 */}
            <div className="mx-auto mt-10 grid max-w-[980px] grid-cols-2 gap-4 sm:mt-14 sm:gap-5 lg:mt-16 lg:max-w-[1240px] lg:grid-cols-4 lg:gap-6">
              {cards.map((item) => (
                <div
                  key={item.number}
                  className="min-h-[280px] sm:min-h-[420px] lg:min-h-[390px]"
                >
                  <HomeCard item={item} />
                </div>
              ))}
            </div>

            {/* 하단 카피 */}
            <div className="mt-10 pl-2 text-left sm:mt-14 sm:pl-8 lg:mt-16">
              <p
                className={`${dancingScript.className} text-[22px] text-[#4f8fe1] sm:text-[34px]`}
              >
                같이 쓰는 지도,
              </p>
              <p
                className={`${dancingScript.className} mt-1 text-[22px] text-[#4f8fe1] sm:text-[34px]`}
              >
                둘만의 여행. ♡
              </p>
            </div>
          </div>

          <BottomPostcard />
        </section>
      </div>
    </main>
  );
}
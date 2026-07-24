import { Dancing_Script, Merriweather } from 'next/font/google';
import Link from 'next/link';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c0dcf7] via-[#d6e7f9] to-[#eaf2fb] flex flex-col font-sans relative overflow-x-hidden">
      
      {/* 뭉게구름 배경 효과 */}
      <div className="absolute top-[15%] left-[10%] w-[300px] md:w-[400px] h-[250px] bg-white/70 blur-[80px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[25%] right-[10%] w-[300px] md:w-[500px] h-[300px] bg-white/60 blur-[90px] rounded-full pointer-events-none z-0"></div>
      
      {/* 상단 네비게이션 바 */}
      <header className="w-full h-[60px] bg-[#f8fbff]/80 backdrop-blur-md flex items-center px-4 md:px-8 border-b border-white shadow-sm z-50 relative">
        <div className="flex items-center gap-2 text-[#3a6bb5]">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13"></path>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
          </svg>
          <span className={`${merriweather.className} font-bold text-xl tracking-wider mt-0.5`}>
            JS ATLAS
          </span>
        </div>
      </header>

      {/* 메인 컨텐츠 영역 */}
      <main className="flex-1 relative w-full flex flex-col items-center pt-10 md:pt-16 pb-20 md:pb-24 z-10 px-4">
        
        {/* 중앙 타이틀 영역 */}
        <div className="text-center flex flex-col items-center mb-10 md:mb-14 z-10 relative">
          
          <p className={`${dancingScript.className} text-[#3a6bb5] text-lg md:text-xl mb-2 tracking-widest`}>
            journey together, letters forever... ♡
          </p>

          {/* JS ATLAS 타이틀과 비행기 궤적을 나란히 배치하는 컨테이너 */}
          <div className="relative inline-flex items-center justify-center my-1">
            <h1 className={`${merriweather.className} text-5xl md:text-7xl font-bold text-[#1e56a0] tracking-wide drop-shadow-sm`}>
              JS ATLAS
            </h1>

            {/* JS ATLAS 바로 오른쪽 옆으로 자연스럽게 이어지는 하트 비행기 궤적 (태블릿/PC에서만 표시) */}
            <div className="absolute left-[102%] top-1/2 -translate-y-1/2 w-[280px] h-[80px] pointer-events-none hidden lg:block">
              <svg viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-75">
                <path d="M 0 50 Q 60 10 120 40 T 240 20" stroke="#3a6bb5" strokeWidth="1.5" strokeDasharray="3 3" fill="transparent"/>
              </svg>
              {/* 비행기 아이콘 */}
              <svg className="absolute top-[8px] right-[20px] text-[#3a6bb5] rotate-[20deg]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M22 16.92v-1.99l-8.5-5.36V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v6.07L2 14.93v1.99l8.5-2.65v5.33l-2.28 1.71V23l3.28-1 3.28 1v-1.71l-2.28-1.71v-5.33l8.5 2.65z"/>
              </svg>
            </div>
          </div>

          <p className="text-gray-600 text-sm md:text-base mt-3 md:mt-4">
            함께 걷는 모든 순간을 지도에 담아,
          </p>
          <p className="text-gray-600 text-sm md:text-base mt-1 flex items-center justify-center gap-1">
            우리만의 이야기로 만들어가는 공간 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3a6bb5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </p>
        </div>

        {/* 4개의 카드 그리드 (모바일 1열, 태블릿 2열, PC 4열 반응형) */}
        <div className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 z-10 relative">
           
           {/* 1. 함께 가볼 곳 (Destinations) */}
           <Link href="/places" className="relative bg-white rounded-[2rem] shadow-xl p-8 flex flex-col h-[320px] overflow-hidden border border-gray-100 group hover:-translate-y-2 transition-transform duration-300 cursor-pointer block">
              <div className="absolute -top-2 left-1/4 w-12 h-5 bg-[#8bb5f0]/80 -rotate-3 backdrop-blur-sm shadow-sm z-20"></div>
              <div className="absolute -top-2 right-8 w-10 h-4 bg-[#6f9ce0]/80 rotate-6 backdrop-blur-sm shadow-sm z-20"></div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <span className="bg-[#eaf2fb] text-[#3a6bb5] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">01</span>
                <span className="text-[#3a6bb5] text-[10px] font-bold tracking-widest uppercase">Destinations</span>
              </div>
              <div className="relative z-10 mb-4">
                <h2 className="text-2xl font-bold text-[#1e56a0] mb-3">함께 가볼 곳</h2>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  우리의 버킷리스트와<br />다음 여행지를 모아두었어요.
                </p>
              </div>
              <div className="absolute right-6 top-28 w-[110px] h-[120px] bg-white p-2 shadow-lg rotate-6 group-hover:rotate-12 transition-transform duration-500 z-0 border border-gray-100">
                <div className="w-full h-[80px] bg-gradient-to-br from-[#d6e7f9] to-[#c0dcf7] flex items-center justify-center overflow-hidden">
                  <span className="text-3xl">🌴</span>
                </div>
              </div>
              <div className="mt-auto flex justify-between items-end relative z-10">
                <div className="opacity-50">
                   <svg width="60" height="15" viewBox="0 0 100 24" fill="#1f2937">
                      <rect x="0" y="0" width="3" height="24" /><rect x="5" y="0" width="1" height="24" /><rect x="8" y="0" width="4" height="24" /><rect x="14" y="0" width="2" height="24" /><rect x="18" y="0" width="1" height="24" /><rect x="22" y="0" width="5" height="24" /><rect x="29" y="0" width="2" height="24" /><rect x="33" y="0" width="3" height="24" /><rect x="38" y="0" width="1" height="24" /><rect x="42" y="0" width="4" height="24" /><rect x="48" y="0" width="2" height="24" /><rect x="52" y="0" width="1" height="24" />
                   </svg>
                </div>
                <span className="text-[#3a6bb5] text-[10px] font-bold tracking-widest group-hover:text-[#1e56a0] transition-colors">
                  NEXT ADVENTURE →
                </span>
              </div>
           </Link>

           {/* 2. 함께 해볼 것 (Activities) */}
           <Link href="/activities" className="relative bg-white rounded-[2rem] shadow-xl p-8 flex flex-col h-[320px] overflow-hidden border border-gray-100 group hover:-translate-y-2 transition-transform duration-300 cursor-pointer block">
              <div className="absolute -top-2 left-1/3 w-14 h-5 bg-[#7bc8a4]/80 rotate-2 backdrop-blur-sm shadow-sm z-20"></div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <span className="bg-[#e6f4ed] text-[#2e8c60] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">02</span>
                <span className="text-[#2e8c60] text-[10px] font-bold tracking-widest uppercase">Activities</span>
              </div>
              <div className="relative z-10 mb-4">
                <h2 className="text-2xl font-bold text-[#1b5e3f] mb-3">함께 해볼 것</h2>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  새로운 경험, 우리를<br />더 가깝게 만들어줘요.
                </p>
              </div>
              <div className="absolute right-6 top-28 w-[110px] h-[120px] bg-white p-2 shadow-lg -rotate-3 group-hover:-rotate-6 transition-transform duration-500 z-0 border border-gray-100">
                <div className="w-full h-[80px] bg-gradient-to-br from-[#f0d5b6] to-[#e4a87a] flex items-center justify-center overflow-hidden">
                  <span className="text-3xl">🎈</span>
                </div>
              </div>
              <div className="absolute right-24 bottom-16 w-[56px] h-[56px] rounded-full border-[1.5px] border-dashed border-gray-400 flex items-center justify-center rotate-12 opacity-50 z-10">
                 <span className="text-[6px] font-bold text-gray-500 tracking-widest text-center leading-tight">
                    LET'S<br/>TRY<br/>TOGETHER
                 </span>
              </div>
              <div className="mt-auto flex justify-start items-end relative z-10">
                <span className="text-[#2e8c60] text-[10px] font-bold tracking-widest group-hover:text-[#1b5e3f] transition-colors">
                  LET'S TRY →
                </span>
              </div>
           </Link>

           {/* 3. 서로에게 (Letters) */}
           <Link href="/letters" className="relative rounded-[2rem] shadow-xl h-[320px] group hover:-translate-y-2 transition-transform duration-300 cursor-pointer overflow-hidden block" 
                style={{ background: 'repeating-linear-gradient(45deg, #d93838 0, #d93838 14px, white 14px, white 28px, #3a6bb5 28px, #3a6bb5 42px, white 42px, white 56px)' }}>
              <div className="absolute inset-[6px] bg-white rounded-[1.6rem] p-7 flex flex-col z-10 overflow-hidden">
                <div className="absolute -top-2 left-1/4 w-12 h-5 bg-[#f49797]/90 -rotate-3 backdrop-blur-sm shadow-sm z-20"></div>
                <div className="flex items-center gap-3 mb-4 mt-1">
                  <span className="bg-[#fef2f2] text-[#dc2626] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">03</span>
                  <span className="text-[#dc2626] text-[10px] font-bold tracking-widest uppercase">Letters</span>
                </div>
                <div className="relative z-10 mb-4">
                  <h2 className="text-2xl font-bold text-[#991b1b] mb-3">서로에게</h2>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    마음이 닿는 편지에<br />작은 설렘을 담아보세요.
                  </p>
                </div>
                <div className="absolute right-4 top-24 w-[110px] h-[120px] bg-white p-2 shadow-lg rotate-3 group-hover:rotate-6 transition-transform duration-500 z-10 border border-gray-100">
                  <div className="w-full h-[80px] bg-gradient-to-br from-[#fecaca] to-[#f87171] flex items-center justify-center overflow-hidden">
                    <span className="text-3xl">❤️</span>
                  </div>
                </div>
                <div className="absolute right-24 bottom-16 flex flex-col gap-1.5 opacity-30 z-0 -rotate-12">
                  <div className="w-16 h-[2px] bg-gray-600 rounded-full"></div>
                  <div className="w-16 h-[2px] bg-gray-600 rounded-full"></div>
                  <div className="w-16 h-[2px] bg-gray-600 rounded-full"></div>
                </div>
                <div className="mt-auto flex justify-start items-end relative z-10">
                  <span className="text-[#dc2626] text-[10px] font-bold tracking-widest group-hover:text-[#991b1b] transition-colors">
                    WRITE A LETTER →
                  </span>
                </div>
              </div>
           </Link>

           {/* 4. 다녀온 기록 (Memories) - 구글 드라이브 연결 */}
           <a href="https://drive.google.com/drive/folders/1qQ4977BYf33o_T9rzVmhiHX3YbFzyFOA?usp=sharing" target="_blank" rel="noopener noreferrer" className="relative bg-white rounded-[2rem] shadow-xl p-8 flex flex-col h-[320px] overflow-hidden border border-gray-100 group hover:-translate-y-2 transition-transform duration-300 cursor-pointer block">
              <div className="absolute -top-2 right-1/4 w-12 h-5 bg-[#93c5fd]/80 rotate-3 backdrop-blur-sm shadow-sm z-20"></div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <span className="bg-[#eff6ff] text-[#2563eb] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">04</span>
                <span className="text-[#2563eb] text-[10px] font-bold tracking-widest uppercase">Memories</span>
              </div>
              <div className="relative z-10 mb-4">
                <h2 className="text-2xl font-bold text-[#1e40af] mb-3">다녀온 기록</h2>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  우리의 추억을 사진과 글로<br />차곡차곡 기록해요.
                </p>
              </div>
              <div className="absolute right-4 top-24 w-[110px] h-[120px] bg-white p-2 shadow-lg -rotate-6 group-hover:-rotate-12 transition-transform duration-500 z-0 border border-gray-100">
                <div className="w-full h-[80px] bg-gradient-to-br from-[#bfdbfe] to-[#60a5fa] flex items-center justify-center overflow-hidden">
                  <span className="text-3xl">🏞️</span>
                </div>
              </div>
              <div className="absolute right-20 bottom-16 w-[60px] h-[60px] rounded-full border-[1.5px] border-solid border-[#60a5fa] flex items-center justify-center rotate-12 opacity-90 z-10 bg-white/40 backdrop-blur-[1px] shadow-sm">
                 <div className="w-[50px] h-[50px] rounded-full border border-dashed border-[#60a5fa] flex items-center justify-center">
                   <span className="text-[7.5px] font-bold text-[#2563eb] tracking-widest text-center">
                      MEMORIES
                   </span>
                 </div>
              </div>
              <div className="mt-auto flex justify-start items-end relative z-10">
                <span className="text-[#2563eb] text-[10px] font-bold tracking-widest group-hover:text-[#1e40af] transition-colors">
                  VIEW MEMORIES →
                </span>
              </div>
           </a>

        </div>

      </main>

      {/* 하단 바 (푸터) - 모바일에서 레이아웃 깨짐 방지 */}
      <footer className="w-full min-h-[50px] py-3 bg-[#e6f0fa] flex flex-col md:flex-row items-center justify-between px-4 md:px-8 text-[#8ba8d0] border-t border-white/50 text-xs z-50 relative gap-2">
        <div className="flex items-center gap-2 md:gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <path d="M22 2L11 13"></path>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
          </svg>
          <span className="italic font-medium text-center">같이 만든 지도, 평생의 여행. ♡</span>
        </div>
        <div className="flex items-center gap-4">
          <span>© 2026 JS ATLAS. All rights reserved.</span>
        </div>
      </footer>

    </div>
  );
}
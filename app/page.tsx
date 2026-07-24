'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dancing_Script, Merriweather } from 'next/font/google';
import { supabase } from '@/app/lib/supabase';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 로그인 버튼을 눌렀을 때 실행되는 함수
  const handleLogin = async (e: React.FormEvent) => {
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
        setIsLoading(false); // 이동하면서 로딩 버튼 멈추기
      }
    } catch (err) {
      setErrorMsg('로그인 중 오류가 발생했습니다.');
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#b8d6f5] via-[#d6e7f9] to-[#eaf2fb] flex items-center justify-center p-4 overflow-hidden">
      
      {/* 뭉게구름 배경 효과 */}
      <div className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[500px] h-[350px] bg-white/90 blur-[70px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[10%] right-[5%] w-[300px] md:w-[600px] h-[300px] bg-white/95 blur-[80px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[25%] w-[400px] md:w-[800px] h-[400px] bg-white/90 blur-[90px] rounded-full pointer-events-none z-0"></div>

      {/* 1. 왼쪽 편지 봉투 (모바일에서는 숨기고 PC 화면에서만 표시) */}
      <div className="absolute top-[65%] -translate-y-1/2 -left-80 xl:-left-56 w-[650px] h-[480px] -rotate-12 z-0 hidden lg:block shadow-2xl pointer-events-none">
        <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden border border-gray-200">
          <div className="absolute inset-0" style={{ padding: '12px', background: 'repeating-linear-gradient(45deg, #d93838 0, #d93838 16px, white 16px, white 32px, #3a6bb5 32px, #3a6bb5 48px, white 48px, white 64px)' }}>
            <div className="w-full h-full bg-[#fafafa] rounded relative overflow-hidden flex items-center justify-center shadow-inner">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-[60%] text-gray-300 opacity-50" fill="none" stroke="currentColor" strokeWidth="0.5">
                 <path d="M0,0 L50,100 L100,0" />
              </svg>
              <div className="absolute top-12 left-12 w-[110px] h-[110px] rounded-full border-2 border-[#3a6bb5] flex flex-col items-center justify-center opacity-80 -rotate-12 bg-[#fafafa]">
                <div className="w-[94px] h-[94px] rounded-full border-2 border-dashed border-[#3a6bb5] flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-1 text-[#3a6bb5]">
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                  </svg>
                  <span className="text-[11px] font-bold text-[#3a6bb5] tracking-widest mt-1">JS ATLAS</span>
                </div>
              </div>
              <div className="absolute top-[85px] left-[130px] flex flex-col gap-2 opacity-60">
                <div className="w-24 h-[1.5px] bg-[#3a6bb5]"></div>
                <div className="w-24 h-[1.5px] bg-[#3a6bb5]"></div>
                <div className="w-24 h-[1.5px] bg-[#3a6bb5]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 중앙(로그인) 및 오른쪽(보딩패스) 컨테이너 */}
      <div className="flex flex-row items-center justify-center lg:justify-end gap-16 xl:gap-24 w-full max-w-[1400px] relative z-10 lg:pl-32 xl:pl-40">
        
        {/* ========================================= */}
        {/* 2. 중앙 로그인 카드 (모바일 100% 폭 대응) */}
        {/* ========================================= */}
        <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-[420px] p-2 shrink-0">
          <form onSubmit={handleLogin} className="border border-dashed border-[#a4c2f4] rounded-[1.5rem] p-6 md:p-8 flex flex-col gap-5 bg-white/90 backdrop-blur-sm">
            <div className="text-center mt-2">
              <p className={`${dancingScript.className} text-[#3a6bb5] text-lg md:text-xl mb-1 tracking-wider`}>
                journey together, letters forever... ♡
              </p>
              <h1 className={`${merriweather.className} text-3xl md:text-4xl font-bold text-[#1e56a0] mb-2 md:mb-3`}>
                Welcome Aboard
              </h1>
              <p className="text-gray-500 text-xs md:text-sm">
                함께 떠나는 여행의 첫 걸음, 로그인하세요. ♡
              </p>
              <div className="flex justify-center mt-3 text-[#a4c2f4]">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                </svg>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">아이디</label>
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="아이디를 입력하세요"
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#3a6bb5] transition-all text-sm placeholder:text-gray-400 text-gray-800"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">비밀번호</label>
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호를 입력하세요"
                    required
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#3a6bb5] transition-all text-sm placeholder:text-gray-400 text-gray-800"
                  />
                </div>
              </div>

              {/* 에러 메시지 표시 */}
              {errorMsg && (
                <div className="text-red-500 text-xs text-center font-medium bg-red-50 py-2 rounded-lg border border-red-100">
                  {errorMsg}
                </div>
              )}

              <div className="flex items-center justify-between mt-1 px-1">
                <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 text-[#1e56a0] focus:ring-[#1e56a0]" />
                  로그인 상태 유지
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1e56a0] hover:bg-[#153e75] text-white font-medium py-3.5 rounded-xl mt-1 transition-all active:scale-95 text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-200 disabled:opacity-50"
              >
                {isLoading ? '로그인 중...' : '로그인'}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                </svg>
              </button>
            </div>
            
            <div className="flex justify-center text-[#a4c2f4] mt-1 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
          </form>
        </div>

        {/* ========================================= */}
        {/* 3. 오른쪽 보딩 패스 (모바일에서는 숨김, 태블릿/PC md 이상에서만 표시) */}
        {/* ========================================= */}
        <div className="hidden lg:flex flex-col bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl w-[480px] shrink-0 relative z-10 -rotate-[4deg] transition-transform hover:rotate-0 duration-500 border border-gray-100 overflow-hidden pointer-events-none">
          <div className="bg-[#3a6bb5] px-6 py-4 flex justify-between items-center text-white relative">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="-rotate-45">
                <path d="M22 16.92v-1.99l-8.5-5.36V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v6.07L2 14.93v1.99l8.5-2.65v5.33l-2.28 1.71V23l3.28-1 3.28 1v-1.71l-2.28-1.71v-5.33l8.5 2.65z"/>
              </svg>
              <span className="font-bold tracking-widest text-base">BOARDING PASS</span>
            </div>
            <span className="font-medium text-base pr-2">JS ♡</span>
            <div className="absolute -bottom-2 right-[125px] w-4 h-4 bg-[#eaf2fb] rounded-full"></div>
          </div>

          <div className="px-7 py-6 flex flex-col relative bg-white">
            <div className="absolute -bottom-2 right-[125px] w-4 h-4 bg-[#eaf2fb] rounded-full"></div>
            <div className="flex justify-between items-stretch">
              <div className="flex flex-col gap-5 flex-1 pr-6">
                <div className="flex flex-col">
                  <span className="text-[11px] text-gray-400 mb-0.5 font-bold tracking-widest uppercase">FROM</span>
                  <span className="text-[22px] font-bold text-gray-800">우리의 오늘</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-gray-400 mb-0.5 font-bold tracking-widest uppercase">TO</span>
                  <span className="text-[22px] font-bold text-gray-800">함께하는 내일</span>
                </div>
              </div>

              <div className="w-px border-l-[2px] border-dashed border-gray-200 relative right-[20px]"></div>

              <div className="flex flex-col gap-5 w-[100px]">
                <div className="flex flex-col">
                  <span className="text-[11px] text-gray-400 mb-0.5 font-bold tracking-widest uppercase">SEAT</span>
                  <span className="text-xl font-bold text-gray-800">07A</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-gray-400 mb-0.5 font-bold tracking-widest uppercase">DATE</span>
                  <span className="text-xl font-bold text-gray-800">FOREVER</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-6 pt-2">
              <svg width="130" height="26" viewBox="0 0 100 24" fill="#1f2937" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                <rect x="0" y="0" width="3" height="24" /><rect x="5" y="0" width="1" height="24" /><rect x="8" y="0" width="4" height="24" /><rect x="14" y="0" width="2" height="24" /><rect x="18" y="0" width="1" height="24" /><rect x="22" y="0" width="5" height="24" /><rect x="29" y="0" width="2" height="24" /><rect x="33" y="0" width="3" height="24" /><rect x="38" y="0" width="1" height="24" /><rect x="42" y="0" width="4" height="24" /><rect x="48" y="0" width="2" height="24" /><rect x="52" y="0" width="1" height="24" /><rect x="55" y="0" width="3" height="24" /><rect x="60" y="0" width="5" height="24" /><rect x="67" y="0" width="2" height="24" /><rect x="71" y="0" width="1" height="24" /><rect x="74" y="0" width="4" height="24" /><rect x="80" y="0" width="3" height="24" /><rect x="85" y="0" width="1" height="24" /><rect x="88" y="0" width="3" height="24" /><rect x="93" y="0" width="2" height="24" /><rect x="97" y="0" width="3" height="24" />
              </svg>
              <span className="text-[10px] text-gray-500 font-bold tracking-tighter">
                MEMORIES WE COLLECT TOGETHER
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
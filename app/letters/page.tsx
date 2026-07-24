'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dancing_Script, Merriweather } from 'next/font/google';
import { supabase } from '@/app/lib/supabase';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

interface Letter {
  id: string;
  sender: string;
  receiver: string;
  title: string;
  content: string;
  created_at: string;
}

export default function LettersPage() {
  const [activeTab, setActiveTab] = useState<'송미' | '진영' | 'diary'>('송미');
  const [letters, setLetters] = useState<Letter[]>([]);
  
  // 작성/수정 모달 상태
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  
  // 상세 보기 팝업 모달 상태
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

  // 폼 입력 상태
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 데이터 불러오기
  const fetchLetters = async () => {
    const { data, error } = await supabase
      .from('letters')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setLetters(data);
    }
  };

  useEffect(() => {
    fetchLetters();
  }, []);

  // 작성 또는 수정 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);

    let sender = '진영';
    let receiver = '송미';

    if (activeTab === '진영') {
      sender = '송미';
      receiver = '진영';
    } else if (activeTab === 'diary') {
      sender = '우리 함께';
      receiver = '우리들의 일기장';
    }

    if (selectedLetter) {
      // 수정 모드
      const { error } = await supabase
        .from('letters')
        .update({ title: title.trim(), content: content.trim() })
        .eq('id', selectedLetter.id);

      if (!error) {
        closeAllModals();
        fetchLetters();
      } else {
        alert('수정 중 오류가 발생했습니다.');
      }
    } else {
      // 추가 모드
      const { error } = await supabase.from('letters').insert([
        { sender, receiver, title: title.trim(), content: content.trim() },
      ]);

      if (!error) {
        closeAllModals();
        fetchLetters();
      } else {
        alert('저장 중 오류가 발생했습니다.');
      }
    }
    setIsSubmitting(false);
  };

  // 삭제 핸들러
  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('정말 삭제하시겠습니까?')) return;

    const { error } = await supabase.from('letters').delete().eq('id', id);
    if (!error) {
      closeAllModals();
      fetchLetters();
    } else {
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  // 모든 모달 닫기 및 초기화
  const closeAllModals = () => {
    setIsWriteModalOpen(false);
    setSelectedLetter(null);
    setTitle('');
    setContent('');
  };

  // 수정 모달 열기
  const openEditModal = (letter: Letter, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedLetter(letter);
    setTitle(letter.title);
    setContent(letter.content);
    setIsWriteModalOpen(true);
  };

  // 현재 탭에 맞는 목록 필터링
  const currentItems = letters.filter((item) => {
    if (activeTab === '송미') return item.receiver === '송미';
    if (activeTab === '진영') return item.receiver === '진영';
    if (activeTab === 'diary') return item.receiver === '우리들의 일기장';
    return false;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c0dcf7] via-[#d6e7f9] to-[#eaf2fb] flex flex-col font-sans relative overflow-x-hidden">
      
      {/* 배경 구름 효과 */}
      <div className="absolute top-[15%] left-[10%] w-[400px] h-[250px] bg-white/70 blur-[80px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[25%] right-[10%] w-[500px] h-[300px] bg-white/60 blur-[90px] rounded-full pointer-events-none z-0"></div>
      
      {/* 상단 네비게이션 바 */}
      <header className="w-full h-[60px] bg-[#f8fbff]/80 backdrop-blur-md flex items-center justify-between px-8 border-b border-white shadow-sm z-50 relative">
        <Link href="/" className="flex items-center gap-2 text-[#3a6bb5] hover:opacity-80 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13"></path>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
          </svg>
          <span className={`${merriweather.className} font-bold text-xl tracking-wider mt-0.5`}>
            JS ATLAS
          </span>
        </Link>
        <Link href="/" className="text-xs font-bold text-[#3a6bb5] hover:underline">
          ← 홈으로 돌아가기
        </Link>
      </header>

      {/* 메인 컨텐츠 영역 */}
      <main className="flex-1 relative w-full flex items-center justify-center pt-8 pb-16 px-4 md:px-6 z-10">
        <div className="w-full max-w-[1250px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 좌측: 편지함 선택 (4열) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className={`${merriweather.className} text-3xl font-bold text-[#1e56a0]`}>
                  서로에게
                </h1>
                <span className="text-xl">✈️</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                서로에게 하고 싶은 말을<br />편지로 남겨보세요.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div onClick={() => setActiveTab('송미')} className={`relative bg-white rounded-2xl p-6 shadow-xl border transition-all cursor-pointer overflow-hidden group hover:-translate-y-1 ${activeTab === '송미' ? 'border-[#3a6bb5] ring-2 ring-blue-200' : 'border-gray-100'}`}>
                <div className="absolute top-0 left-0 right-0 h-2.5 opacity-80" style={{ background: 'repeating-linear-gradient(45deg, #f87171 0, #f87171 16px, white 16px, white 32px, #60a5fa 32px, #60a5fa 48px, white 48px, white 64px)' }}></div>
                <div className="flex items-center justify-between mt-2">
                  <div><span className="bg-[#eaf2fb] text-[#3a6bb5] px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider">TO 송미 ♥</span><h3 className="text-lg font-bold text-[#1e56a0] mt-2">송미에게 보내는 편지</h3></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors ${activeTab === '송미' ? 'bg-[#1e56a0] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-[#3a6bb5] group-hover:text-white'}`}>→</div>
                </div>
              </div>

              <div onClick={() => setActiveTab('진영')} className={`relative bg-white rounded-2xl p-6 shadow-xl border transition-all cursor-pointer overflow-hidden group hover:-translate-y-1 ${activeTab === '진영' ? 'border-[#3a6bb5] ring-2 ring-blue-200' : 'border-gray-100'}`}>
                <div className="absolute top-0 left-0 right-0 h-2.5 opacity-80" style={{ background: 'repeating-linear-gradient(45deg, #f87171 0, #f87171 16px, white 16px, white 32px, #60a5fa 32px, #60a5fa 48px, white 48px, white 64px)' }}></div>
                <div className="flex items-center justify-between mt-2">
                  <div><span className="bg-[#eaf2fb] text-[#3a6bb5] px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider">TO 진영 ♥</span><h3 className="text-lg font-bold text-[#1e56a0] mt-2">진영에게 보내는 편지</h3></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors ${activeTab === '진영' ? 'bg-[#1e56a0] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-[#3a6bb5] group-hover:text-white'}`}>→</div>
                </div>
              </div>

              <div onClick={() => setActiveTab('diary')} className={`relative bg-white rounded-2xl p-6 shadow-xl border transition-all cursor-pointer overflow-hidden group hover:-translate-y-1 ${activeTab === 'diary' ? 'border-[#2e8c60] ring-2 ring-emerald-200' : 'border-gray-100'}`}>
                <div className="absolute top-0 left-0 right-0 h-2.5 opacity-80" style={{ background: 'repeating-linear-gradient(45deg, #fcd34d 0, #fcd34d 16px, white 16px, white 32px, #34d399 32px, #34d399 48px, white 48px, white 64px)' }}></div>
                <div className="flex items-center justify-between mt-2">
                  <div><span className="bg-[#e6f4ed] text-[#2e8c60] px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider">OUR DIARY 📖</span><h3 className="text-lg font-bold text-[#1b5e3f] mt-2">우리들의 일기</h3></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors ${activeTab === 'diary' ? 'bg-[#2e8c60] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-[#2e8c60] group-hover:text-white'}`}>→</div>
                </div>
              </div>
            </div>
          </div>

          {/* 우측: 상세 내용 목록 (7열) */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-10 border border-white relative min-h-[580px] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start border-b border-gray-100 pb-5 mb-6">
                <div>
                  <h2 className={`${merriweather.className} text-2xl font-bold text-[#1e56a0]`}>
                    {activeTab === '송미' && 'TO 송미 ♥'}
                    {activeTab === '진영' && 'TO 진영 ♥'}
                    {activeTab === 'diary' && '우리들의 일기 📖'}
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                  <span>전체 기록</span>
                  <span className="font-bold text-[#1e56a0]">{currentItems.length}개</span>
                </div>
              </div>

              {currentItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#3a6bb5] mb-3 shadow-inner text-xl">✉️</div>
                  <p className="text-gray-600 font-bold text-sm mb-1">{activeTab === 'diary' ? '아직 작성된 일기가 없어요.' : '아직 주고받은 편지가 없어요.'}</p>
                  <p className="text-gray-400 text-xs">우측 하단의 '+' 버튼을 눌러 첫 기록을 남겨보세요!</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4 max-h-[380px] overflow-y-auto pr-1">
                  {currentItems.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => setSelectedLetter(item)}
                      className="group bg-gradient-to-br from-white to-gray-50/50 p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2 cursor-pointer hover:border-[#3a6bb5] hover:shadow-md transition-all relative"
                    >
                      <div className="flex justify-between items-center pr-16">
                        <h3 className="font-bold text-gray-800 text-base group-hover:text-[#1e56a0]">{item.title}</h3>
                        <span className="text-[10px] text-gray-400">{new Date(item.created_at).toLocaleDateString()}</span>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed whitespace-pre-wrap line-clamp-2">{item.content}</p>

                      {/* 호버 시 나타나는 수정/삭제 버튼 */}
                      <div className="absolute right-4 bottom-4 flex items-center gap-1.5 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm px-2 py-1 rounded-xl shadow-sm border border-gray-100">
                        <button
                          onClick={(e) => openEditModal(item, e)}
                          className="text-xs text-blue-600 hover:bg-blue-50 px-2 py-1 rounded-lg font-medium transition-colors"
                        >
                          수정
                        </button>
                        <button
                          onClick={(e) => handleDelete(item.id, e)}
                          className="text-xs text-red-500 hover:bg-red-50 px-2 py-1 rounded-lg font-medium transition-colors"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-6">
              <span className="text-xs text-gray-400 italic">
                {activeTab === 'diary' ? '우리의 여행은 계속되고 있어 ✈️' : '마음을 담아 전하는 글 ♡'}
              </span>
              <button
                onClick={() => { setSelectedLetter(null); setTitle(''); setContent(''); setIsWriteModalOpen(true); }}
                className="w-12 h-12 rounded-full bg-[#1e56a0] hover:bg-[#153e75] text-white flex items-center justify-center shadow-lg shadow-blue-200 transition-transform active:scale-95 text-xl font-bold"
              >
                +
              </button>
            </div>

          </div>

        </div>
      </main>

      {/* ================= 1. 편지/일기 상세 보기 팝업 창 ================= --> */}
      {selectedLetter && !isWriteModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl p-8 md:p-10 border border-gray-100 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start border-b border-gray-100 pb-4 mb-6">
                <div>
                  <span className="bg-[#eaf2fb] text-[#3a6bb5] px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider">
                    {selectedLetter.receiver === '우리들의 일기장' ? 'OUR DIARY 📖' : `TO ${selectedLetter.receiver} ♥`}
                  </span>
                  <h2 className={`${merriweather.className} text-2xl font-bold text-[#1e56a0] mt-2`}>
                    {selectedLetter.title}
                  </h2>
                  <p className="text-gray-400 text-xs mt-1">
                    작성일: {new Date(selectedLetter.created_at).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedLetter(null)}
                  className="text-gray-400 hover:text-gray-600 font-bold text-xl p-1"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 text-gray-700 text-sm leading-relaxed whitespace-pre-wrap min-h-[200px]">
                {selectedLetter.content}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-6 border-t border-gray-100 mt-6">
              <button
                onClick={(e) => openEditModal(selectedLetter, e)}
                className="px-5 py-2.5 rounded-xl bg-blue-50 text-[#1e56a0] font-bold text-xs hover:bg-blue-100 transition-colors"
              >
                수정하기
              </button>
              <button
                onClick={(e) => handleDelete(selectedLetter.id, e)}
                className="px-5 py-2.5 rounded-xl bg-red-50 text-red-500 font-bold text-xs hover:bg-red-100 transition-colors"
              >
                삭제하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= 2. 작성 및 수정 모달 창 (크게 확장됨) ================= --> */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl p-6 md:p-10 border border-gray-100 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <h2 className={`${merriweather.className} text-2xl font-bold text-[#1e56a0]`}>
                {selectedLetter ? '기록 수정하기 ✏️' : activeTab === 'diary' ? '새로운 일기 남기기 📖' : '새로운 편지 쓰기 💌'}
              </h2>
              <button
                onClick={closeAllModals}
                className="text-gray-400 hover:text-gray-600 font-bold text-xl p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">제목</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={activeTab === 'diary' ? '예: 함께 바다를 보러 간 날 ♡' : '편지 제목을 입력해주세요.'}
                  required
                  className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#3a6bb5] text-sm text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">내용</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder={activeTab === 'diary' ? '이날 함께 했던 기억과 감정을 편하게 적어주세요.' : '따뜻한 마음을 담아 편지를 적어주세요.'}
                  rows={10}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#3a6bb5] text-sm text-gray-800 resize-none leading-relaxed"
                />
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  onClick={closeAllModals}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium py-3.5 rounded-2xl transition-all text-sm"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#1e56a0] hover:bg-[#153e75] text-white font-medium py-3.5 rounded-2xl transition-all text-sm shadow-lg shadow-blue-200 disabled:opacity-50"
                >
                  {isSubmitting ? '저장 중...' : selectedLetter ? '수정 완료' : '작성 완료'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
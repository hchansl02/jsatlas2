'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dancing_Script, Merriweather } from 'next/font/google';
import { supabase } from '@/app/lib/supabase';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

interface Activity {
  id: string;
  title: string;
  category: string;
  memo: string;
  completed: boolean;
  created_at: string;
}

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  // 모달 상태 (추가 vs 수정)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);

  // 폼 입력 상태
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('데이트');
  const [memo, setMemo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 데이터 불러오기
  const fetchActivities = async () => {
    const { data, error } = await supabase
      .from('activities')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setActivities(data);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  // 추가 또는 수정 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);

    if (editingActivity) {
      // 수정 모드
      const { error } = await supabase
        .from('activities')
        .update({ title: title.trim(), category, memo: memo.trim() })
        .eq('id', editingActivity.id);

      if (!error) {
        closeModal();
        fetchActivities();
      } else {
        alert('수정 중 오류가 발생했습니다.');
      }
    } else {
      // 추가 모드
      const { error } = await supabase.from('activities').insert([
        { title: title.trim(), category, memo: memo.trim(), completed: false },
      ]);

      if (!error) {
        closeModal();
        fetchActivities();
      } else {
        alert('추가 중 오류가 발생했습니다.');
      }
    }
    setIsSubmitting(false);
  };

  // 체크박스 클릭 시 완료 상태 토글
  const toggleComplete = async (id: string, currentStatus: boolean, e: React.MouseEvent) => {
    e.stopPropagation();
    const nextStatus = !currentStatus;

    setActivities(activities.map(a => a.id === id ? { ...a, completed: nextStatus } : a));

    const { error } = await supabase
      .from('activities')
      .update({ completed: nextStatus })
      .eq('id', id);

    if (error) {
      setActivities(activities.map(a => a.id === id ? { ...a, completed: currentStatus } : a));
      alert('상태 변경 중 오류가 발생했습니다.');
    }
  };

  // 삭제 핸들러
  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('정말 삭제하시겠습니까?')) return;

    const { error } = await supabase.from('activities').delete().eq('id', id);
    if (!error) {
      setActivities(activities.filter(a => a.id !== id));
      closeModal();
    } else {
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  // 모달 열기 (추가용)
  const openAddModal = () => {
    setEditingActivity(null);
    setTitle('');
    setCategory('데이트');
    setMemo('');
    setIsModalOpen(true);
  };

  // 모달 열기 (수정용)
  const openEditModal = (activity: Activity) => {
    setEditingActivity(activity);
    setTitle(activity.title);
    setCategory(activity.category);
    setMemo(activity.memo || '');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingActivity(null);
  };

  // 필터링
  const filteredActivities = activities.filter((act) => {
    const matchesSearch = act.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          act.memo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '전체' || act.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#c0dcf7] via-[#d6e7f9] to-[#eaf2fb] flex flex-col font-sans overflow-x-hidden">
      
      {/* 뭉게구름 배경 효과 */}
      <div className="absolute top-[5%] left-[10%] w-[500px] h-[350px] bg-white/70 blur-[80px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[5%] w-[600px] h-[300px] bg-white/60 blur-[90px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[30%] w-[700px] h-[400px] bg-white/70 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* 상단 네비게이션 바 */}
      <header className="w-full h-[60px] bg-[#f8fbff]/80 backdrop-blur-md flex items-center px-8 border-b border-white shadow-sm z-50 relative shrink-0">
        <Link href="/" className="flex items-center gap-2 text-[#3a6bb5] hover:opacity-80 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13"></path>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
          </svg>
          <span className={`${merriweather.className} font-bold text-xl tracking-wider mt-0.5`}>
            JS ATLAS
          </span>
        </Link>
      </header>

      {/* 메인 컨텐츠 영역 */}
      <main className="flex-1 relative w-full flex justify-center py-10 z-10 px-4">
        
        {/* 왼쪽: 거대한 편지 봉투 */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-64 xl:-left-40 w-[650px] h-[480px] -rotate-12 z-0 hidden lg:block shadow-2xl pointer-events-none">
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

        {/* 중앙: 초록색 테마 리스트 카드 */}
        <div className="relative w-full max-w-[700px] bg-white/95 backdrop-blur-sm rounded-[2rem] shadow-2xl p-6 md:p-10 z-10 flex flex-col h-[calc(100vh-160px)] min-h-[600px] border border-white">
          
          {/* 타이틀 및 추가하기 버튼 */}
          <div className="text-center relative mb-8">
            <p className={`${dancingScript.className} text-[#65a386] text-lg mb-1 tracking-wider`}>
              journey together, letters forever... ♡
            </p>
            <h1 className={`${merriweather.className} text-4xl font-bold text-[#4a8f70] mb-2`}>
              함께 해볼 것
            </h1>
            <p className="text-gray-500 text-sm">
              우리의 체크리스트, 함께 해보고 싶은 것들을 모아두었어요. ♡
            </p>
            
            {/* 추가하기 플로팅 버튼 */}
            <button
              onClick={openAddModal}
              className="absolute right-0 top-0 flex flex-col items-center gap-1.5 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#65a386] rounded-full text-white flex items-center justify-center shadow-lg group-hover:bg-[#4a8f70] group-hover:scale-105 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <span className="text-[11px] font-bold text-[#4a8f70] tracking-wide">추가하기</span>
            </button>
          </div>

          {/* 검색 및 필터 바 */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6 shrink-0">
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="항목 검색..."
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#65a386] transition-all text-gray-800"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-[160px] px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#65a386] text-gray-700 font-medium cursor-pointer"
            >
              <option value="전체">전체 카테고리</option>
              <option value="데이트">데이트</option>
              <option value="여행">여행</option>
              <option value="취미">취미</option>
              <option value="기타">기타</option>
            </select>
          </div>

          {/* 리스트 목록 영역 (체크리스트 스타일) */}
          <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3">
            {filteredActivities.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-[#65a386] mb-3 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600 font-bold text-base mb-1">아직 등록된 항목이 없어요.</p>
                <p className="text-gray-400 text-xs">우측 상단의 '추가하기' 버튼을 눌러 함께하고 싶은 일을 등록해보세요!</p>
              </div>
            ) : (
              filteredActivities.map((act) => (
                <div
                  key={act.id}
                  onClick={() => openEditModal(act)}
                  className={`group bg-white p-4 px-6 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer hover:border-[#65a386] hover:shadow-md ${
                    act.completed ? 'bg-gray-50/90 border-gray-200' : 'border-gray-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1 pr-4">
                    {/* 체크박스 */}
                    <button
                      type="button"
                      onClick={(e) => toggleComplete(act.id, act.completed, e)}
                      className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all shrink-0 ${
                        act.completed ? 'bg-[#65a386] border-[#65a386] text-white shadow-sm' : 'border-gray-300 bg-white hover:border-[#65a386]'
                      }`}
                    >
                      {act.completed && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </button>

                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider transition-colors ${
                          act.completed ? 'bg-gray-200 text-gray-500' : 'bg-[#e6f4ed] text-[#2e8c60]'
                        }`}>
                          {act.category}
                        </span>
                        <h3 className={`text-base font-bold transition-all ${
                          act.completed ? 'line-through text-gray-400' : 'text-[#1b5e3f]'
                        }`}>
                          {act.title}
                        </h3>
                      </div>
                      {act.memo && (
                        <p className={`text-xs mt-0.5 transition-colors ${act.completed ? 'text-gray-300 line-through' : 'text-gray-500'}`}>
                          {act.memo}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="text-xs text-gray-400 group-hover:text-[#65a386] font-medium transition-colors">
                    수정하기 →
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* 오른쪽 장식 요소 (PC에서만 표시) */}
        <div className="absolute right-[5%] top-[10%] bottom-[10%] w-[350px] hidden xl:flex flex-col items-center pointer-events-none z-0">
          <div className="absolute top-[150px] right-10 w-[180px] h-[200px] bg-white p-3 shadow-2xl -rotate-[5deg] border border-gray-100 z-10">
            <div className="w-full h-[140px] bg-gradient-to-br from-[#f0d5b6] to-[#e4a87a] flex flex-col items-center justify-center overflow-hidden relative">
               <span className="text-5xl mt-4">🎈</span>
            </div>
          </div>
        </div>

      </main>

      {/* ================================================= */}
      {/* 항목 추가 및 수정 모달 창 */}
      {/* ================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md p-8 border border-gray-100 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`${merriweather.className} text-xl font-bold text-[#4a8f70]`}>
                {editingActivity ? '항목 수정하기 ✏️' : '새로운 할 일 추가하기 ✨'}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 font-bold text-lg p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">할 일 제목</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="예: 한강 야경 보면서 피크닉 하기"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#65a386] text-sm text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">카테고리</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#65a386] text-sm text-gray-800"
                >
                  <option value="데이트">데이트</option>
                  <option value="여행">여행</option>
                  <option value="취미">취미</option>
                  <option value="기타">기타</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">메모 및 설명</label>
                <textarea
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  placeholder="구체적인 계획이나 준비물을 적어주세요."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#65a386] text-sm text-gray-800 resize-none"
                />
              </div>

              <div className="flex gap-3 mt-4">
                {editingActivity && (
                  <button
                    type="button"
                    onClick={(e) => handleDelete(editingActivity.id, e)}
                    className="bg-red-50 hover:bg-red-100 text-red-500 font-medium px-4 py-3 rounded-xl transition-all text-sm cursor-pointer"
                  >
                    삭제
                  </button>
                )}
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium py-3 rounded-xl transition-all text-sm cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#65a386] hover:bg-[#4a8f70] text-white font-medium py-3 rounded-xl transition-all text-sm shadow-md shadow-emerald-100 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? '저장 중...' : editingActivity ? '수정 완료' : '등록하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 하단 바 (푸터) */}
      <footer className="w-full h-[50px] bg-[#e6f0fa] flex items-center justify-between px-8 text-[#8ba8d0] border-t border-white/50 text-xs z-50 shrink-0">
        <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13"></path>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
          </svg>
          <span className="italic font-medium">같이 만든 지도, 평생의 여행. ♡</span>
        </div>
        <div className="flex items-center gap-4">
          <span>© 2026 JS ATLAS. All rights reserved.</span>
          <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
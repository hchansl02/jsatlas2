'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Dancing_Script, Merriweather } from 'next/font/google';
import Link from 'next/link';
import { supabase } from '@/app/lib/supabase';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

interface Place {
  id: string;
  title: string;
  category: string;
  memo: string;
  completed: boolean;
  created_at: string;
}

export default function PlacesPage() {
  const router = useRouter();
  const [places, setPlaces] = useState<Place[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  
  // 모달 상태 (추가 vs 수정)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlace, setEditingPlace] = useState<Place | null>(null);

  // 폼 입력 상태
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('카페');
  const [memo, setMemo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 데이터 불러오기
  const fetchPlaces = async () => {
    const { data, error } = await supabase
      .from('places')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setPlaces(data);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  // 추가 또는 수정 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);

    if (editingPlace) {
      // 수정 모드
      const { error } = await supabase
        .from('places')
        .update({ title: title.trim(), category, memo: memo.trim() })
        .eq('id', editingPlace.id);

      if (!error) {
        closeModal();
        fetchPlaces();
      } else {
        alert('수정 중 오류가 발생했습니다.');
      }
    } else {
      // 추가 모드
      const { error } = await supabase.from('places').insert([
        { title: title.trim(), category, memo: memo.trim(), completed: false },
      ]);

      if (!error) {
        closeModal();
        fetchPlaces();
      } else {
        alert('추가 중 오류가 발생했습니다.');
      }
    }
    setIsSubmitting(false);
  };

  // 체크박스 클릭 시 완료 상태 토글 (취소선 & 체크 표시)
  const toggleComplete = async (id: string, currentStatus: boolean, e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 클릭(수정 모달 열림) 이벤트 방지
    const nextStatus = !currentStatus;

    // 즉시 화면 반영 (낙관적 업데이트)
    setPlaces(places.map(p => p.id === id ? { ...p, completed: nextStatus } : p));

    // Supabase DB 업데이트
    const { error } = await supabase
      .from('places')
      .update({ completed: nextStatus })
      .eq('id', id);

    if (error) {
      // 실패 시 원래대로 복구
      setPlaces(places.map(p => p.id === id ? { ...p, completed: currentStatus } : p));
      alert('상태 변경 중 오류가 발생했습니다.');
    }
  };

  // 삭제 핸들러
  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('정말 삭제하시겠습니까?')) return;

    const { error } = await supabase.from('places').delete().eq('id', id);
    if (!error) {
      setPlaces(places.filter(p => p.id !== id));
      closeModal();
    } else {
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  // 모달 열기 (추가용)
  const openAddModal = () => {
    setEditingPlace(null);
    setTitle('');
    setCategory('카페');
    setMemo('');
    setIsModalOpen(true);
  };

  // 모달 열기 (수정용)
  const openEditModal = (place: Place) => {
    setEditingPlace(place);
    setTitle(place.title);
    setCategory(place.category);
    setMemo(place.memo || '');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingPlace(null);
  };

  // 필터링
  const filteredPlaces = places.filter((place) => {
    const matchesSearch = place.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          place.memo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '전체' || place.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
      <main className="flex-1 relative w-full flex flex-col items-center pt-10 pb-24 z-10 px-4">
        
        {/* 화이트 컨테이너 박스 */}
        <div className="w-full max-w-[900px] bg-white/90 backdrop-blur-md rounded-[2.5xl] shadow-2xl p-8 md:p-12 border border-white relative flex flex-col min-h-[650px]">
          
          {/* 상단 타이틀 및 추가하기 버튼 */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-100 pb-6">
            <div className="text-center md:text-left">
              <p className={`${dancingScript.className} text-[#3a6bb5] text-lg mb-1 tracking-widest`}>
                journey together, letters forever... ♡
              </p>
              <h1 className={`${merriweather.className} text-4xl font-bold text-[#1e56a0] tracking-wide`}>
                함께 가볼 곳
              </h1>
              <p className="text-gray-500 text-xs mt-1">
                우리의 버킷리스트, 함께 가고 싶은 곳을 모아두었어요. ♡
              </p>
            </div>

            <button
              onClick={openAddModal}
              className="bg-[#1e56a0] hover:bg-[#153e75] text-white px-5 py-3 rounded-2xl shadow-lg shadow-blue-200 flex items-center gap-2 text-sm font-bold transition-all active:scale-95 shrink-0"
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">+</span>
              추가하기
            </button>
          </div>

          {/* 검색 및 카테고리 필터 바 */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="장소 검색..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-[#3a6bb5] text-sm text-gray-800 transition-all"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-[#3a6bb5] text-sm text-gray-700 font-medium cursor-pointer"
            >
              <option value="전체">전체 카테고리</option>
              <option value="카페">카페</option>
              <option value="맛집">맛집</option>
              <option value="여행지">여행지</option>
              <option value="기타">기타</option>
            </select>
          </div>

          {/* 체크리스트 스타일 세로 나열 목록 */}
          {filteredPlaces.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#3a6bb5] mb-4 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <p className="text-gray-600 font-bold text-base mb-1">아직 등록된 장소가 없어요.</p>
              <p className="text-gray-400 text-xs">우측 상단의 '추가하기' 버튼을 눌러 새 여행지를 등록해보세요!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {filteredPlaces.map((place) => (
                <div
                  key={place.id}
                  onClick={() => openEditModal(place)}
                  className={`group bg-white p-4 px-6 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer hover:border-[#3a6bb5] hover:shadow-md ${
                    place.completed ? 'bg-gray-50/90 border-gray-200' : 'border-gray-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1 pr-4">
                    {/* 체크박스 (클릭 시 체크 표시 및 취소선 적용) */}
                    <button
                      type="button"
                      onClick={(e) => toggleComplete(place.id, place.completed, e)}
                      className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all shrink-0 ${
                        place.completed ? 'bg-[#3a6bb5] border-[#3a6bb5] text-white shadow-sm' : 'border-gray-300 bg-white hover:border-[#3a6bb5]'
                      }`}
                    >
                      {place.completed && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </button>

                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider transition-colors ${
                          place.completed ? 'bg-gray-200 text-gray-500' : 'bg-[#eaf2fb] text-[#3a6bb5]'
                        }`}>
                          {place.category}
                        </span>
                        {/* 타이틀 (완료 시 취소선 및 흐린 색상 적용) */}
                        <h3 className={`text-base font-bold transition-all ${
                          place.completed ? 'line-through text-gray-400' : 'text-[#1e56a0]'
                        }`}>
                          {place.title}
                        </h3>
                      </div>
                      {place.memo && (
                        <p className={`text-xs mt-0.5 transition-colors ${place.completed ? 'text-gray-300 line-through' : 'text-gray-500'}`}>
                          {place.memo}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="text-xs text-gray-400 group-hover:text-[#3a6bb5] font-medium transition-colors">
                    수정하기 →
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>

      {/* ================================================= */}
      {/* 장소 추가 및 수정 모달 창 */}
      {/* ================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 border border-gray-100 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`${merriweather.className} text-xl font-bold text-[#1e56a0]`}>
                {editingPlace ? '장소 수정하기 ✏️' : '새로운 장소 추가하기 ✨'}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 font-bold text-lg p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">장소 이름</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="예: 성수동 소문난 성수감자탕"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#3a6bb5] text-sm text-gray-800"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">카테고리</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#3a6bb5] text-sm text-gray-800"
                >
                  <option value="카페">카페</option>
                  <option value="맛집">맛집</option>
                  <option value="여행지">여행지</option>
                  <option value="기타">기타</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-700 ml-1">메모 및 설명</label>
                <textarea
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  placeholder="이곳에서 하고 싶은 일이나 특징을 적어주세요."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#3a6bb5] text-sm text-gray-800 resize-none"
                />
              </div>

              <div className="flex gap-3 mt-4">
                {editingPlace && (
                  <button
                    type="button"
                    onClick={(e) => handleDelete(editingPlace.id, e)}
                    className="bg-red-50 hover:bg-red-100 text-red-500 font-medium px-4 py-3 rounded-xl transition-all text-sm"
                  >
                    삭제
                  </button>
                )}
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium py-3 rounded-xl transition-all text-sm"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#1e56a0] hover:bg-[#153e75] text-white font-medium py-3 rounded-xl transition-all text-sm shadow-md shadow-blue-200 disabled:opacity-50"
                >
                  {isSubmitting ? '저장 중...' : editingPlace ? '수정 완료' : '등록하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  //여행지 목록 
  const [travels, setTravels] = useState(() => {
    const saved = localStorage.getItem('travels');
    if (saved) {
      return JSON.parse(saved);
    }

    //샘플 여행지 목록 
    return [
      {
        id: 1,
        name: '에펠탑',
        country: '프랑스',
        city: '파리',
        date: '2024-07-15',
        image: 'https://i.namu.wiki/i/yF485NWCazWq7Zd52f5DzchphPkZ4VGVZXkx57AHIygI_GHgHLQnAa2zVJXZ_hxnid6NA09bKhxSc2FeLguNzw.webp',
        rating: 5,
        memo: '정말 아름다웠어요! 야경이 최고였습니다.',
        createdAt: '2024-07-20T10:30:00'
      },
      {
        id: 2,
        name: '도쿄 타워',
        country: '일본',
        city: '도쿄',
        date: '2024-08-10',
        image: 'https://i.namu.wiki/i/YhfsSIpv2-kUxHuAKT7IjczYH2zr_H6IxzY-tkzvCWhbXev808r4NHrbf4s9GYhK_psYStWm9FjMfjLQxkW0PQ.webp',
        rating: 4,
        memo: '도쿄의 상징! 전망이 정말 좋았어요.',
        createdAt: '2024-08-15T14:20:00'
      },
      {
        id: 3,
        name: '콜로세움',
        country: '이탈리아',
        city: '로마',
        date: '2024-09-05',
        image: 'https://i.namu.wiki/i/mecLdrbH6SANsAVoqJGrYR5XK31DY_6mMbGzSvM_FSrx5DgY9r7HhztOlvH85ecjWalmq08oyzSh2KWGYnAQag.webp',
        rating: 5,
        memo: '역사의 무게가 느껴지는 곳이었습니다.',
        createdAt: '2024-09-10T09:15:00'
      }

    ];
  });

  //travle변경 시 
  const [editingTravle, setEditingTravle] = useState(null);
  useEffect(() => {
    localStorage.setItem('travels', JSON.stringify(travles));
  }, [travels]); // 여행지 목록 변경 될 때마다 로컬에 저장 

  //여행지 추가
  const handleAdd = (newTravel) => {
    setTravels([...travels, newTravel]);
  }

  //여행지 수정
  const handleUpdate = (updateTravel) => {
    setTravels(travels.map(t => {
      return t.id === updateTravel.id ? updateTravel : t
    }));
    setEditingTravle(null);
  };

  //여행지 삭제 
  const handleDelete = (id) => {
    if (window.confirm("정말 삭제하시겠습니까? ")) {
      setTravels(travels.filter(t.id !== id));
    }
  };

  //수정 모드 상태 관리 
  //수정 모드 - 수정 시작 
  const handleEdit = (travel) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  //수정 모드 - 수정 취소
  const handleCancelEdit = () => {
    setEditingTravle(null);
  };

  const totalCountries = new Set(travels.map(t => t.country)).size;

  return (
      <div className='App'>

      </div>
  )
}

export default App

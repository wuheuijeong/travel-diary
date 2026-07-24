# 여행 기록 사이트

React 3일차 실습 프로젝트
방문했던 여행지를 등록하고 관리할 수 있는 React 기반 웹앱

## 주요 기능

* 여행지 추가, 조회, 수정, 삭제
* 여행지 이름, 국가, 도시, 방문 날짜 등록
* 사진 URL, 평점, 메모 기록
* 총 여행지 수와 방문 국가 수 표시
* 여행 기록을 `localStorage`에 저장
* 등록된 여행지가 없을 경우 안내 화면 표시

## 기술 스택

* React
* JavaScript
* Vite
* CSS
* LocalStorage
* Git / GitHub

## 화면 구성

* **Header**: 앱 제목 및 여행 통계
* **TravelForm**: 여행지 추가·수정 폼
* **TravelList**: 여행지 목록
* **TravelCard**: 여행지 정보 및 수정·삭제 버튼

## 폴더 구조

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Header.css
│   ├── TravelForm.jsx
│   ├── TravelForm.css
│   ├── TravelList.jsx
│   ├── TravelList.css
│   └── TravelCard.jsx
├── App.jsx
├── App.css
└── index.css
```

## 팀 구성 및 역할

* **팀장 우희정**: 프로젝트 관리 및 전체 코드 통합
* **팀원 A 문채이**: 프로젝트 초기 설정 및 `Header` 구현
* **팀원 B 방연지**: 여행지 추가·수정 폼 `TravelForm` 구현
* **팀원 C 마찬영**: 여행지 카드 및 목록 `TravelCard`, `TravelList` 구현
* **팀원 D 전승연**: `App.jsx`의 CRUD 및 `localStorage` 로직 구현

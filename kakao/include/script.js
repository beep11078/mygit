const header = document.querySelector('.header');
const moreBtn = document.querySelector('.kakaoMoreBox');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        header.style.zIndex = 999;
        moreBtn.style.opacity = '0'; // 스크롤 시 숨기기
        moreBtn.style.pointerEvents = 'none'; // hover 방지
    } else {
        header.classList.remove('scrolled');
        header.style.zIndex = 9;
        // moreBtn.style.opacity = '1'; // 스크롤 초기 상태에서 표시
        moreBtn.style.pointerEvents = 'auto'; // hover 가능하게 복원
    }
});

// 마우스 오버/아웃 이벤트 리스너 추가
moreBtn.addEventListener('mouseenter', () => {
    if (window.scrollY === 0) {  // 스크롤이 없는 경우에만 동작
        moreBtn.style.opacity = '1';
    }
});

moreBtn.addEventListener('mouseleave', () => {
    if (window.scrollY > 0) {  // 스크롤이 있는 경우에만 숨기기
        moreBtn.style.opacity = '0';
    }
});





// 서치 이벤트
const searchBtn = document.querySelector('.btn_search');
const searchBox = document.querySelector('.searchBox');
const searchBg = document.querySelector('.searchBg');
const searchBar = document.querySelector('.searchBar');
const logo = document.querySelector('.logo');
const zDown = document.querySelector('.kakaoMore');
const mainBox = document.querySelector('.main');
const searchSpan = searchBtn.querySelector('.material-symbols-outlined');

let isSearchVisible = false; // 버튼 상태를 나타내는 변수

searchBtn.addEventListener('click', (e) => {
    // searchBtn이 클릭된 경우

    if (!isSearchVisible) {
        searchSpan.textContent = 'close'; // 아이콘 변경
        searchSpan.style.zIndex = 999;
        logo.style.zIndex = 999;
        zDown.style.zIndex = '-1';
        searchBox.style.display = 'block';
        searchBg.style.display = 'block';
        mainBox.classList.add('searched');
        isSearchVisible = true; // 상태 업데이트
    } else {
        searchSpan.textContent = 'search'; // 아이콘 변경
        searchSpan.style.zIndex = '';
        logo.style.zIndex = '';
        zDown.style.zIndex = 999;
        searchBox.style.display = 'none';
        searchBar.value = null;
        searchBg.style.display = 'none';
        mainBox.classList.remove('searched');
        isSearchVisible = false; // 상태 업데이트
    }
});


// 배너 슬라이드
const right1 = document.querySelector('.visualRightList1')
const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const donation = document.querySelector('.donation');
const kakaoImpact = document.querySelector('.kakaoimpact');

// 초기 상태 설정 (donation만 보이도록)
donation.style.display = 'flex';
kakaoImpact.style.display = 'none';

// slide1 버튼 클릭 시 donation 표시
slide1.addEventListener('click', () => {
    donation.style.display = 'flex';
    kakaoImpact.style.display = 'none'; // 다른 슬라이드는 숨기기
    slide1.style.width = '24px';
    slide2.style.width = '8px';
});

// slide2 버튼 클릭 시 kakaoimpact 표시
slide2.addEventListener('click', () => {
    donation.style.display = 'none'; // 기존 슬라이드는 숨기기
    kakaoImpact.style.display = 'block';
    slide1.style.width = '8px';
    slide2.style.width = '24px';
});



// // 다크모드
// let toggle = document.querySelector('.btn_dark')
// let bubble = document.querySelectorAll('button')

// toggle.addEventListener('click', (e) => {
//     const html = document.querySelector('html')
//     if (html.classList.contains('dark')) {
//         html.classList.remove('dark')
//         e.target.innerHTML = 'dark_mode'
//     } else {
//         html.classList.add('dark')
//         e.target.innerHTML = 'light_mode'
//         bubble.forEach(elem => { e.style.filter = 'invert(100%)'});
//     }
// })

// 스크롤 이벤트
const header = document.querySelector('.header');
const moreBtn = document.querySelectorAll('.kakaoMoreBox');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        header.style.zIndex = 999;
        moreBtn.forEach(element => {
            element.style.opacity = '0%';
        });
    } else {
        header.classList.remove('scrolled');
        header.style.zIndex = 9;
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
const menuTitle = document.querySelector('.menuTitle');
const subMenu = document.querySelector('.subMenu');

menuTitle.addEventListener('click', () => {
    subMenu.classList.toggle('subActive');
})

window.onload = function () {
    const slideWrap = document.querySelector('.visualRightList1');

    const fstButton = slideWrap.querySelector('.slide1');
    const sndButton = slideWrap.querySelector('.slide2');


    fstButton.addEventListener('click', moveSlide);
    sndButton.addEventListener('click', moveSlide);

    function moveSlide(event) {
        event.preventDefault();
        if (event.target.classList.contains('slide2')) {
            fstButton.style.width = '8px';
            sndButton.style.width = '24px';
        } else if (event.target.classList.contains('slide1')) {
            fstButton.style.width = '24px';
            sndButton.style.width = '8px';
        } 
    }
}


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

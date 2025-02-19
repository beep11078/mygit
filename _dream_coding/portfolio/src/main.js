'use strict';

// Header 페이지 아래로 스크롤시 다크 스타일링 적용
const header = window.document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', function(){
    if(window.scrollY > headerHeight)  {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});


// Home 섹션 아래로 스크롤시 투명하게 처리
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


// Arrow up 버튼 아래로 스크롤시 나타나기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2 ) {
        arrowUp.style.opacity =  1;
    } else {
        arrowUp.style.opacity = 0;
    }
});


// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});


// Navbar menu 클릭시 메뉴 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
});
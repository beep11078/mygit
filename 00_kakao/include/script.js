// 스크롤시 메뉴 하단 경계선
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        header.style.zIndex = 999;
    } else {
        header.classList.remove('scrolled');
        header.style.zIndex = 9;
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
    const slider = slideWrap.querySelector('.visualSlide');
    const slideLis = slider.querySelectorAll('li'); 
    const prevButton = slideWrap.querySelector('.circleBtn1 .prev');
    const nextButton = slideWrap.querySelector('.circleBtn1 .next');

    // 슬라이드 너비 계산
    const liWidth = slideLis[0].clientWidth;
    slider.style.width = `${liWidth * slideLis.length}px`; // 전체 슬라이드 너비 설정

    // 리스너 설치하기
    let currentIdx = 0; // 슬라이드 현재 번호
    let translate = 0; // 슬라이드 위치 값

    prevButton.addEventListener('click', moveSlide);
    nextButton.addEventListener('click', moveSlide);

    function moveSlide(event) {
        event.preventDefault();
        if (event.target.classList.contains('next')) {
            if (currentIdx < slideLis.length - 1) {
                currentIdx++;
                prevButton.style.width = '8px';
                nextButton.style.width = '24px';
            }
        } else if (event.target.classList.contains('prev')) {
            if (currentIdx > 0) {
                currentIdx--;
                prevButton.style.width = '24px';
                nextButton.style.width = '8px';
            }
        }
        translate = -liWidth * currentIdx; // 정확히 273px씩 이동
        slider.style.transform = `translateX(${translate}px)`;
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

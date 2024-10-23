// 스크롤시 메뉴 하단 경계선
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const menuTitle = document.querySelector('.menuTitle');
const subMenu = document.querySelector('.subMenu');

menuTitle.addEventListener('click', () => {
    subMenu.classList.toggle('subActive');
})


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

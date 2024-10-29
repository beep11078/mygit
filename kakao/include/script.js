// 서브 메뉴
const menus = document.querySelectorAll(".mainMenu > li"); // 모든 li 쌍 선택

menus.forEach((menu) => {
    const menuTitle = menu.querySelector(".menuTitle");
    const subMenu = menu.querySelector(".subMenu");

    if (menuTitle && subMenu) {
        menuTitle.addEventListener("click", () => {
            // 현재 클릭된 메뉴의 subMenu 외의 모든 subMenu 닫기
            menus.forEach((m) => {
                const otherSubMenu = m.querySelector(".subMenu");
                if (otherSubMenu && otherSubMenu !== subMenu) {
                    otherSubMenu.classList.remove("subActive");
                }
            });

            // 현재 subMenu 토글
            subMenu.classList.toggle("subActive");
        });
    } else {
        console.warn("menuTitle 또는 subMenu를 찾을 수 없습니다.", menu);
    }
});

// 메뉴 스크롤
const header = document.querySelector(".header");
const moreBtn = document.querySelector(".kakaoMoreBox");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
        header.style.zIndex = 999;
        moreBtn.style.opacity = "0"; // 스크롤 시 숨기기
        moreBtn.style.pointerEvents = "none"; // hover 방지
    } else {
        header.classList.remove("scrolled");
        header.style.zIndex = 9;
        // moreBtn.style.opacity = '1'; // 스크롤 초기 상태에서 표시
        moreBtn.style.pointerEvents = "auto"; // hover 가능하게 복원
    }
});

// 마우스 오버/아웃 이벤트 리스너 추가
moreBtn.addEventListener("mouseenter", () => {
    if (window.scrollY === 0) {
        // 스크롤이 없는 경우에만 동작
        moreBtn.style.opacity = "1";
    }
});

moreBtn.addEventListener("mouseleave", () => {
    if (window.scrollY > 0) {
        // 스크롤이 있는 경우에만 숨기기
        moreBtn.style.opacity = "0";
    }
});

// 서치 이벤트
const searchBtn = document.querySelector(".btn_search");
const searchBox = document.querySelector(".searchBox");
const searchBg = document.querySelector(".searchBg");
const searchBar = document.querySelector(".searchBar");
const logo = document.querySelector(".logo");
const zDown = document.querySelector(".kakaoMore");
const mainBox = document.querySelector(".main");
const searchSpan = searchBtn.querySelector(".material-symbols-outlined");

let isSearchVisible = false; // 버튼 상태를 나타내는 변수

searchBtn.addEventListener("click", (e) => {
    // searchBtn이 클릭된 경우

    if (!isSearchVisible) {
        searchSpan.textContent = "close"; // 아이콘 변경
        searchSpan.style.zIndex = 999;
        logo.style.zIndex = 999;
        zDown.style.zIndex = "-1";
        searchBox.style.display = "block";
        searchBg.style.display = "block";
        mainBox.classList.add("searched");
        isSearchVisible = true; // 상태 업데이트
    } else {
        searchSpan.textContent = "search"; // 아이콘 변경
        searchSpan.style.zIndex = "";
        logo.style.zIndex = "";
        zDown.style.zIndex = 999;
        searchBox.style.display = "none";
        searchBar.value = null;
        searchBg.style.display = "none";
        mainBox.classList.remove("searched");
        isSearchVisible = false; // 상태 업데이트
    }
});

// 모든 슬라이드 세트 초기화
function initializeSlides(slideSet) {
    const slides = slideSet.querySelectorAll(".visualSlide li");
    const buttons = slideSet.querySelectorAll(".circleBtn div");

    // 슬라이드와 버튼 초기 상태 설정
    slides.forEach((slide, index) => {
        slide.style.opacity = index === 0 ? "1" : "0"; // 첫 슬라이드 표시
        slide.style.transition = "opacity 0.5s ease"; // 서서히 바뀌는 애니메이션
        slide.style.position = "absolute"; // 슬라이드가 겹치도록 설정
        slide.style.top = "0";
        slide.style.left = "0";
    });

    buttons.forEach((button, index) => {
        button.style.width = index === 0 ? "24px" : "8px"; // 첫 버튼 강조
        button.style.backgroundColor =
            index === 0 ? "var(--primary-color)" : "var(--secondary-color)";

        // 각 버튼에 클릭 이벤트 추가
        button.addEventListener("click", () => {
            showSlideAndUpdateButtons(slides, buttons, index); // 슬라이드와 버튼 동시 업데이트
        });
    });
}

// 슬라이드와 버튼을 동시에 업데이트하는 함수
function showSlideAndUpdateButtons(slides, buttons, activeIndex) {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === activeIndex ? "1" : "0"; // 활성 슬라이드 표시
    });

    buttons.forEach((button, index) => {
        button.style.width = index === activeIndex ? "24px" : "8px"; // 활성 버튼 강조
        button.style.backgroundColor =
            index === 0 ? "var(--primary-color)" : "var(--secondary-color)";
    });
}

// 모든 슬라이드 세트에 기능 적용
document.querySelectorAll(".visualRightList").forEach(initializeSlides);

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

// 서브 메뉴 오픈
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
    } 
});


// 메뉴 스크롤
const header = document.querySelector(".header");
const more = document.querySelector(".kakaoMore");
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
more.addEventListener("mouseenter", () => {
    if (window.scrollY === 0) {
        // 스크롤이 없는 경우에만 동작
        moreBtn.style.opacity = "1";
    }
});

more.addEventListener("mouseleave", () => {
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


// 기부 건수 카운트 다운
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    // 초기값을 00,000,000 형식으로 설정
    counter.innerText = '00,000,000'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = parseInt(counter.innerText.replace(/,/g, '')) // 쉼표를 제거하고 숫자로 변환
        const increment = target / 200

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment).toLocaleString('en-US', { minimumIntegerDigits: 8 })}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target.toLocaleString('en-US', { minimumIntegerDigits: 8 })
        }
    }

    updateCounter()
})


// 모든 슬라이드 세트 초기화
function initializeSlides(slideSet) {
    const slides = slideSet.querySelectorAll(".visualSlide li");
    const buttons = slideSet.querySelectorAll(".circleBtn div");

    // 슬라이드와 버튼 초기 상태 설정
    slides.forEach((slide, index) => {
        slide.style.opacity = index === 0 ? "1" : "0"; // 첫 슬라이드 표시
    });

    buttons.forEach((button, index) => {
        
        if(index === 0) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }

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
        if (index === activeIndex) {
            button.classList.add('active'); // 클릭한 버튼에 .active 추가
        } else {
            button.classList.remove('active'); // 나머지 버튼의 .active 제거
        }
    });
}

// 모든 슬라이드 세트에 기능 적용
document.querySelectorAll(".visualRightList").forEach(initializeSlides);


// 요소 선택
const visualSlide = document.querySelector('.visualRight .visualRightList.visualRightList3');
const slides = visualSlide.querySelectorAll('.visualRightList3 li');
const prevBtn = document.querySelector('.circleBtn3 .prev');
const nextBtn = document.querySelector('.circleBtn3 .next');

let currentIndex = 0;

// 슬라이드 표시 함수
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0";
    });
    
    // currentIndex에 따라 배경 색상 변경
    if (index === 0) {
        visualSlide.style.backgroundColor = "#fae100"; // 0일 때 배경 색상
    } else {
        visualSlide.style.backgroundColor = "rgba(0,0,0,.2)"; // 1일 때 배경 색상
        visualSlide.style.backdropFilter = 'brightness(60%)';
    }
}

// 초기 슬라이드 설정
showSlide(currentIndex);

// 이전 버튼 클릭 이벤트
prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? 1 : 0; // 0과 1을 번갈아가며 설정  
    showSlide(currentIndex);
});

// 다음 버튼 클릭 이벤트
nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? 1 : 0; // 0과 1을 번갈아가며 설정
    showSlide(currentIndex);
});



const mySlide01 = new Swiper(".swiper-container", {
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 0, // 적당한 딜레이로 설정
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 10000,
    loop: true,
});


const playButton = document.querySelector('.controlBox .play');
const pauseButton = document.querySelector('.controlBox .pause');
let isPlaying = true;
let originalDelay = mySlide01.params.autoplay.delay; // 기존 delay 값 저장
let originalSpeed = mySlide01.params.speed;           // 기존 speed 값 저장

playButton.addEventListener('click', function() {
    if (!isPlaying) {
        console.log("Play 버튼 클릭 - autoplay 시작");
        playButton.classList.add('hide');
        pauseButton.classList.remove('hide');
        
        // 원래 delay와 speed로 되돌리고 autoplay 시작
        mySlide01.params.autoplay.delay = originalDelay;
        mySlide01.params.speed = originalSpeed;
        mySlide01.autoplay.start();
        isPlaying = true;
    }
});

pauseButton.addEventListener('click', function() {
    if (isPlaying) {
        console.log("Pause 버튼 클릭 - autoplay 정지");
        pauseButton.classList.add('hide');
        playButton.classList.remove('hide');
        
        // 즉시 멈추기 위해 delay를 최소화하고 speed를 빠르게 설정한 후 autoplay 중지
        mySlide01.params.autoplay.delay = 10; // 최소화하여 빨리 멈추도록 설정
        mySlide01.params.speed = 0;
        mySlide01.autoplay.stop();
        isPlaying = false;
    }
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

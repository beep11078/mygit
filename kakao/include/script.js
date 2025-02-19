// 서브 메뉴 토글
const menus = document.querySelectorAll('.mainMenu > li'); // 모든 li 쌍 선택

menus.forEach((menu) => {
    const menuTitle = menu.querySelector('.menuTitle');
    const subMenu = menu.querySelector('.subMenu');

    if (menuTitle && subMenu) {
        menuTitle.addEventListener('click', () => {
            // 현재 클릭된 메뉴의 subMenu 외의 모든 subMenu 닫기
            menus.forEach((m) => {
                const otherSubMenu = m.querySelector('.subMenu');
                if (otherSubMenu && otherSubMenu !== subMenu) {
                    otherSubMenu.classList.remove('subActive');
                }
            });

            // 현재 subMenu 토글
            subMenu.classList.toggle('subActive');
        });
    } 
});


// 반응형 햄버거 버튼
const hamBtn = document.querySelector('.hamBtn');
const body = document.getElementsByTagName('body')[0];
const gnbBox = document.querySelector('.gnbBox');
const gnbWrap = document.querySelector('.gnbWrap');
const closeBtn = document.querySelector('.closeBtn');

hamBtn.addEventListener('click', (e) => {
    // searchBtn이 클릭된 경우
    body.classList.add('scrollLock');
    gnbBox.style.display = 'block';
    zDown.style.zIndex = '0';
});


// JavaScript
closeBtn.addEventListener('click', (e) => {
    body.classList.remove('scrollLock');
    
    // gnbWrap에 애니메이션 클래스 추가
    gnbBox.classList.add('close-animation');
    
    // 애니메이션이 끝난 후 gnbBox를 숨김
    gnbBox.addEventListener('transitionend', () => {
        gnbBox.classList.remove('close-animation');
        gnbBox.style.display = 'none';
    }, { once: true });
});



// gnb 서브 메뉴 토글
const gnbMenus = document.querySelectorAll('.gnbList > li');
gnbMenus.forEach((menu) => {
    const gnbTitle = menu.querySelector('.gnbList .menuTitle');
    const gnbSub = menu.querySelector('.gnbList .subMenu');

    gnbTitle.addEventListener('click', () => {
        // 현재 subMenu 토글
        gnbSub.classList.toggle('subActive');
    });
    
});


// 메뉴 스크롤
const header = document.querySelector('.header');
const more = document.querySelector('.kakaoMore');
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
more.addEventListener('mouseenter', () => {
    moreBtn.style.opacity = '1';
});

more.addEventListener('mouseleave', () => {
    moreBtn.style.opacity = '0';
});


// 서치 이벤트
const searchBtn = document.querySelector('.header .util .searchBtn');
const searchBox = document.querySelector('.searchBox');
const searchBg = document.querySelector('.searchBg');
const searchBar = document.querySelector('#searchBar');
const logo = document.querySelector('.logo');
const zDown = document.querySelector('.kakaoMore');
const mainBox = document.querySelector('.main');

let isSearchVisible = false; // 버튼 상태를 나타내는 변수

searchBtn.addEventListener('click', (e) => {
    // searchBtn이 클릭된 경우

    if (!isSearchVisible) {
        searchBtn.style.backgroundImage = "url('images/Kakao_image/close.svg')";
        searchBtn.style.zIndex = 999;
        logo.style.zIndex = 999;
        zDown.style.zIndex = '-1';
        searchBox.style.display = 'block';
        searchBg.style.display = 'block';
        mainBox.classList.add('searched');
        isSearchVisible = true; // 상태 업데이트
    } else {
        searchBtn.style.backgroundImage = "url('images/Kakao_image/search.svg')";
        searchBtn.style.zIndex = '';
        logo.style.zIndex = '';
        zDown.style.zIndex = 99;
        searchBox.style.display = 'none';
        searchBar.value = null;
        searchBg.style.display = 'none';
        mainBox.classList.remove('searched');
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


document.addEventListener('DOMContentLoaded', function() {
    // 화면 크기가 1024px 미만일 때만 슬라이드 초기화
    if (window.innerWidth < 1024) {
        initializeSlides('.newsListBottom', '.circleBtn5 div', '.newsListBottom .news');
    }

    // 윈도우 크기 변경 시 다시 확인하여 조건에 맞으면 슬라이드 초기화
    window.addEventListener('resize', function() {
        if (window.innerWidth < 1024) {
            // 화면 크기가 1024px 미만일 때만 슬라이드 초기화
            initializeSlides('.newsListBottom', '.circleBtn5 div', '.newsListBottom .news');
        }
    });
});

// 슬라이드 세트를 초기화하는 공통 함수
function initializeSlides(slideSetSelector, buttonSelector, slideSelector) {
    const slideSets = document.querySelectorAll(slideSetSelector);

    slideSets.forEach(slideSet => {
        const slides = slideSet.querySelectorAll(slideSelector);
        const buttons = slideSet.querySelectorAll(buttonSelector);

        // 슬라이드와 버튼 초기 상태 설정
        slides.forEach((slide, index) => {
            slide.style.opacity = index === 0 ? '1' : '0'; // 첫 번째 슬라이드만 보이게 설정
        });

        buttons.forEach((button, index) => {
            if (index === 0) {
                button.classList.add('active');  // 첫 번째 버튼에 'active' 클래스 추가
            } else {
                button.classList.remove('active');  // 나머지 버튼에서 'active' 클래스 제거
            }

            // 각 버튼에 클릭 이벤트 추가
            button.addEventListener('click', () => {
                showSlideAndUpdateButtons(slides, buttons, index); // 슬라이드와 버튼 동시 업데이트
            });
        });
    });
}

// 슬라이드와 버튼을 동시에 업데이트하는 함수
function showSlideAndUpdateButtons(slides, buttons, activeIndex) {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === activeIndex ? '1' : '0';  // 활성 슬라이드만 보이게 설정
    });

    buttons.forEach((button, index) => {
        if (index === activeIndex) {
            button.classList.add('active');  // 클릭한 버튼에 'active' 클래스 추가
        } else {
            button.classList.remove('active');  // 나머지 버튼에서 'active' 클래스 제거
        }
    });
}

initializeSlides('.visualRightList', '.circleBtn div', '.visualSlide li');



// 요소 선택
const visualSlide = document.querySelector('.visualRight .visualRightList.visualRightList3');

const slides = visualSlide.querySelectorAll('.visualRightList3 li');
const prevBtn = document.querySelector('.circleBtn3 .prev');
const nextBtn = document.querySelector('.circleBtn3 .next');

let currentIndex = 0;

// 슬라이드 표시 함수
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
    
    // currentIndex에 따라 배경 색상 변경
    if (index === 0) {
        visualSlide.style.backgroundColor = '#fae100'; // 0일 때 배경 색상
    } else {
        visualSlide.style.backgroundColor = 'rgba(0,0,0,.2)'; // 1일 때 배경 색상
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



document.addEventListener('DOMContentLoaded', function() {
    // 화면 크기가 1024px 미만일 때만 슬라이드 초기화
    if (window.innerWidth < 1024) {
        initializeSlideNavigation(); // 슬라이드 초기화
    }

    // 윈도우 크기 변경 시 다시 확인하여 조건에 맞으면 슬라이드 초기화
    window.addEventListener('resize', function() {
        if (window.innerWidth < 1024) {
            initializeSlideNavigation(); // 화면 크기가 1024px 미만일 때만 슬라이드 초기화
        }
    });
});

function initializeSlideNavigation() {
    const newsSlides = document.querySelectorAll('.newsListTop .under');
    const prevBtn2 = document.querySelector('.circleBtn4 .prev');
    const nextBtn2 = document.querySelector('.circleBtn4 .next');

    // 슬라이드 표시 함수
    function showNews(index) {
        newsSlides.forEach((newsSlide, i) => {
            newsSlide.style.opacity = i === index ? '1' : '0';
        });
    }

    // 버튼 상태 업데이트 함수
    function updateButtonStates() {
        // prevBtn2가 0번 인덱스일 때 비활성화
        prevBtn2.disabled = currentIndex2 === 0;

        // nextBtn2가 마지막 인덱스일 때 비활성화
        nextBtn2.disabled = currentIndex2 === newsSlides.length - 1;
    }

    // 초기 슬라이드 설정
    let currentIndex2 = 0;  // 슬라이드의 초기 인덱스를 0으로 설정
    showNews(currentIndex2);
    updateButtonStates();  // 버튼 초기 상태 업데이트

    // 이전 버튼 클릭 이벤트
    prevBtn2.addEventListener('click', () => {
        // 슬라이드 인덱스를 0이면 마지막 슬라이드로, 아니면 -1씩 감소
        currentIndex2 = (currentIndex2 === 0) ? newsSlides.length - 1 : currentIndex2 - 1;
        showNews(currentIndex2);
        updateButtonStates();  // 버튼 상태 업데이트
    });

    // 다음 버튼 클릭 이벤트
    nextBtn2.addEventListener('click', () => {
        // 슬라이드 인덱스를 마지막이면 첫 번째 슬라이드로, 아니면 +1씩 증가
        currentIndex2 = (currentIndex2 === newsSlides.length - 1) ? 0 : currentIndex2 + 1;
        showNews(currentIndex2);
        updateButtonStates();  // 버튼 상태 업데이트
    });
}




const mySlide01 = new Swiper('.swiper-container', {
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 0, // 적당한 딜레이로 설정
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 30000,
    loop: true,
});


const playButton = document.querySelector('.controlBox .play');
const pauseButton = document.querySelector('.controlBox .pause');
let isPlaying = true; // 슬라이드의 재생 상태

playButton.addEventListener('click', function() {
    if (!isPlaying) {
        console.log('Play 버튼 클릭 - autoplay 시작');
        playButton.classList.add('hide');
        pauseButton.classList.remove('hide');

        // 슬라이드가 다시 재생되도록 클래스를 제거
        document.querySelector('.swiper-container').classList.remove('paused');
        mySlide01.autoplay.start();
        isPlaying = true;
    }
});

pauseButton.addEventListener('click', function() {
    if (isPlaying) {
        console.log('Pause 버튼 클릭 - autoplay 정지');
        pauseButton.classList.add('hide');
        playButton.classList.remove('hide');

        // 슬라이드 멈추기 위해 paused 클래스 추가
        document.querySelector('.swiper-container').classList.add('paused');
        mySlide01.autoplay.stop();
        isPlaying = false;
    }
});






const footerBtns = document.querySelectorAll(".footer div button");
const footerSubs = [];

footerBtns.forEach(btn => {
    const ul = btn.nextElementSibling; // 버튼의 형제 요소인 <ul>을 찾기
    if (ul && ul.tagName === 'UL') { // <ul>인 경우만 저장
        footerSubs.push(ul);
    }
});


footerBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        if (footerSubs[index].classList.contains("active")) {
            // active 클래스가 있을 때
            footerSubs[index].classList.remove("active");
            btn.classList.remove("active");
        } else {
            // 모든 요소에서 active 클래스 제거
            footerSubs.forEach(sub => sub.classList.remove("active"));
            footerBtns.forEach(b => b.classList.remove("active"));
            footerSubs[index].classList.add("active");
            btn.classList.add("active");
        }
    });
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

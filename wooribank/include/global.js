let mySlide = new Swiper('.swiper', {
    autoplay : {
        delay : 1000,
    },
    loop : true,
    navigation : {
        prevEl : '.sliderCtr .prev',
        nextEl : '.sliderCtr .next'
    },
    pagination : {
        el : '.sliderCtr .mypager',
    },
});


const btn2 = document.querySelectorAll('.control li');
btn2.forEach(function(el, i){
    el.addEventListener('click', function(e){
        if(e.target.classList.contains('play')) {
            btn2[0].classList.add('hide');
            btn2[1].classList.remove('hide');
            // 스와이퍼 오토플레이 실행
            mySlide.autoplay.start();
        } else if (e.target.classList.contains('pause')) {
            btn2[1].classList.add('hide');
            btn2[0].classList.remove('hide');
            // 스와이퍼 오토플레이 중지
            mySlide.autoplay.stop();
        }
    });
});


const quickMenuLists = document.querySelectorAll('.quickMenu .menu');
const menuToggleBtns = document.querySelectorAll('.quickMenu .menu .toggleBtn');

// 첫 번째 버튼 클릭 시
menuToggleBtns[0].addEventListener('click', () => {
    quickMenuLists[0].classList.remove('active');
    quickMenuLists[1].classList.add('active');
});

// 두 번째 버튼 클릭 시
menuToggleBtns[1].addEventListener('click', () => {
    quickMenuLists[0].classList.add('active');
    quickMenuLists[1].classList.remove('active');
});

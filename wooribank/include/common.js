// swiper slide
// swiper 객체의 인스턴스 생성 = 변수화
// swiper 
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
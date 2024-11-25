// swiper slide
// swiper 객체의 인스턴스 생성 = 변수화
// swiper 
let mySlide = new Swiper('.swiper', {
    autoplay : {
        delay : 1000,
    },
    navigation : {
        prevEl : '.slider .prev',
        nextEl : '.slider .next'
    },
    pagination : {
        el : '.slider .mypager',
    },
});
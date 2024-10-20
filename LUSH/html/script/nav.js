let slideNo = 0 ; 
// 슬라이드 전환용 스크립트
let slideNo3 = 0;


function slide(x) {

    slideNo += x; // 전달받은 값만큼 슬라이드 번호 바꾸기
    if (slideNo > 4) slideNo = 0; // 마지막 장 다음-> 처음(0)으로

    // 슬라이드 이동 폭 계산
    let left = (slideNo * -50) + "%" ;

    // 1. 슬라이드 이동
    $('.bestSlideBox').css('marginLeft', left)

} // slide 끝

function slide3(x) {

    slideNo3 += x; // 전달받은 값만큼 슬라이드 번호 바꾸기
    if (slideNo3 > 6) slideNo3 = 0; // 마지막 장 다음-> 처음(0)으로
    if (slideNo3 < 0) slideNo3 = 6;
    // 슬라이드 이동 폭 계산
    let left3 = (slideNo3 * -100) + "%" ;


    // 1. 슬라이드 이동
    $('#slideBox').css('marginLeft', left3)
} // slide3 끝


function captionOn(){
    $('.valueCaption').css('display', 'block');
};

function captionOff(){
    $('.valueCaption').css('display', 'none');
};


let control;


function slideOn() { // 슬라이드 동작용
    control = setInterval('slide(1)', 2000);
}

function slideOff() { // 슬라이드 중지용
    clearInterval(control);
}



$(function(){ // 페이지 열린 후 실행 할 내용

	$("html, body").easeScroll({    // 전체 문서에 'easeScroll' 플러그인 적용
		animationTime:1000,     //스크롤 애니메이션 속도
		stepSize:80,    //스크롤 이동 간격
		//기타 기본 값 또는 생략 가능
	});

    // 반응형 section 정렬
    if( $(window).width() < 1200 ){
        $('.scrollify').removeClass('scrollify');
        $('#sectionBox2').addClass('sectionBox');
        $('#section3').prependTo('#sectionBox2');
        $('#section4').appendTo('#sectionBox2');
    } else {
        $('.scrollify').addClass('scrollify');
        $('#sectionBox2').removeClass('sectionBox');
        $('#section3').appendTo('#sectionBox1');
        $('#section4').prependTo('#sectionBox3');
    }

    $(".menu").click(function(){   //메인메뉴 클릭했을 때
        $('.menu').removeClass('slide');   //모든 메인메뉴 초기화
        $(".sub").slideUp();  //모든 서브메뉴 숨김

        //클릭한 메인메뉴 안의 있는 서브메뉴(서브메뉴 ul)를 보이게 하거나 숨김
        $(this).children('.sub').stop().slideToggle();
        $(this).toggleClass('slide');    //선택한 메인메뉴의 색상을 바꾸거나 되돌림
    });
    

    // 펼침버튼(#view) 클릭하면, 메뉴(#menu) on/off
    $('#view').click(function(){
        $('#main').toggleClass('active');
        $('.home').toggleClass('back');
    
        // 펼침버튼 클릭하면 #iconBox의 클래스 toggle
        if($('#iconBox').css('display')=='none')
        $('#iconBox').delay(100).fadeIn();
        else $('#iconBox').fadeOut(100)
    });


    //화면 안에서 마우스 휠 사용할 때
    $("body").on("mousewheel",function(event,delta) {
        //event.originalEvent.deltaY : 마우스 휠의 이동 거리(아래:양수값, 위:음수값)
        //delta : 마우스 휠의 이동 방향(아래:-1, 위:1)

        if(delta > 0) {    //휠의 방향이 위쪽이면
            $("#logoBox").css ('z-index', '9');
        }
        else {    //휠의 방향이 아래쪽이면
            $("#logoBox").css ('z-index', '1');
        }

    });     //end $("body")


    slideOn(); // 슬라이드 동작
    $('.bestSlideBox').mouseenter(function(){
        slideOff();
    });
    $('.bestSlideBox').mouseleave(function(){
        slideOn();
    });

    $('.valueSymbols').click(function(){
        slide3(1);
    });

    $('.valueSymbols').mouseenter(function(){
        captionOn();
    });
    $('.valueSymbols').mouseleave(function(){
        captionOff();
    });



    $('#top').click(function(){   //top 버튼 클릭하면 화면을 맨 상단으로 애니메이션 이동
        $('html, body').animate({'scrollTop':'0'},1000,'easeOutExpo');
    });


    
    //Scrollify PlugIn
    $.scrollify({
        section : ".scrollify",      //Scrollify 적용할 대상의 클래스 이름
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",     //속도 변화(easing)
        scrollSpeed: 1000,              //스크롤 속도(mili second)
        offset : 0,                              //스크롤 위치 추가 Offset 값
        scrollbars: true,                   //스크롤바 표시 여부(true/false)
        standardScrollElements: "",
        setHeights: true,                 //세로폭 화면에 맞춤(true/false)
        overflowScroll: true,           //섹션 높이를 벗어난 영역에 대한 스크롤(true/false)
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() { },
        afterResize:function() {},
        afterRender:function() {}
    });//end Scrollify

    
});


// 화면을 스크롤할 때
$(window).scroll(function(){

    if( $(window).scrollTop() > 200 ){
        $('#navBox').addClass('scroll');
        $('#mainMenu').addClass('scrollMenu');
    }

    else {
        $('#navBox').removeClass('scroll');
        $('#mainMenu').removeClass('scrollMenu');
    }
    
});

$(window).scroll(function(){ // 화면을 스크롤 할 때

    if( $(window).scrollTop() > 500 )
        $('#top').css('bottom', '2rem');
    else 
        $('#top').css('bottom', '-5rem');

});

$(window).resize(function(){
    
    $(".sub").slideUp()

    if( $(window).width() < 1200 ){
        $('#sectionBox2').addClass('sectionBox');
        $('#section3').prependTo('#sectionBox2');
        $('#section4').appendTo('#sectionBox2');
    } else {
        $('#sectionBox2').removeClass('sectionBox');
        $('#section3').appendTo('#sectionBox1');
        $('#section4').prependTo('#sectionBox3');
    }

})

//모달창에 보여질 동영상 파일을 배열(값을 순서대로 보관)로 보관
let names = [ 
    "portfolio_graphic/portfolio00.png",
    "portfolio_graphic/portfolio01.jpg",
    "portfolio_graphic/portfolio02.jpg",
    "portfolio_graphic/portfolio03.jpg",
    "portfolio_graphic/portfolio04.jpg",
    "portfolio_video/portfolio00.mp4",
    "portfolio_video/portfolio01.mp4",
    "portfolio_video/portfolio02.mp4" //,
    //"portfolio_web/portfolio00.png"
];

function getScrollifySectionIndex(anchor){
    var idpanel = false;
    jQuery('section.panel').each(function(i){
        if( jQuery(this).data('section-name') == anchor.toString().replace(/#/g,"") ){
        //console.log( jQuery(this).data('section-name') , i , anchor.toString().replace(/#/g,"") );
        idpanel = i;
        }
    });
    return idpanel;
};

// 연락처 복사
function copy(elementId, isPhone) {
    // 복사문구값 가져오기
    var copyTxt = document.getElementById(elementId);
    var valueToCopy = copyTxt.value;

    // 전화번호의 경우 숫자만 남기기
    if (isPhone) {
        valueToCopy = valueToCopy.replace(/\D/g, ''); // 숫자가 아닌 문자는 제거
    }

    // 복사문구 선택
    copyTxt.select();
    copyTxt.setSelectionRange(0, 99999); // Mobile 대응

    // 복사
    navigator.clipboard.writeText(valueToCopy);

    // 복사완료에 대해 Alert으로 띄우기
    if (elementId === "copyTxt") {
        alert("이메일이 복사되었습니다.");
    } else if (elementId === "copyTxt2") {
        alert("전화번호가 복사되었습니다.");
    }
}



$(function(){    //페이지 열린 후 실행 할 내용


    $('.list').removeClass('rolling2');
    $('.list').addClass('rolling');
    $('.list').removeClass('rolling');
    $('.list').addClass('rolling2');
    

    var typed = new Typed('#headerTitle', {
        strings: ["김정빈 포트폴리오.", "#헤더타이틀"],
        startDelay: 1000,     //문자 등장 전 대기 시간   
        typeSpeed: 50,      //문자 타이핑 시간   
        loop:false,               //효과 반복 여부(true, false)   
        //cursorChar: '_',      //타이핑 커저 모양   
        showCursor: false,    //타이핑 커저 보이기(true, false)   
        backDelay: 2000,     //문자 완성 후 지워지기 전 대기 시간   
        fadeOut: true,       //페이드아웃 효과(true, false)   
        smartBackspace: true,
        loopCount: true,
    });


    //Scrollify PlugIn
    $.scrollify({
        section : ".fullScreen",      //Scrollify 적용할 대상의 클래스 이름
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",     //속도 변화(easing)
        scrollSpeed: 1000,              //스크롤 속도(mili second)
        offset : 0,                              //스크롤 위치 추가 Offset 값
        scrollbars: false,                   //스크롤바 표시 여부(true/false)
        standardScrollElements: "",
        setHeights: true,                 //세로폭 화면에 맞춤(true/false)
        overflowScroll: true,           //섹션 높이를 벗어난 영역에 대한 스크롤(true/false)
        updateHash: true,
        touchScroll:true,
        before: function(){},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
        });    //end Scrollify

        wow = new WOW( {
            boxClass:     'wow',      // default
            animateClass: '', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        } );
    
        wow.init();	//WOW 초기화

        // $('.main a').smoothScroll({    //메뉴 링크를 클릭할 때 smoothScroll 동작
        //     offset: 0,    //scroll 이동 위치 추가 값
        //     easing: 'easeOutExpo',    //easing 값
        //     speed: 1000}
        //     // ,    //scroll 속도
        //     // var moveTo = $(this).attr('href');
        //     // $.scrollify("move",moveTo);
        //     // $.scrollify.update();
        // );
    
        $('.hamburger, #black').click(function(){  //햄버거메뉴(펼침메뉴)를 클릭했을 때
            $('.hamburger').toggleClass('is-active');
            $('#menu, #black').fadeToggle(300);    //메뉴를 보이거나 숨김
        });
    
        $('#top').click(function(){   //top 버튼 클릭하면 화면을 맨 상단으로 애니메이션 이동
            $.scrollify.move("#1");
        });

        $('.main').click(function(){   // main 버튼 클릭하면 화면 맨 상단으로 애니메이션 이동
            $.scrollify.update();
        });


    //섬네일 이미지 / 버튼 클릭하면, 모달창 열기
    $('.jeongbin, .moreButton').click(function(){
        $('#profileModal').fadeIn(300);     //1. 모달창 열기
        $('body').addClass('scrollLock')
    })

    $('.profileClose').click(function(){
        $('#profileModal').fadeOut(300);     //2. 모달창 닫기
        $('body').removeClass('scrollLock')
    })


    //섬네일 이미지를 클릭하면, 모달창 열기
    $('.thumb').click(function(){
        
        $('#modal').fadeIn(300);     //1. 팝업창 열기

        $.scrollify.disable();

        let no = $(this).data('no');       //클릭한 섬네일의 순번(data-no 값) 

        // data-type에 따라서 이미지 또는 영상 보이기
        if($(this).data('type') == 'image'){
            $('#mImage').attr('src', names[no]);   //2. 이미지 (순번에 맞게) 변경
            $('#mImage').show(); $('#mVideo').hide();
        } else {
            $('#mVideo').attr('src', names[no]);    //2. 이미지 순번에 맞게 변경
            $('#mVideo').show(); $('#mImage').hide();
        };   // 동영상 변경(순번에 맞게)

    })

    $('#mClose').click(function(){

        $('#modal').fadeOut(300);     //1.모달창 닫기
        $.scrollify.enable();
        $('#mVideo').get(0).pause();    //2.영상 재생 중지
        
    })
        
    // 모달 끄기
    $(document).mouseup(function (e){
        if($("#profileModalBox").has(e.target).length === 0){
            $("#profileModal").hide();
        }
    });

    $(document).mouseup(function (e){
        $("#modal").hide();
    });

    //슬라이드 공간 안에서 마우스 휠을 사용할 때 
    $('.regular').on('wheel', function(e) {
        
        $('html, body').on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
            })

        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {     //휠의 방향에 따라 슬라이드 이동
        $(this).slick('slickPrev');
            $.scrollify.update();
        } else { 
        $(this).slick('slickNext');
        }
    });
    

    
    $('.regular').slick({
        infinite: true,    //무한 반복(true, false)
        autoplay: false,   //자동 Play(true, false)
        speed: 300,   //슬라이드 전환 시간(단위:ms)
        autoplaySpeed: 3000,    //슬라이드 전환 후 대기 시간(단위:ms)
        focusOnSelect: false,    // 클릭한 슬라이드로 전환
        pauseOnDotsHover: true,   //슬라이드에 마우스 오버 시 멈춤(true, false)
        dots: false,   //하단 페이지 버튼(원)
        slidesToShow: 3,   //보여지는 슬라이드 갯수
        slidesToScroll: 1,   //한 번에 스크롤되는 슬라이드 갯수
        
        responsive: [   //반응형 (breakpoint: 해상도)

            {
            breakpoint: 1024,    //1024px 이하
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
            },

            {
            breakpoint: 768,    //768px 이하
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },

            {
            breakpoint: 480,    //480px 이하
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });    // $('.regular').slick 
    
});    //$(function() 끝



//화면을 스크롤할 때
$(window).scroll(function(){
    
    $('html, body').off('scroll touchmove mousewheel');

    // top 버튼
    if( $(window).scrollTop() > $(window).height()/2 )
        $('#top').css('transform','scale(1)');
    
    else
        $('#top').css('transform','scale(0)');


    //화면이 맨 위에서 스크롤 됐을 때
    if( $(window).scrollTop() > 1  &&  $(window).width() > 850 ) {
        $('#logoBox').css('width','10%');
        $('#logo').attr('src','images/logoScroll.png');
        $('#navi').css('display','block');
        $('#navBox').addClass('navBoxOn');
        $('.main>a').addClass('mainOn');
    }
    else {
        $('#logoBox').css('width','20%');
        $('#logo').attr('src','images/logo.png');
        $('#navi').css('display','none');
        $('#navBox').removeClass('navBoxOn');
        $('.main>a').removeClass('mainOn');
    }

});     //$(window).scroll  끝



//화면 크기를 조절할 때
$(window).resize(function(){

    //화면폭이 850을 넘으면, 내비게이션 스타일을 원래대로 복원
    if( $(window).width() > 850 ) {
        $('#menu').removeAttr('style');    //변경된 스타일모양 제거
        $('.hamburger').removeClass('is-active');
        $('#black').hide();
    }

    //화면이 맨 위에서 스크롤 됐을 때
    if( $(window).scrollTop() > 1  &&  $(window).width() > 850 ) {
        $('#logoBox').css('width','10%');
        $('#logo').attr('src','images/logoScroll.png');
        $('#navi').css('display','block');
        $('#navBox').addClass('navBoxOn');
        $('.main>a').addClass('mainOn');
        // $('#logo').css('filter','brightness(0.3)');
    }
    else {
        $('#logoBox').css('width','20%');
        $('#logo').attr('src','images/logo.png');
        $('#navi').css('display','none');
        $('#navBox').removeClass('navBoxOn');
        $('.main>a').removeClass('mainOn');
        // $('#logo').css('filter','brightness(1)');
    }

});    //$(window).resize  끝



$(window).on('load', function() {    //모든 콘텐츠가 불러지면
    $("#preload").fadeOut("slow");  //프리로딩 화면 사라짐
    $("body").css("overflow","auto");    // (CSS에서 로딩되는 중에 스크롤이 되지 않게 했다가) 화면 요소는 스크롤되게 함
});
let slideNo3 = 0;


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



$(function(){ // 페이지 열린 후 실행 할 내용

    // 펼침버튼(#view) 클릭하면, 메뉴(#menu) on/off
    $('#view').click(function(){
        $('#main').toggleClass('active');
        $('#iconBox').delay(1000).toggleClass('activeIconBox');
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

});


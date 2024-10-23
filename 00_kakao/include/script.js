
let toggle = document.querySelector('.btn_dark')

toggle.addEventListener('click', (e) => {
    // e: 이벤트가 발생했을 때 그 처리를 담당하는 콜백 함수-의 객체 (이벤트 객체)
    // toggle키에 클릭 이벤트가 발생했을 때, 
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'dark_mode'
        // 이벤트의 타겟(사용자가 클릭한 실제 요소)인 toggle키의 HTML 태그의 안에 'D'를 넣는다.
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'light_mode'
    }
})

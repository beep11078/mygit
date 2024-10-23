const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
/*1. 배열 생성 */
sounds.forEach(sound => { /*2. 배열의 각 요소를 sound에 매개변수로 전달 순회시킴*/
    const btn = document.createElement('button')
    btn.classList.add('btn')
    // 3.버튼 요소 생성 > 만든버튼에  .버튼 클래스 추가
    btn.innerText = sound
    // 4.버튼 텍스트를 소리의 이름으로 설정ex)applause


    // 5.함수 시작
    // 클릭시
    btn.addEventListener('click', () => {
        stopSongs()
        // 1.우선 모두 멈춤
        document.getElementById(sound).play()
        // ex)applause를 눌럿을시 해당 사운드 document.getElementById('applause').play()
        // document.getElementById(sound)는 HTML에서 미리 정의된 <audio> 요소를 찾아 재생
    })

    document.getElementById('buttons').appendChild(btn)
    // appendChild 메서드는 부모 요소에 새로운 자식 요소를 추가하는 역할
    // 여기서는 btn이라는 버튼 요소를 'buttons' ID를 가진 <div> 요소의 자식으로 추가.
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
        // 사운드 초기화
    })
}
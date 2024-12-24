function copy(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('복사되었습니다 : ' + text);
    }).catch(err => {
        console.error('복사 실패', err);
    });
}

const closeBtn = document.querySelector('.profile__modalbox-close');
const modal = document.querySelector('.profile__modal');

closeBtn.addEventListener('click', (e) => {
    // searchBtn이 클릭된 경우
    modal.style.display = 'none';
});
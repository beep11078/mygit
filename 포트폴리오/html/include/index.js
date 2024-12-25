const memoji = document.querySelector('.profile__memoji');

const closeBtn = document.querySelector(".profile__modalbox-close");
const modal = document.querySelector(".profile__modal");


memoji.addEventListener("click", (e) => {
    modal.style.display = 'block';
})

function copy(elementId) {
    const copyText = document.getElementById(elementId).innerText;
    navigator.clipboard
        .writeText(text)
        .then(() => {
            alert("복사되었습니다 : " + copyText);
        })
        .catch((err) => {
            console.error("복사 실패", err);
        });
}

closeBtn.addEventListener("click", (e) => {
    // searchBtn이 클릭된 경우
    modal.style.display = "none";
});


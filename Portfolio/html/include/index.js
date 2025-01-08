let mySwiper1 = new Swiper("#portfolio1 .swiper-container", {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 1,
  spaceBetween: 30,
});

let mySwiper2 = new Swiper("#portfolio2 .swiper-container", {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 3,
  spaceBetween: 30,
});

const memoji = document.querySelector(".profile__memoji");

const closeBtn = document.querySelector(".profile__modalbox-close");
const modal = document.querySelector(".profile__modal");

memoji.addEventListener("click", (e) => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

// 복사 함수
function copy(targetId) {
  const targetElement = document.getElementById(targetId); // ID로 요소 선택
  if (targetElement) {
    const textToCopy = targetElement.textContent || targetElement.innerText; // 텍스트 가져오기
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("복사되었습니다: " + textToCopy);
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  } else {
    console.error("복사할 요소를 찾을 수 없습니다: " + targetId);
  }
}

// closeBtn.addEventListener("click", (e) => {
//   // searchBtn이 클릭된 경우
//   modal.style.display = "none";
//   document.body.style.overflow = "auto";
// });

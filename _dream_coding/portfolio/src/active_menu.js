/**
 * 구현 계획
 * 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
 * 2. IntersectionObserver를 사용해서 모든 섹션들을 관찰한다.
 * 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
 *  - 다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션
 *  - 마지막 contact 섹션이 보여진다면, 가장 마지막 섹션 선택
 */

const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#works",
  "#testimonial",
  "#contact",
];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href='${id}']`)
);
const visibleSections = sectionIds.map(() => false);
// 보여지는 섹션 배열 만들기

const options = {};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.inetersectionRatio >= 0.99;
  });

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersectiong(visibleSections);
  console.log(sectionIds[navIndex]);
}

function findFirstIntersectiong(instersections) {
  const index = instersections.indexOf(true);
  return index >= 0 ? index : 0;
}

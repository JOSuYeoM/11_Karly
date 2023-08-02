import { swiper } from './swiper.js';
import { getNode, getNodes, insertFirst } from '../lib/index.js'


// DOM 페이지 로드 시 Swiper 및 로컬 스토리지에서 항목 로드를 처리합니다.
document.addEventListener("DOMContentLoaded", () => {
  loadItemsFromStorage();
  initializeSwiper();
});

// 로컬 스토리지에서 항목을 불러와 Swiper에 삽입하는 함수
function loadItemsFromStorage() {
  const items = getSelectedItemsFromLocalStorage();
  items.forEach((item) => {
    insertItems(item);
  });
}

// Swiper 초기화 함수
function initializeSwiper() {
  new Swiper(".swiper3", {
    direction: "vertical",
    slidesPerView: "auto",
    spaceBetween: 20,
    mousewheel: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// 로컬 스토리지에서 선택된 항목 가져오기
function getSelectedItemsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("selectedItems")) || [];
}

function insertItems(item) {
  const slideContainer = getNode(".side__ul");
  const slide = getNode("div");
  slide.classList.add("swiper-slide");
  slide.innerHTML = `
    <li class>
      <img src="${item.image}" alt="${item.name}" />
    </li>
  `;
  insertFirst(slideContainer, slide.outerHTML);
}

// 중복된 아이템 여부 확인
function isItemDuplicated(selectedGoods) {
  const selectedItems = getSelectedItemsFromLocalStorage();

  for (const item of selectedItems) {
    if (item.name === selectedGoods.name) {
      return true;
    }
  }
  return false;
}

// 선택한 상품 저장
function saveSelectedItem(selectedGoods) {
  const selectedItems = getSelectedItemsFromLocalStorage();
  selectedItems.push(selectedGoods);
  localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
}

const goodsLists = getNodes(".goods__list");

goodsLists.forEach((list) => {
  const goodsLink = list.querySelector(".goods__link");
  goodsLink.addEventListener("click", (e) => {
    e.preventDefault();
    const link = e.currentTarget;

    const name = link
      .querySelector(".goods__name")
      .textContent.replace(/\n\s+/g, "");

    const price = link
      .querySelector(".goods__regPrice")
      .textContent.replace(/\n\s+/g, "");

    const image = link.querySelector("img").getAttribute("src");

    const selectedGoods = {
      name,
      price,
      image,
    };

    if (!isItemDuplicated(selectedGoods)) {
      insertItems(selectedGoods);
      saveSelectedItem(selectedGoods);
    }
  });
});
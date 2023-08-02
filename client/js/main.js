import { swiper } from './swiper.js';
import { getNode, getNodes, insertFirst } from '../lib/index.js'

document.addEventListener("DOMContentLoaded", () => {
  loadItemsFromStorage();
  initializeSwiper();
});

function loadItemsFromStorage() {
  const items = getSelectedItemsFromLocalStorage();
  items.forEach((item) => {
    insertItems(item);
  });
}

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

function getSelectedItemsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("selectedItems")) || [];
}

function insertItems(item) {
  const slideContainer = getNode(".side__ul");
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.innerHTML = `
    <li class>
      <img src="${item.image}" alt="${item.name}" />
    </li>
  `;
  insertFirst(slideContainer, slide.outerHTML);
}

function isItemDuplicated(selectedGoods) {
  const selectedItems = getSelectedItemsFromLocalStorage();

  for (const item of selectedItems) {
    if (item.name === selectedGoods.name) {
      return true;
    }
  }
  return false;
}

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
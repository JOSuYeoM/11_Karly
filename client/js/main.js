import { swiper } from './swiper.js';
import { getNode, getNodes, insertFirst, css,insertLast } from '../lib/index.js'

const listItem = getNode('.goods__item');
const listBox = getNode('.goods__list')
const sideBar = getNode('.side__ul');
const buttonTop = getNode('.button__top');
const buttonBottom = getNode('.button__bottom')
const sideItem = getNode('.side__item')
const sideContainer = getNode('.side__container');


const goodsLists = getNodes('.goods__list');

function insertItems(selectedGoods){
  const template = /* html */ `
      <li class="swiper-slide swiper3__item w-[78.5px] pb-2">
        <a href="#">
          <img 
            src="${selectedGoods.image}" 
            alt="${selectedGoods.name}"
          />
        </a>
      </li>
    `

    if(sideBar.childElementCount == 0){
      sideContainer.style.height = '180px';
      
    }else if(sideBar.childElementCount == 1){
      sideContainer.style.height = '275px';
    }else{
      sideContainer.style.height = '350px'
    }

    insertFirst(sideBar, template)
}

goodsLists.forEach((list) => {
  const goodsLink = list.querySelector('.goods__link');

  goodsLink.addEventListener('click', (e) => {
    e.preventDefault();

    const link = e.currentTarget;

    const name = link
      .querySelector('.goods__name')
      .textContent.replace(/\n\s+/g, '');

    const price = link
      .querySelector('.goods__regPrice')
      .textContent.replace(/\n\s+/g, '');

    const image = link.querySelector('img').getAttribute('src');

    const selectedGoods = {
      name,
      price,
      image,
    };

    insertItems(selectedGoods)
  });
});


// goodsLists.forEach((list) => {
//   const goodsLink = list.querySelector('.goods__link');

//   goodsLink.addEventListener('click', (e) => {
//     e.preventDefault();

//     const link = e.currentTarget;

//     const name = link
//       .querySelector('.goods__name')
//       .textContent.replace(/\n\s+/g, '');

//     const price = link
//       .querySelector('.goods__regPrice')
//       .textContent.replace(/\n\s+/g, '');

//     const image = link.querySelector('img').getAttribute('src');

//     const selectedGoods = {
//       name,
//       price,
//       image,
//     };

//      // 상품이 이미 저장된 상품 목록에 있는지 확인
//     let recentGoods = JSON.parse(localStorage.getItem('recentGoods')) || [];
//     const duplicate = recentGoods.some(
//       (goods) => goods.name === selectedGoods.name && goods.price === selectedGoods.price && goods.image === selectedGoods.image
//     );

//     // 중복되지 않은 경우에만 상품 데이터를 추가하고 로컬 스토리지에 저장
//     if (!duplicate) {
//       const template =
//       /* html */
//       `
//       <li class="recentItem__field ">
//                 <a href="#">
//                   <img
//                     src="${selectedGoods.image}"
//                     alt="${selectedGoods.name}"
//                     class="li_image h-[3.21285rem] w-10"
//                   />
//                 </a>
//               </li>
//       `;
      
//       insertLast(sideBar, template);
//       insertItems(selectedGoods);
//       recentGoods.push(selectedGoods);
//       localStorage.setItem('recentGoods', JSON.stringify(recentGoods));
//     }
//   });
// });

// const goodsLists = document.querySelectorAll('.goods__list');
// const sideBar = document.querySelector('.side__ul');


// let recentGoods = JSON.parse(localStorage.getItem('recentGoods')) || [];


// recentGoods.forEach((goods) => {
//   const listItem = 
//   /*html*/
//   `
//   <li class="recentItem__field">
//     <a href="#">
//       <img
//         src="${goods.image}"
//         alt="${goods.name}"
//         class="li_image h-[3.21285rem] w-10"
//       />
//     </a>
//   </li>
//   `;
//   insertLast(sideBar, listItem);
// });

// goodsLists.forEach((list) => {
//   const goodsLink = list.querySelector('.goods__link');

//   goodsLink.addEventListener('click', (e) => {
//     e.preventDefault();

//     const link = e.currentTarget;

//     const name = link
//       .querySelector('.goods__name')
//       .textContent.replace(/\n\s+/g, '');

//     const price = link
//       .querySelector('.goods__regPrice')
//       .textContent.replace(/\n\s+/g, '');

//     const image = link.querySelector('img').getAttribute('src');

//     const selectedGoods = {
//       name,
//       price,
//       image,
//     };
    
    
//     const duplicate = recentGoods.some(
//       (goods) =>
//         goods.name === selectedGoods.name &&
//         goods.price === selectedGoods.price &&
//         goods.image === selectedGoods.image
//     );
//     if (!duplicate) {
//       const template = 
//       /*html*/
//       `
//       <li class="recentItem__field">
//                 <a href="#">
//                   <img
//                     src="${selectedGoods.image}"
//                     alt="${selectedGoods.name}"
//                     class="li_image h-[3.21285rem] w-10"
//                   />
//                 </a>
//               </li>
//       `;
//       insertLasts(sideBar, template);
//       recentGoods.push(selectedGoods);
//       localStorage.setItem('recentGoods', JSON.stringify(recentGoods));
//     }
//   });
// });

// function insertLasts(parent, template) {
//   parent.insertAdjacentHTML('beforeend', template);
// }
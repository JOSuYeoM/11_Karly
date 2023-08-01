import { swiper } from './swiper.js';
import { getNode, getNodes, insertLast } from '../lib/index.js'

// const listItem = getNode('.goods__item');
// const listBox = getNode('.goods__list')
const sideBox = getNode('.side__ul');

function createItems(obj){
  let img = obj[2];

  const template = /* html */ `
    <li>
      <a href="#">
        <img
          src=${img}
        />
      </a>
    </li>
  `

  return insertLast(sideBox, template);
}

const goodsLists = getNodes('.goods__list');

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

    createItems(selectedGoods);
  });
});
console.log("Webpack is working!");

import coffeeIcon from './images/coffee.png';

document.addEventListener('DOMContentLoaded', () => {
  const coffeeImgElement = document.getElementById('coffeeIcon');
  coffeeImgElement.src = coffeeIcon;
});
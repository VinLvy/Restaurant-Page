import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import coffeeIcon from './images/coffee.png';  // Import the image
import backgroundImage from './images/cat-background.jpg';

function init() {
  // Set the image source dynamically
  const coffeeImgElement = document.getElementById('coffeeIcon');
  coffeeImgElement.src = coffeeIcon;

  // Add event listeners for navigation buttons
  document.getElementById('homeBtn').addEventListener('click', loadHome);
  document.getElementById('menuBtn').addEventListener('click', loadMenu);
  document.getElementById('contactBtn').addEventListener('click', loadContact);

  // Load the homepage initially
  loadHome();
}

init();
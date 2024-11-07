import restaurantImage from './images/cafecat.jpeg';

export default function loadHome() {
    const content = document.getElementById('content');
    content.textContent = "";  // Clear existing content
  
    // Create a card structure
    const card = document.createElement('div');
    
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Our Restaurant!";
    
    const description = document.createElement('p');
    description.textContent = "Enjoy the best dining experience with us.";
    
    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = "Restaurant ambiance";
    image.classList.add('center-image'); // Add a class for styling

    // Append headline and description to the card
    card.appendChild(headline);
    card.appendChild(description);
    card.appendChild(image);
  
    // Append the card to the content
    content.appendChild(card);
  }
  
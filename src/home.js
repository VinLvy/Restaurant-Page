import restaurantImage from './images/cafecat.jpeg';

export default function loadHome() {
    const content = document.getElementById('content');
    content.textContent = "";  // Clear existing content
  
    // Create a card structure
    const card = document.createElement('div');
    
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Our Cafe!";
    
    const description = document.createElement('p');
    description.textContent = "The café cat is a cozy, inviting space filled with soft, warm lighting and a playful, homey atmosphere. Soft couches and chairs are arranged around low tables, creating comfortable nooks for guests to relax with a cup of coffee, tea, or a light snack. Around the room, various cat-themed decorations add charm and personality to the space, with shelves and climbing trees thoughtfully arranged for the feline residents.";
    
    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = "Cafe ambiance";
    image.classList.add('center-image'); // Add a class for styling

    // Append headline and description to the card
    card.appendChild(headline);
    card.appendChild(description);
    card.appendChild(image);
  
    // Append the card to the content
    content.appendChild(card);
  }
  
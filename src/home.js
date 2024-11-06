export default function loadHome() {
    const content = document.getElementById('content');
    content.textContent = "";  // Clear existing content
  
    // Create a card structure
    const card = document.createElement('div');
    
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Our Restaurant!";
    
    const description = document.createElement('p');
    description.textContent = "Enjoy the best dining experience with us.";
    
    // Append headline and description to the card
    card.appendChild(headline);
    card.appendChild(description);
  
    // Append the card to the content
    content.appendChild(card);
  }
  
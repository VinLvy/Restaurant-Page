import contact from './images/contactcat.png';

export default function loadContact() {
    const content = document.getElementById('content');
    content.textContent = "";  // Clear existing content

    // Create a card structure
    const card = document.createElement('div');
  
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = "Contact Us";
    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = "We would love to hear from you! <br> Tel: 1234-567";
    // const contactNumber = document.createElement('p');
    // contactNumber.textContent = "Tel: 1234-567";

    const address = document.createElement('h2');
    address.textContent = "Our Address";
    const addressInfo = document.createElement('p');
    addressInfo.textContent = "77 Cat Street, Meow District, Indonesia";

    const image = document.createElement('img');
    image.src = contact;
    image.alt = "Catss";
    image.classList.add('contact-image'); // Add a class for styling

    // Append headline and description to the card
    card.appendChild(contactTitle);
    card.appendChild(contactInfo);
    // card.appendChild(contactNumber);
    card.appendChild(address);
    card.appendChild(addressInfo);
    card.appendChild(image);
  
    // Append the card to the content
    content.appendChild(card);
  }
  
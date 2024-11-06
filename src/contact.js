export default function loadContact() {
    const content = document.getElementById('content');
    content.textContent = "";  // Clear existing content
  
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = "Contact Us";
    const contactInfo = document.createElement('p');
    contactInfo.textContent = "We would love to hear from you!";
  
    content.appendChild(contactTitle);
    content.appendChild(contactInfo);
  }
  
export default function loadMenu() {
    const content = document.getElementById('content');
    content.textContent = "";  // Clear existing content
  
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Our Menu";
    const menuDescription = document.createElement('p');
    menuDescription.textContent = "Delicious dishes prepared with fresh ingredients.";
  
    content.appendChild(menuTitle);
    content.appendChild(menuDescription);
  }
  
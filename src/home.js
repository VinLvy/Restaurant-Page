export default function loadHome() {
    const content = document.getElementById('content');
    content.textContent = "";  // Clear existing content
  
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Our Restaurant!";
    const description = document.createElement('p');
    description.textContent = "Enjoy the best dining experience with us.";
  
    content.appendChild(headline);
    content.appendChild(description);
  }
  
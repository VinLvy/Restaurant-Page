import dish1 from './images/cofe.png';
import dish2 from './images/cake.png';
import dish3 from './images/donut.png';

export default function loadMenu() {
    const content = document.getElementById('content');
    content.textContent = "";  // Clear existing content

    // Add menu title and description
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Our Menu";
    
    const menuDescription = document.createElement('p');
    menuDescription.textContent = "Delicious dishes prepared with love.";
    
    content.appendChild(menuTitle);
    content.appendChild(menuDescription);

    // Create a container for the product cards
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // Array of product data
    const products = [
        { image: dish1, title: "Cappuccino", description: "A delicious cappuccino to start your day." },
        { image: dish2, title: "Cake", description: "A sweet cake to boost your mood." },
        { image: dish3, title: "Donut", description: "A delicious donut to make your day perfect." }
    ];

    // Generate cards for each product
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Container for the text content
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');

        const title = document.createElement('h2');
        title.textContent = product.title;

        const description = document.createElement('p');
        description.textContent = product.description;

        textContainer.appendChild(title);
        textContainer.appendChild(description);

        // Image element
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        img.classList.add('product-image');

        // Append text and image to the card
        card.appendChild(textContainer);
        card.appendChild(img);
        menuContainer.appendChild(card);
    });

    content.appendChild(menuContainer);
}

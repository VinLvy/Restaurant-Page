# Restaurant Page

A simple modular JavaScript web application that dynamically loads content for a café's homepage, menu, and contact information. This app features three main sections: **Home**, **Menu**, and **Contact**, each of which loads content and images dynamically without page reloads.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository to your local machine.
2. Ensure you have Node.js and npm installed.
3. Run the following command to install necessary dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm run start
   ```

## Usage

To run this project, make sure you installed webpack and run `npx webpack serve` in your terminal to run the server on your browser. Use the navigation buttons to switch between **Home**, **Menu**, and **Contact** sections, each with its own content, images, and styles.

## Project Structure

### Files and Modules

- **`index.js`**: The main entry point that initializes the app, setting up event listeners and dynamically loading content. It imports styles and images and sets up navigation for Home, Menu, and Contact sections.
  
- **`home.js`**: Defines the **Home** section, displaying a welcoming message, description, and an image that represents the café’s ambiance. This module clears the existing content and creates a card layout for the homepage.
  
- **`menu.js`**: Defines the **Menu** section, displaying a list of menu items with images, titles, and descriptions. The module dynamically generates each menu item card based on an array of product data.
  
- **`contact.js`**: Defines the **Contact** section, providing the café’s contact information, address, and an image. This section also clears previous content and loads new elements into a card layout.

- **Images**: Located in the `images` folder, including icons and images for coffee, dishes, and contact information, imported and used in each module.

### Additional Files

- **`style.css`**: Defines CSS styling for the overall layout and specific classes, such as `center-image` and `product-card`, used in each section for a consistent look and feel.

## Features

- **Dynamic Content Loading**: Switches between Home, Menu, and Contact sections without reloading the page.
- **Event-driven Navigation**: Event listeners trigger section changes, ensuring a smooth user experience.
- **Modular Structure**: Each section (Home, Menu, Contact) is managed independently, making the codebase maintainable and scalable.
- **Image Imports**: Efficiently imports and uses images with JavaScript modules, ensuring a seamless asset management.

## Technologies Used

- **JavaScript (ES6+)**: For modular imports, event-driven content switching, and DOM manipulation.
- **CSS**: Basic styling for layout and specific section classes.
- **Webpack (important)**: For module bundling if deploying as a production app.

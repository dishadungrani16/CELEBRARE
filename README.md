# CELEBRARE
This project is a dynamic, web-based image editor built with a "frosted glass" UI and an animated snowfall background. It uses Swiper.js to create a swipeable image carousel, allowing users to add, drag, edit, and style text elements on each slide. The entire application is built with vanilla HTML, CSS (backdrop-filter), and JavaScript.

# Frosted Glass Story Editor

This is a simple, beautiful web application that provides a "frosted glass" interface for adding text to a swipeable image carousel. It features a dynamic, falling snow background and intuitive controls for text manipulation.

It's a perfect front-end project to demonstrate skills in DOM manipulation, CSS styling (especially `backdrop-filter`), and integrating third-party libraries like Swiper.js.

## Features

* **Modern Frosted Glass UI:** The entire editor card uses the CSS `backdrop-filter` property to create a stylish, translucent "glass" effect.
* **Animated Background:** A dynamic, falling snow animation created with HTML Canvas runs in the background.
* **Image Carousel:** Built with **Swiper.js**, allowing users to swipe between multiple background images.
* **Add Text:** Click the "Add Text" button to instantly drop a new text element onto the active slide.
* **Edit Text:** **Double-click** any text element to make it `contenteditable` and change the text.
* **Style Text:** Select any text element to update its **font family**, **font size**, and **color** using the top control bar.
* **Draggable Elements:** Click and drag text elements to precisely position them anywhere on the slide.
* **Boundary Detection:** Text elements are constrained and cannot be dragged outside the slide's boundaries.
  
##  Tech Stack

* **HTML5:** Semantic markup for the application structure.
* **CSS3:** Advanced styling using Flexbox, backdrop-filter, and custom properties.
* **JavaScript (ES6+):** Vanilla JS for all DOM manipulation, event handling, and logic.
* **Swiper.js:** A modern, touch-first library for the image carousel.
* **HTML Canvas:** Used to render the animated snowfall background.

##  Getting Started

This is a static front-end project. No build process is required.

### Prerequisites

You only need a modern web browser.

### Running Locally

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Create the `images` folder:**
    The CSS file (`style.css`) expects images to be in an `images` folder:
    * `images/1.jpg`
    * `images/2.jpg`
    * `images/3.jpg`

    You must add these images yourself for the slides to display correctly.

3.  **Open the project:**
    Simply open the `index.html` file in your web browser.
    *For the best experience (avoiding potential CORS issues), run it with a simple local server. If you have VS Code, the "Live Server" extension is a great option.*

###  Deploying to Netlify

1.  Push your code (including your `index.html`, `style.css`, `script.js`, and the `images` folder) to a GitHub repository.
2.  Log in to your Netlify account.
3.  Click "Add new site" -> "Import an existing project".
4.  Connect to GitHub and select your repository.
5.  Netlify will automatically detect it as a static site. No build command or publish directory is needed.
6.  Click **"Deploy site"**. Your project will be live in seconds!

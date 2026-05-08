// Boolean variable to track mode
let darkMode = false;

/* NEW FUNCTION: document.querySelector lets you select any HTML element using its tag, class, or id */

/* const (intead of let) because we are storing a REFRENCE to part of the HTML page */
const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");
const image = document.querySelector("#image");


// Now we can change styles & attributes for those elements
heading.textContent = "Light Mode & Dark Mode Website";
heading.style.color = "navy"; 

function toggleMode() {
    console.log("function triggered");
    darkMode = !darkMode;
    console.log(darkMode);

    // 2. Conditionally apply styles based on mode
    if (darkMode == true) {
        console.log("apply dark mode styles")
        body.style.background = "black";
        heading.style.color = "grey";
        description.style.color = "white";
        description.textContent = "Welcome to the dark side";
        toggleBtn.textContent = "Switch to Light";
        image.src = "DarkIMG.jpeg";
        toggleBtn.style.background = "red";

    }

    else {
        console.log("apply light mode styles")
        body.style.background = "lightyellow";
        heading.style.color = "lightpink";
        description.style.color = "black";
        description.textContent = "Welcome to the light side";
        toggleBtn.textContent = "Switch to Dark";
        image.src = "LightIMG.jpeg";
        toggleBtn.style.background = "lightblue";
    }

}


toggleBtn.addEventListener("click", toggleMode);










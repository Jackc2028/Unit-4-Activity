// Boolean variable to track mode
let darkMode = false;

/* NEW FUNCTION: document.querySelector lets you select any HTML element using its tag, class, or id */

/* const (intead of let) because we are storing a REFRENCE to part of the HTML page */
const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");
const image = document.querySelector("#image");
const emoji = document.querySelector("#emoji");


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

// REVIEW

1. // select new element on the page
const hackerBtn = document.querySelector("#hacker")
// 2. Attach click event listener to the button
hackerBtn.addEventListener("click", setHacker);
// 3. Define the function that triggers when clicked
function setHacker() {
    console.log("setting hacker theme...");
    body.style.background = "rgb(255, 93, 182, 0.82)";
    body.style.color = "rgb(178, 255, 90)";
    body.style.fontFamily = "monospace";
    description.textContent = "YOU HAVE BEEN HACKED"
    emoji.classList.add("animated");

}








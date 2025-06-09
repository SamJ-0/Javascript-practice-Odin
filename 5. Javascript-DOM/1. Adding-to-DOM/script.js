const container = document.querySelector("#container");

// Add the following elements to the container using ONLY 
// JavaScript and the DOM methods shown above:

// Add a <p> to the container
const redText = document.createElement("p");
redText.classList.add("redText");
redText.textContent = "Hey I’m red!";

redText.style.color = "red";
container.appendChild(redText);

// Add an <h3> to the container
const blueHeading = document.createElement("h3");
blueHeading.classList.add("blueHeading");
blueHeading.textContent = "I'm a blue h3!";

blueHeading.style.color = "blue";
container.appendChild(blueHeading);

// Create a styled <div> with an <h1> and <p> inside
const newDiv = document.createElement("div");
newDiv.setAttribute("style", "background-color: pink; border: 4px solid #000;");

const divHeading = document.createElement("h1");
divHeading.textContent = "I'm in a div";

const divText = document.createElement("p");
divText.textContent = "ME TOO!";

newDiv.appendChild(divHeading);
newDiv.appendChild(divText);

container.appendChild(newDiv);
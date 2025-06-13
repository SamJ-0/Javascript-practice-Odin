const topPage = document.querySelector(".topPage");

    const button = document.createElement("button");
    button.classList.add("newGridBtn");
    button.textContent = "New Grid";

    topPage.appendChild(button);

    const container = document.querySelector(".gridContainer");

    createGrid(16);

function createGrid(num) {
    let gridSize = num*num;
    let divSize = 960 / num + "px";
    
    for(let i = gridSize; i > 0; i--) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("gridPiece");
        newDiv.style.height = divSize;
        newDiv.style.width = divSize;

        newDiv.addEventListener("mouseover", draw);

        container.appendChild(newDiv);
    }
}

button.addEventListener("click", userGridSize);

function userGridSize() {
    let userNumber = parseInt(prompt("What size grid do you want?: "));

    if(userNumber >= 100 || userNumber <= 0) {
        console.log("Please choose a number between 1 and 100");
    } else if (!userNumber) {
        createGrid(16);
    }
    else {
        while(container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
    }
    createGrid(userNumber);
}

function draw(event) {
   event.target.style.backgroundColor = "#353b48";
   event.target.style.border = "1px solid #636e72";
}
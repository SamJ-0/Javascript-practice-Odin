const topPage = document.querySelector(".topPage");

    const button = document.createElement("button");
    button.classList.add("newGridBtn");
    button.textContent = "New Grid";

    topPage.appendChild(button);

    const container = document.querySelector(".gridContainer");

    createGrid(16);

function createGrid(num) {
    let gridSize = num*num;
    
    for(let i = gridSize; i > 0; i--) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("gridPiece");
        newDiv.textContent = i;
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
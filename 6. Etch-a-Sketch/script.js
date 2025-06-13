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
        container.appendChild(newDiv);
    }
}
createGrid(16);

function createGrid(num) {
    let gridSize = num*num;

    for(let i = gridSize; i > 0; i--) {
        const container = document.querySelector("#container");
        const newDiv = document.createElement("div");
        newDiv.classList.add("gridPiece");
        container.appendChild(newDiv);
    }
}
const itemList = document.querySelector("ul");
const input = document.querySelector("input");
const addItemBtn = document.querySelector("#btn");




addItemBtn.addEventListener("click", addToList);

function addToList() {
    let currentInput = input.value;
    input.value = " ";

    const item = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    item.appendChild(newSpan);
    item.appendChild(newBtn);

    newSpan.textContent = currentInput;
    newBtn.textContent = "Delete";

    itemList.appendChild(item);

    input.focus();
    newBtn.addEventListener("click", deleteButton);
     
    function deleteButton() {
    item.remove();
    input.focus();
}
}

const body = document.querySelector(".container");
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".add-show-btn");
const closeModal = document.querySelector(".cancel-add-show-btn");
const closeDialogBtn = document.querySelector(".close-dialog");

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', closeDialog);
closeDialogBtn.addEventListener('click', closeDialog);

function closeDialog() {
    modal.close();
}

const myLibrary = [];

function Show(title, episodes, seasons, releaseDate, watchStatus, genre, id) {
    if (!new.target) {
        throw Error("You must use the `new` operator to call the constructor");
    }

    this.title = title;
    this.episodes = episodes;
    this.seasons = seasons;
    this.releaseDate = releaseDate;
    this.watchStatus = watchStatus;
    this.genre = genre;
    this.id = id;

    this.info = function() {
        return `${this.title}, Episodes: ${this.episodes}, Seasons: ${this.seasons}, Released: ${this.releaseDate}, Seen: ${this.watchStatus}`;
    }
}

function addShowToLibrary(obj) {
    myLibrary.push(obj);
}

function displayTvShow(arr) {
    arr.forEach(function(element) {

        const removeBtn = createButton("X", "remove-btn")
        const title = addParagraphElement(`${element.title}`, "show-title");
        const episodes = addParagraphElement(`Episodes: ${element.episodes}`, "card-text");
        const seasons = addParagraphElement(`Seasons: ${element.seasons}`, "card-text");
        const releaseDate = addParagraphElement(`Released: ${element.releaseDate}`, "card-text");
        const watchStatus = addParagraphElement(`Watch status: ${element.watchStatus}`, "card-text");
        const genre = createGenrePill(`${element.genre}`);
        
        createCard(title, episodes, seasons, releaseDate, watchStatus, genre, element.id, removeBtn);
    
    });
}

function createCard(cardTitle, cardEpisodes, cardSeasons, cardReleaseDate, cardWatchStatus, cardGenre, cardId, button ) {
    const cardBody = document.createElement("div");
    cardBody.classList.add("card");
    cardBody.setAttribute("data-attribute", cardId);
    button.setAttribute("data-attribute", cardId);

    const cardGradient = document.createElement("div");
    cardGradient.classList.add("card-gradient");
    cardBody.appendChild(cardGradient);

    cardBody.appendChild(button);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardEpisodes);
    cardBody.appendChild(cardSeasons);
    cardBody.appendChild(cardReleaseDate);
    cardBody.appendChild(cardWatchStatus);
    cardBody.appendChild(cardGenre);

    return body.appendChild(cardBody);
}

function addParagraphElement(textContent, className) {
    const paragraph = document.createElement("p");
    paragraph.textContent = textContent;
    paragraph.classList.add(className);

    return paragraph;
}

function createGenrePill(textContent) {
    const genreBackground = document.createElement("div");
    genreBackground.classList.add("show-genre-bg-colour");

    const genre = addParagraphElement(textContent);
    genre.classList.add("show-genre");
    genreBackground.appendChild(genre);

    return genreBackground;
}

function createButton(textContent, className) {
    const button = document.createElement("button");

    button.textContent = textContent;
    button.classList.add(className);

    return button;
}

// const show1 = new Show("Dexter: Season 1", 3, "1 season", "11th July 2025", "Watching", "Documentary", crypto.randomUUID());
// const show2 = new Show("Leverage: Redemption", 39, "3 seasons", "22nd October 2021", "Seen", "Heist", crypto.randomUUID());
// const show3 = new Show("Dexter: New blood", 3, "1 season", "11th July 2025", "Watching", "Crime", crypto.randomUUID());
// const show4 = new Show("Leverage: Redemption", 39, "3 seasons", "22nd October 2021", "Seen", "Heist", crypto.randomUUID());

// const show5 = new Show("Dexter: Resurrection", 3, "1 season", "11th July 2025", "Watching", "Mystery", crypto.randomUUID());
// const show6 = new Show("Leverage: Season 1", 39, "3 seasons", "22nd October 2021", "Seen", "Heist", crypto.randomUUID());
// const show7 = new Show("Dexter: Resurrection", 3, "1 season", "11th July 2025", "Watching", "Crime", crypto.randomUUID());
// const show8 = new Show("Leverage: Redemption", 39, "3 seasons", "22nd October 2021", "Seen", "Heist", crypto.randomUUID());

// addShowToLibrary(show1);
// addShowToLibrary(show2);
// addShowToLibrary(show3);
// addShowToLibrary(show4);

// addShowToLibrary(show5);
// addShowToLibrary(show6);
// addShowToLibrary(show7);
// addShowToLibrary(show8);
addShowToLibrary(userSubmittedShow());
displayTvShow(myLibrary);

const removeCardButton = document.querySelectorAll(".remove-btn");

removeCardButton.forEach((removeBtn) => {
    removeBtn.addEventListener('click', removeShowData);
})

function removeShowData(event) {
    const removeBtnId = event.target.getAttribute("data-attribute");
    const card = event.target.closest(".card");
    const cardId = card.getAttribute("data-attribute");

    const libraryId = myLibrary.findIndex((item) => {
        return removeBtnId === item.id;
    })

     if(removeBtnId === cardId) {
        myLibrary.splice(libraryId, 1);
        card.remove();
       }
    console.log(myLibrary);
}
const modalSubmitButton = document.querySelector("#submit-add-show-btn");

modalSubmitButton.addEventListener('click', userSubmittedShow);

function userSubmittedShow() {
    const formTitle = document.querySelector("#title").value;
    const formEpisodes = document.querySelector("#episodes").value;
    const formSeasons = document.querySelector("#seasons").value;
    const formReleased = document.querySelector("#released").value;
    const formWatchStatus = document.querySelector("#watch-status").value;

    return new Show(formTitle, formEpisodes, formSeasons, formReleased, formWatchStatus, "Documentary", crypto.randomUUID());
}
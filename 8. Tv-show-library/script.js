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

function displayTvShowText(obj) {

        const removeBtn = createButton("X", "remove-btn")
        const title = addParagraphElement(`${obj.title}`, "show-title");
        const episodes = addParagraphElement(`Episodes: ${obj.episodes}`, "card-text");
        const seasons = addParagraphElement(`Seasons: ${obj.seasons}`, "card-text");
        const releaseDate = addParagraphElement(`Released: ${obj.releaseDate}`, "card-text");
        // const watchStatus = addParagraphElement(`Watch status: ${obj.watchStatus}`, "card-text");
        const watchStatus = createStatusBadge("card-watch-status", obj.watchStatus, "Seen", "Watching", "Plan to watch", "Dropped");
        const genre = createGenrePill(`${obj.genre}`);
        
        createCard(title, episodes, seasons, releaseDate, watchStatus, genre, obj.id, removeBtn);
    
}

function createCard(cardTitle, cardEpisodes, cardSeasons, cardReleaseDate, cardWatchStatus, cardGenre, cardId, removeButton ) {
    const cardBody = document.createElement("div");
    cardBody.classList.add("card");
    cardBody.setAttribute("data-attribute", cardId);
    removeButton.setAttribute("data-attribute", cardId);

    removeButton.addEventListener('click', removeShowData);

    const cardGradient = document.createElement("div");
    cardGradient.classList.add("card-gradient");
    cardBody.appendChild(cardGradient);

    const statusLabel = document.createElement("label");
    statusLabel.setAttribute("for", "card-watch-status");
    statusLabel.textContent = "Status: ";

    cardBody.appendChild(removeButton);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardEpisodes);
    cardBody.appendChild(cardSeasons);
    cardBody.appendChild(cardReleaseDate);
    cardBody.appendChild(statusLabel);
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

function createStatusBadge(statusFor, item, option1, option2, option3, option4) {
    const statusSelect = document.createElement("select");

    statusSelect.setAttribute("name", statusFor);
    statusSelect.setAttribute("id", statusFor);
    statusSelect.classList.add(item);

    statusSelect.appendChild(createStatusBadgeOptions(option1));
    statusSelect.appendChild(createStatusBadgeOptions(option2));
    statusSelect.appendChild(createStatusBadgeOptions(option3));
    statusSelect.appendChild(createStatusBadgeOptions(option4));

    return statusSelect;
}

function createStatusBadgeOptions(textContent) {
    const statusOption = document.createElement("option");

    statusOption.value = textContent;
    statusOption.textContent = textContent;

    return statusOption;
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

const modalSubmitButton = document.querySelector("#submit-add-show-btn");
modalSubmitButton.addEventListener('click', userSubmittedShow);

function userSubmittedShow(event) {
    const formTitle = document.querySelector("#title").value;
    const formEpisodes = document.querySelector("#episodes").value;
    const formSeasons = document.querySelector("#seasons").value;
    const formReleased = document.querySelector("#released").value;
    const formWatchStatus = document.querySelector("#watch-status").value;
    const formGenre = document.querySelector("#genre").value;

    const formatReleaseDate = new Date(formReleased);
    const releaseDateFormatted = new Intl.DateTimeFormat("en-GB", {
        dateStyle: "long",
    }).format(formatReleaseDate);

    const userAddedShow = new Show(formTitle, formEpisodes, formSeasons, releaseDateFormatted, formWatchStatus, formGenre, crypto.randomUUID());

    addShowToLibrary(userAddedShow);

    displayTvShowText(userAddedShow);
    event.preventDefault();
    closeDialog();
    document.querySelector("#add-show-form").reset();
}

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
}


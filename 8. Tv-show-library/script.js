const body = document.querySelector(".container");
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".add-show-btn");
const closeModal = document.querySelector(".cancel-add-show-btn");
const closeDialogBtn = document.querySelector(".close-dialog");

openModal.addEventListener('click', () => {
    modal.showModal();
})

// closeModal.addEventListener('click', () => {
//     modal.close();
// })

closeModal.addEventListener('click', closeDialog);
closeDialogBtn.addEventListener('click', closeDialog);

function closeDialog() {
    modal.close();
}

const myLibrary = [];

function Show(title, episodes, seasons, releaseDate, watched, genre, id) {
    if (!new.target) {
        throw Error("You must use the `new` operator to call the constructor");
    }

    this.title = title;
    this.episodes = episodes;
    this.seasons = seasons;
    this.releaseDate = releaseDate;
    this.watched = watched;
    this.genre = genre;
    this.id = id;

    this.info = function() {
        return `${this.title}, Episodes: ${this.episodes}, Seasons: ${this.seasons}, Released: ${this.releaseDate}, Seen: ${this.watched}`;
    }
}

function addShowToLibrary(obj) {
    myLibrary.push(obj);
}

function displayShow(arr) {
    arr.forEach(function(element) {
        const addTvShow = document.createElement("div");
        
        const cardTitle = document.createElement("p");
        const cardEpisodes = document.createElement("p");
        const cardSeasons = document.createElement("p");
        const cardReleaseDate = document.createElement("p");
        const cardWatched = document.createElement("p");

        const cardGenreBg = document.createElement("div");
        const cardGenre = document.createElement("p");

        const removeBtn = document.createElement("button");

        addTvShow.classList.add("card");
        addTvShow.setAttribute("data-attribute", element.id);

        cardTitle.textContent = element.title;
        cardEpisodes.textContent = `Episodes: ${element.episodes}`;
        cardSeasons.textContent = `Seasons: ${element.seasons}`;
        cardReleaseDate.textContent = `Released: ${element.releaseDate}`;
        cardWatched.textContent = `Watch status: ${element.watched}`;
        cardGenre.textContent = element.genre;

        cardTitle.classList.add("show-title");
        cardGenreBg.classList.add("show-genre-bg-colour");
        cardGenre.classList.add("show-genre");

        addTvShow.appendChild(cardTitle);
        addTvShow.appendChild(cardEpisodes);
        addTvShow.appendChild(cardSeasons);
        addTvShow.appendChild(cardReleaseDate);
        addTvShow.appendChild(cardWatched);

        cardGenreBg.appendChild(cardGenre);
        addTvShow.appendChild(cardGenreBg);

        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "X";
        addTvShow.appendChild(removeBtn);

        body.appendChild(addTvShow);


    });
}

const show1 = new Show("Dexter: Resurrection", 3, "1 season", "11th July 2025", "Watching", "Crime", crypto.randomUUID());
const show2 = new Show("Leverage: Redemption", 39, "3 seasons", "22nd October 2021", "Seen", "Heist", crypto.randomUUID());
const show3 = new Show("Dexter: Resurrection", 3, "1 season", "11th July 2025", "Watching", "Crime", crypto.randomUUID());
const show4 = new Show("Leverage: Redemption", 39, "3 seasons", "22nd October 2021", "Seen", "Heist", crypto.randomUUID());

addShowToLibrary(show1);
addShowToLibrary(show2);
addShowToLibrary(show3);
addShowToLibrary(show4);
displayShow(myLibrary);

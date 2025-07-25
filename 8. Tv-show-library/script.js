const body = document.querySelector(".container");

const myLibrary = [];

function Show(title, episodes, seasons, releaseDate, watched, id) {
    if (!new.target) {
        throw Error("You must use the `new` operator to call the constructor");
    }

    this.title = title;
    this.episodes = episodes;
    this.seasons = seasons;
    this.releaseDate = releaseDate;
    this.watched = watched;
    this.id = id;

    this.info = function() {
        return `${this.title}
        Episodes: ${this.episodes}
        Seasons: ${this.seasons}
        Released: ${this.releaseDate}
        Seen: ${this.watched}`;
    }
}

function addShowToLibrary(obj) {
    myLibrary.push(obj);
}

function addShowToPage(arr) {
    arr.forEach(function(element) {
        console.log(element);
        const addTvShow = document.createElement("div");
        const cardContents = document.createElement("p");
        const removeBtn = document.createElement("button");

        addTvShow.classList.add("card");
        addTvShow.setAttribute("data-attribute", element.id);

        cardContents.textContent = element.info();
        addTvShow.appendChild(cardContents);

        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "X";
        addTvShow.appendChild(removeBtn);

        body.appendChild(addTvShow);


    });
}

const show1 = new Show("Dexter: Resurrection", 3, "1 season", "11th July 2025", "Watching", crypto.randomUUID());
const show2 = new Show("Leverage: Redemption", 39, "3 seasons", "22nd October 2021", "Seen", crypto.randomUUID());
const show3 = new Show("Dexter: Resurrection", 3, "1 season", "11th July 2025", "Watching", crypto.randomUUID());
const show4 = new Show("Leverage: Redemption", 39, "3 seasons", "22nd October 2021", "Seen", crypto.randomUUID());

addShowToLibrary(show1);
addShowToLibrary(show2);
addShowToLibrary(show3);
addShowToLibrary(show4);
addShowToPage(myLibrary);
function MakeShow(title, episodes, seasons, releaseDate, watched) {
    if (!new.target) {
        throw Error("You must use the `new` operator to call the constructor");
    }

    this.title = title;
    this.episodes = episodes;
    this.seasons = seasons;
    this.releaseDate = releaseDate;
    this.watched = watched;

    this.info = function() {
        return `${this.title}, ${this.episodes} episodes, ${this.seasons}, ${this.releaseDate}, ${this.watched}`;

    }
}

const show = new MakeShow("Dexter: Resurrection", 3, "1 season", "11 July 2025", "Currently watching");

console.log(show.info());
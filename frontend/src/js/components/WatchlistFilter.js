export default function WatchlistFilter(watchlist){
    return `
    ${watchlist.map(element => {
        if(element.status == "Watched"){
            const watchedShow = document.createElement("p");
            watchedShow.classList.add("watchlist__watched_show");
            watchedShow.innerText = element.tvShow.title;
            document.querySelector(".watchlist__watched_shows").appendChild(watchedShow);
        }
    }).join("")}
    `
}
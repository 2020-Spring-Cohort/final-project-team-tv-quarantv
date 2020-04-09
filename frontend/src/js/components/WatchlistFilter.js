export default function WatchlistFilter(watchlist){
    return `
    ${watchlist.map(element => {
        if(element.status == "Watched"){
            const watchedShow = document.createElement("p");
            watchedShow.classList.add("watchlist__watched_show");
            watchedShow.innerText = element.tvShow.title;
            document.querySelector(".watchlist__watched_shows").appendChild(watchedShow);
        }
        else if(element.status == "Watching"){
            const watchingShow = document.createElement("p");
            watchingShow.classList.add("watchlist__watching_show");
            watchingShow.innerText = element.tvShow.title;
            document.querySelector(".watchlist__watching_shows").appendChild(watchingShow);
        }
        else if(element.status == "ToBeWatched"){
            const toBeWatchedShow = document.createElement("p");
            toBeWatchedShow.classList.add("watchlist__tobewatched_show");
            toBeWatchedShow.innerText = element.tvShow.title;
            document.querySelector(".watchlist__tobewatched_shows").appendChild(toBeWatchedShow);
        }
    }).join("")}
    `
}
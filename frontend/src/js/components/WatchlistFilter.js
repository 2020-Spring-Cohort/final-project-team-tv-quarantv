export default function WatchlistFilter(watchlist){
    return `
    ${watchlist.map(element => {
        if(element.status == "Watched"){
            const watchedShow = document.createElement("p");
            watchedShow.classList.add("watchlist__watched_show");
            watchedShow.innerText = element.tvShow.title;
            document.querySelector(".watchlist__watched_shows").appendChild(watchedShow);
            watchedShow.innerHTML +=  `<input class="watch__id"  type="hidden" value="${element.id}">` +
            ` <button class='edit-watchList__submit'>Edit This Show </button>` 
          + ` <button class='addReview-watchList__submit'>Add Review </button>`
          + ` <button class='deleteReview-watchList__submit'>Delete This Show </button>` ;
         
        }
        else if(element.status == "Watching"){
            const watchingShow = document.createElement("p");
            watchingShow.classList.add("watchlist__watching_show");
            watchingShow.innerText = element.tvShow.title;
            document.querySelector(".watchlist__watching_shows").appendChild(watchingShow);
            watchingShow.innerHTML +=  `<input class="watch__id"  type="hidden" value="${element.id}">` +
            " <button class='edit-watchList__submit'>Edit This Show </button>" 
            + ` <button class='deleteReview-watchList__submit'>Delete This Show </button>` ;
          ;
        }
        else if(element.status == "ToBeWatched"){
            const toBeWatchedShow = document.createElement("p");
            toBeWatchedShow.classList.add("watchlist__tobewatched_show");
            toBeWatchedShow.innerText = element.tvShow.title;
            document.querySelector(".watchlist__tobewatched_shows").appendChild(toBeWatchedShow);
            toBeWatchedShow.innerHTML +=  `<input class="watch__id"  type="hidden" value="${element.id}">` +
            " <button class='edit-watchList__submit'>Edit This Show </button>" 
            + " <button class='deleteReview-watchList__submit'>Delete This Show </button>" ;
           ;
        }
    }).join("")}
    `
}
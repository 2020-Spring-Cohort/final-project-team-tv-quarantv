export default function Watchlist(user){
    `
    <div class="watchlist_header">
        <h2>${user.name}'s Watchlist</h2>
        <input class="user__id" type="hidden" value="${user.Id}">
    </div>
    
    <div class="watchlist__grid_container">
        <div class="watchlist__watched_shows">
            <h3>Watched</h3>
        </div>

        <div class="watchlist_watching_shows">
            <h3>Watching</h3>
        </div>

        <div class="watchlist_tobewatched_shows">
            <h3>To Be Watched</h3>
        </div>
    </div>
    
    <section class="watchlist__add_show">
        <button class="watchlist__add_show_button">Add a show to your watchlist</button>
    </section>
    `
    return `
    ${user.watchlists.map(element => {
        if(element.status == "Watched"){
            const watchedShow = document.createElement("p");
            watchedShow.classList.add("watchlist__watched_show");
            watchedShow.innerText = element.tvShow.title;
            document.querySelector(".watchlist__watched_shows").appendChild(watchedShow);
        }

    }).join("")}
    `
}
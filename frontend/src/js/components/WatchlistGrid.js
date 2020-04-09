export default function WatchlistGrid(){
    return ` 
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
}
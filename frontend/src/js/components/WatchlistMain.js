export default function WatchlistMain(watchlists) {
    return `
    <div class="watchlist_main__container"
        <div class="watchlist_main__watched">
            <ol class="watched_list">
            ${watchlists.map(watchlist => {
                if(watchlist.status == "Watched"){
                    <li>{watchlist.tvShow.title}</li>
                    
                }})}
            </ol>
        /* </div>

                <div class="watchlist_main__watching">
                    <ol class="watching_list"></ol>

                </div>

                <div class="watchlist_main__toBeWatched">
                    <ol class="toBeWatched_list"></ol>

                </div>
        </div> */
    `
}
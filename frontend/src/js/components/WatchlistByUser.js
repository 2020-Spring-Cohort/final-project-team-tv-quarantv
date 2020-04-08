export default function WatchlistByUser(watchlist) {
    return `
        <div class="watchlistbyuser__container">
            ${watchlist.map(element => {
                return `
                    <p>${element.tvShow.title}</p>
                `
            }).join("")}
        </div>
    `
}
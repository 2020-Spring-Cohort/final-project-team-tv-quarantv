export default function WatchlistAddShow(tvShows) {
    return `
    
    <select class="watchlist_add_show__show-id" type="dropdown">
    ${tvShows.map(tvShow => {
        return `
            <option value=${tvShow.id}>${tvShow.title}</option>
            `
        })}
    </select>

    `
}
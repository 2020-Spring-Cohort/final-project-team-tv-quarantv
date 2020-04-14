//import UserLogin from "./UserLogin"

export default function WatchlistAddShow(tvShows) {
 
    return `
    <p>Choose a show</p>
    <select class="watchlistaddshow__show_id" type="dropdown">
    ${tvShows.map(tvShow => {
        return `
            <option value=${tvShow.id}>${tvShow.title}</option>
            `
        })}
    </select>
    <p>Choose a status</p>
    <select class="watchlistaddshow__status_choice" type="dropdown">
        <option value="ToBeWatched">To Be Watched</option>
        <option value="Watching">Watching</option>
        <option value="Watched">Watched</option>
    </select>
    <br><br>
    <button class="watchlistaddshow__submit">Add show</button>
    `
    
}
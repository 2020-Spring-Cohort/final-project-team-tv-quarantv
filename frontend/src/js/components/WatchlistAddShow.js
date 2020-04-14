//import UserLogin from "./UserLogin"
var flag = 0;
export default function WatchlistAddShow(tvShows) {
 
    return `
    <p>Choose a show</p>
    <select class="watchlistaddshow__show_id" type="dropdown">
    ${tvShows.map(tvShow => {
        flag = 0;
        tvShow.watchlists.forEach(element => {
         if(tvShow.id == element.tvShowId && element.userId == localStorage.LoginhUserId)
         {
           flag =1;
         }
        })
          
       if(flag == 0)
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


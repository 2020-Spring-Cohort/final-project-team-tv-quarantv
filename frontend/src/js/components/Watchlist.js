export default function Watchlist(user){
    return `
    <div class="watchlist_header">
        <h2>${user.name}'s Watchlist</h2>
        <input class="user__id" type="hidden" value="${user.id}">
    </div>
    
    <section class="watchlist__main_section">
        <div class="watchlistbyuser__container">
            ${user.watchlists.map(element => {
                return `
                 <p>${element.tvShow.title}</p>
                `
            }).join("")}
        </div>
    </section>

    <section class="watchlist__add_show">
        <button class="watchlist__add_show_button">Add a show to your watchlist</button>
    </section>
    `
}
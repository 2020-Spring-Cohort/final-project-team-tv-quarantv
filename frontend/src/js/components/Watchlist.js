export default function Watchlist(user){
    return `
    <div class="watchlist_header">
        <h2>${user.name}'s Watchlist</h2>
        <input class="user__id" type="hidden" value="${user.id}>
    </div>

    <section class="watchlist__main">
        <button class="watchlist__show_watchlist_btn">Click to show watchlist</button>
    </section>

    <section class="watchlist__add_show">
        <button class="watchlist__add_show_button">Add a show to your watchlist</button>
    </section>
    `
}
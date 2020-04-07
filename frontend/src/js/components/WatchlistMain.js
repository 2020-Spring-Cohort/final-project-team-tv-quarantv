export default function WatchlistMain(watchlists) {
   var Watched = [];
   var Watching = [];
   var ToBeWatched = [];
return `
${watchlists.map(watchlist => {





    
    if(watchlist.status == "Watched" )
    Watched.push(watchlist.tvShow.title);

    if(watchlist.status == "Watching")
    Watching.push(watchlist.tvShow.title);

    if(watchlist.status == "ToBeWatched")
    ToBeWatched.push(watchlist.tvShow.title);

})}.join("");

<table border="10px><tr>
${Watched.map(function (value){
    return `
    <td>${value}</td>
    `
}).join("")}
</table>

`

   
}


/*
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
        </div> 
*/

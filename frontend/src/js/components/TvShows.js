export default function TvShows(tvShows){
    return `
    <section class="tvShows"
        <h2>All TV Shows</h2>
        <div class="tvShows__grid_container">
            ${tvShows.map(tvShow => {
                return `
                <div class="tvShows__specific_tvShow"
                    <h4 class="tvShows__show_title">${tvShow.title}</h4>
                    <img class="tvShows__show_image" src="./img/tvshows/${tvShow.image}" alt="TvShow Image">
                    <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                    <div class ="dropdown-content">
                        <p class="p-dropdown">Start Watching</p>
                        <a href="https://www.netflix.com/" target="_blank"><img class="icon" src="./img/design/netflix.jpg" alt="netflix.com"></a>
                        <a href="https://www.amazon.com/" target="_blank"><img class="icon" src="./img/design/amazon.jpg" alt="amazon.com"></a>
                        </br>
                        <a href="https://www.imdb.com/" target="_blank"><img class="icon" src="./img/design/imdb.jpg" alt="imdb.com"></a>
                        <a href="https://www.youtube.com/" target="_blank"><img class="icon" src="./img/design/youtube.jpg" alt="youtube.com"></a>
                    </div>
                </div>
               `
            }).join("")}
        </div>
    </section
    `
}

export default function TvShows(tvShows){
    return `
    <h2>All TV Shows</h2>
        <div class="tvShows__grid_container">
            ${tvShows.map(tvShow => {
                return `
                <div class="tvShows__specific_tvShow"
                    <h4 class="tvShows__show_title">${tvShow.title}</h4>
                    <img class="tvShows__show_image" src="./img/tvshows/${tvShow.image}" alt="TvShow Image">
                    <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                </div>
               `
        }).join("")}
        </div>
    `
}

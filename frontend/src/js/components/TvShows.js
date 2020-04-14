export default function TvShows(tvShows){
    return `
    <section class="tvShows">
        <h2>All TV Shows</h2>
        <div class="tvShows__grid_container">
            ${tvShows.map(tvShow => {
                return `
                <div class="tvShows__specific_tvShow">
                    <article>
                        <h4 class="tvShows__show_title">${tvShow.title} <p class="p_title-hover-btn">>></p></h4>
                        <img class="tvShows__show_image" src="./img/tvshows/${tvShow.image}" alt="TvShow Image">
                        <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                    <article>
                    <div class="dropdown-content">
                        <p class="p-dropdown">Start Watching</p>
                        
                    </div>
                </div>
               `
            }).join("")}
        </div>
    </section>
    `
}

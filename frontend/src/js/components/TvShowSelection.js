export default function TvShowSelection(tvShow){
    return `
    <h2>${tvshow.title}</h2>
        <div class="tvShows__grid_container">
            ${tvShow.map(tvShow => {
                return `
                <div class="tvShow__specific_tvShow"
                <img src="./images/${tvshow.image}" alt="${tvshow.image}"></img>
                    <h4>${tvShow.season}</h4>
                    <h4>${tvShow.viewerdiscretion}</h4>

                    <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                </div>
               `
        }).join("")}
        </div>
    `
}
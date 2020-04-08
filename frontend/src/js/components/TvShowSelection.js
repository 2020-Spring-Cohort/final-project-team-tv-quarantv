export default function TvShowSelection(tvShow) {
    return `
        <div class="tvShow__grid_container">
            <h2>${tvShow.title}</h2>
            <img class="tvShow__image" src="./img/tvshows/${tvShow.image}" alt="${tvShow.image}"></img>
            <h4>Number of seasons: ${tvShow.season}</h4>
            <h4>Rated: ${tvShow.viewerDiscretion}</h4>
            <input class="tvShow__id" type="hidden" value="${tvShow.id}">
        </div>
    `
}
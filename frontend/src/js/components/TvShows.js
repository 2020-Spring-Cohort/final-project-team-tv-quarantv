export default function TvShows(tvShows){
    return `
    <h2>All TV Shows</h2>
        <div class="tvShows__grid_container">
            ${tvShows.map(tvShow => {
                return `
                <div class="tvShows__specific_tvShow"
                    <h4 class="tvShows__show_title">${tvShow.title}</h4>
                    <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                </div>
               `
        }).join("")}
        </div>

        <section class="add-comment">    
        <input class="add-commentText" type="text" placeholder="Add a Comment">
        <button class="add-comment__submit">Add a Comment</button>       
        </section>


    `
}
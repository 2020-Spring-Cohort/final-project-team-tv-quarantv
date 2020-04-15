export default function TvShowSelection(tvShow) {
    return `
        <div class="tvShow__grid_container">
            <div class="tvShowSelection__tvShow_info">
                <h2 class="tvshow__individual-title">${tvShow.title}</h2>
                <h4># of Seasons: ${tvShow.season} - Rated: ${tvShow.viewerDiscretion}</h4>
                <img class="tvShow__images" src="./img/tvshows/${tvShow.image}" alt="${tvShow.image}"></img>
                <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                </br>
            </div>
            <div class="tvShowSelection__text_area">
                <h3>Popular Reviews</h3>
                <hr>
                ${tvShow.watchlists.map(value => {
                    if(value.review != null)
                    {
                        if (value.review != "")
                        {
                            return `
                            <div class="tvShowSelection__specific_user">
                                <h4 class="users__name_btn">Review by <span style="color:blue;">${value.user.name}</span></h4>
                                <h4 class="users__show_status">Status: ${value.status } - Rating: ${value.rating}</h4>
                                <h4 class="users__show_review"><i>Review: ${value.review}</i></h4>
                                <input class="users__id" type="hidden" value="${value.userId}">
                            </div>
                            <hr>
                            `
                        }
                    }
                }).join("")}
            </div>

        </div>
        </br>
        </br>
        <section class="tvShowSelection__button_section"> 
            <button class="view-comment__submit">View Comments *Contains Spoilers!*</button>    
        </section> 
       
    `
}
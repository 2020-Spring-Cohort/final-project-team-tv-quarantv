export default function TvShowSelection(tvShow) {
    return `
        <div class="tvShow__grid_container">
            <div class="tvShowSelection__tvShow_info"
                <h2>${tvShow.title}</h2>
                <img class="tvShow__image" src="./img/tvshows/${tvShow.image}" alt="${tvShow.image}"></img>
                <h4>Number of seasons: ${tvShow.season}</h4>
                <h4>Rated: ${tvShow.viewerDiscretion}</h4>
                <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                </br>
            </div>
            <div class="tvShowSelection__text_area">
                ${tvShow.watchlists.map(value => {
                    if(value.review != null)
                    {
                        if (value.review != "")
                        {
                            return `
                            <div class="tvShowSelection__specific_user"
                                <p></p>
                                <h4 class="users__name_btn">Name: ${value.user.name}</h4>
                                <h4 class="users__show_status">Status: ${value.status}</h4>
                                <h4 class="users__show__rating">Rating: ${value.rating}</h4>
                                <h4 class="users__show_review">Review: ${value.review}</h4>
                                <input class="users__id" type="hidden" value="${value.userId}">
                            </div>
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
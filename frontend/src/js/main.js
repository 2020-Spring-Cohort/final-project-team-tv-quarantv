//import here
import apiActions from "./api/apiActions";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Users from "./components/Users";
import TvShows from "./components/TvShows";
import TvShowSelection from "./components/TvShowSelection";
import TvShowSelectionShowReviewButton from "./components/TvShowSelectionShowReviewButton";
import WatchlistGrid from "./components/WatchlistGrid";
import WatchlistAddShow from "./components/WatchlistAddShow";
import WatchlistFilter from "./components/WatchlistFilter";
import WatchlistAddShowButtonSection from "./components/WatchlistAddShowButtonSection";
import WatchlistUserInfo from "./components/WatchlistUserInfo";
import CommentsByTvShow from "./components/CommentsByTvShow";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import EditWatchlist from "./components/EditWatchlist";
import ReviewAddToWatchlist from "./components/ReviewAddToWatchlist";

export default pageBuild

function pageBuild(){
    header();    
    navbar();
    footer();
    navUsers();
    navTvShows();
    aboutUs();
    home();
}

function header() {
    const header = document.querySelector('.header');
    header.innerHTML = Header();
}
function navbar() {
    const navbar = document.querySelector('.navbar');
    navbar.innerHTML = Navbar();
}

function footer() {
    const footer = document.querySelector('.footer');
    footer.innerHTML = Footer();
}
function aboutUs() {
    const aboutUs = document.querySelector('.nav__aboutus');
    const mainDiv = document.querySelector('.main_div');
    aboutUs.addEventListener('click', function(){
        mainDiv.innerHTML = AboutUs();
    })
}
function home() {
    const homeNav = document.querySelector('.nav__home');
    const mainDiv = document.querySelector('.main_div');
    homeNav.addEventListener('click', function(){
        mainDiv.innerHTML = Home();
    })
}

// Goes to all users view from nav bar
function navUsers() {
    const usersNavButton = document.querySelector(".nav__users");
    const mainDiv = document.querySelector(".main_div");

    usersNavButton.addEventListener("click", function(){
         apiActions.getRequest("http://localhost:51880/api/User",
            users => {
                mainDiv.innerHTML = Users(users);
            }
        )
    })
  
    // Goes to specific user from user view
    mainDiv.addEventListener("click", function() {
        if(event.target.classList.contains('users__specific_user')){
            const userId = event.target.querySelector('.user__id').value;
            const watchlistGrid = document.createElement('div');
            watchlistGrid.classList.add('watchlist__upper_grid_container');
            watchlistGrid.innerHTML = WatchlistGrid();
            apiActions.getRequest(`http://localhost:51880/api/User/${userId}`,
            user => {
                mainDiv.innerHTML = WatchlistUserInfo(user);
                mainDiv.appendChild(watchlistGrid);
                apiActions.getRequest(`http://localhost:51880/api/Watchlist/User/${userId}`,
                usersWatchlist => {
                    WatchlistFilter(usersWatchlist);
                }
                )
            }
        )}
    })

    // Displays add tv show option
    mainDiv.addEventListener("click", function() {
        const watchlistAddShowSection = mainDiv.querySelector(".watchlist__add_show");
        if(event.target.classList.contains('watchlist__add_show_button')){
            apiActions.getRequest("http://localhost:51880/api/TvShow",
                tvShows => {
                    watchlistAddShowSection.innerHTML = WatchlistAddShow(tvShows);
                }
            )
        }
    })

    // Adds tv show to watchlist
    mainDiv.addEventListener("click", function(){
        if(event.target.classList.contains('watchlistaddshow__submit')){
            const userId = document.querySelector('.user__id').value;
            const watchlistAddShowButtonSection = document.querySelector(".watchlist__add_show");
            const tvShowId = event.target.parentElement.querySelector('.watchlistaddshow__show_id').value;
            const status = event.target.parentElement.querySelector('.watchlistaddshow__status_choice').value;
            
            var requestBody = {
                Status: status,
                UserId: userId,
                TvShowId: tvShowId
            }
            apiActions.postRequest(
                "http://localhost:51880/api/Watchlist",
                requestBody,
                a => {
                    const watchlistGrid = document.createElement('div');
                    watchlistGrid.classList.add('watchlist__upper_grid_container');
                    watchlistGrid.innerHTML = WatchlistGrid();
                    apiActions.getRequest(`http://localhost:51880/api/User/${userId}`,
                    user => {
                        mainDiv.innerHTML = WatchlistUserInfo(user);
                        mainDiv.appendChild(watchlistGrid);
                        apiActions.getRequest(`http://localhost:51880/api/Watchlist/User/${userId}`,
                        usersWatchlist => {
                            WatchlistFilter(usersWatchlist);
                        }
                        )
                    }
                )}
            )
            watchlistAddShowButtonSection.innerHTML = WatchlistAddShowButtonSection();
        }
    })

    // Get the edit watchlist view
    mainDiv.addEventListener("click", function(){
        if(event.target.classList.contains('edit-watchList__submit')){
            const WatchId = event.target.parentElement.querySelector('.watch__id').value;
            //console.log(WatchId);

            apiActions.getRequest(
                `http://localhost:51880/api/Watchlist/${WatchId}`,
                WatchListEdit => {
                    //console.log(WatchListEdit);
                    mainDiv.innerHTML = EditWatchlist( WatchListEdit);
                }
            )

        }
    })

    // Perform edit watchlist PUT and return watchlist view
    mainDiv.addEventListener("click", function(){
        if(event.target.classList.contains('update-watchList__submit')){
            const watchId = event.target.parentElement.querySelector('.watch__id').value;
            const userId = event.target.parentElement.querySelector('.user__id').value;
            const tvshowId = event.target.parentElement.querySelector('.tv__id').value;
            const review = event.target.parentElement.querySelector('.update-review').value;
            const rating = event.target.parentElement.querySelector('.update-rating').value;
            const status = event.target.parentElement.querySelector('.update-status').value;
        
            const WatchData = {
                Id: watchId,
                UserId: userId,
                TvShowId: tvshowId,
                Review: review,
                Rating: rating,
                Status: status
                };

                //console.log(WatchData);

      apiActions.putRequest(
        `http://localhost:51880/api/Watchlist/${watchId}`,
        WatchData,
        a => {
            const watchlistGrid = document.createElement('div');
            watchlistGrid.classList.add('watchlist__upper_grid_container');
            watchlistGrid.innerHTML = WatchlistGrid();
            apiActions.getRequest(`http://localhost:51880/api/User/${userId}`,
            user => {
                mainDiv.innerHTML = WatchlistUserInfo(user);
                mainDiv.appendChild(watchlistGrid);
                apiActions.getRequest(`http://localhost:51880/api/Watchlist/User/${userId}`,
                usersWatchlist => {
                    WatchlistFilter(usersWatchlist);
                }
                )
            }
        )}
       )
    }
    })

    // Get the add review view
    mainDiv.addEventListener("click", function(){
        if(event.target.classList.contains('addReview-watchList__submit')){
            const WatchId = event.target.parentElement.querySelector('.watch__id').value;
            //console.log(WatchId);

            apiActions.getRequest(
                `http://localhost:51880/api/Watchlist/${WatchId}`,
                ReviewAdd => {
                    //console.log(ReviewAdd);
                    mainDiv.innerHTML = ReviewAddToWatchlist(ReviewAdd);
                }
            )

        }
    })

    // Perform add review to a particular show PUT request
    mainDiv.addEventListener("click", function(){
        if(event.target.classList.contains('addReview-watchList__submit')){
            const watchId = event.target.parentElement.querySelector('.watch__id').value;
            const userId = document.querySelector('.user__id').value;
            const tvshowId = document.querySelector('.tv__id').value;
            const review = event.target.parentElement.querySelector('.update-review').value;
            const rating = event.target.parentElement.querySelector('.update-rating').value;
            const status = event.target.parentElement.querySelector('.update-status').value;

            const WatchData = {
                Id: watchId,
                UserId: userId,
                TvShowId: tvshowId,
                Review: review,
                Rating: rating,
                Status: status
                };
                //console.log(WatchData);
            apiActions.putRequest(
            `http://localhost:51880/api/Watchlist/${watchId}`,
            WatchData,
            a => {
                apiActions.getRequest(`http://localhost:51880/api/TvShow/${tvshowId}`,
                tvShow => {
                    mainDiv.innerHTML = TvShowSelection(tvShow);
                    }
                )}
            )
        }
    })

    // Delete a show from a user's watchlist
    mainDiv.addEventListener("click", function(){
        if(event.target.classList.contains('deleteReview-watchList__submit')){
            const WatchId = event.target.parentElement.querySelector('.watch__id').value;
            const WatchUserId = event.target.parentElement.querySelector('.watch__Userid').value;
            localStorage.setItem("User__Id",WatchUserId);
            //alert("UserId ="+ localStorage.User__Id);
            //console.log(WatchId);

            apiActions.deleteRequest(
                `http://localhost:51880/api/Watchlist/${WatchId}`,
            a => {
                const watchlistGrid = document.createElement('div');
                watchlistGrid.classList.add('watchlist__upper_grid_container');
                watchlistGrid.innerHTML = WatchlistGrid();
                apiActions.getRequest(`http://localhost:51880/api/User/${WatchUserId}`,
                user => {
                    mainDiv.innerHTML = WatchlistUserInfo(user);
                    mainDiv.appendChild(watchlistGrid);
                    apiActions.getRequest(`http://localhost:51880/api/Watchlist/User/${localStorage.User__Id}`,
                    usersWatchlist => {
                        WatchlistFilter(usersWatchlist);
                    }
                    )
                }
            )}
            )
        }
    })
}

// Goes to all tv shows view from nav bar
function navTvShows() {
    const tvShowsNavButton = document.querySelector(".nav__tvshows");
    const mainDiv = document.querySelector(".main_div");
    tvShowsNavButton.addEventListener("click", function(){
         apiActions.getRequest("http://localhost:51880/api/TvShow",
            tvShows => {
                mainDiv.innerHTML = TvShows(tvShows);
            }
        )
    })

    // Goes to a specific tv show from tv shows
    mainDiv.addEventListener("click", function() {
        if(event.target.classList.contains("tvShows__specific_tvShow")){
            const tvShowId = event.target.querySelector('.tvShow__id').value;
            apiActions.getRequest(`http://localhost:51880/api/TvShow/${tvShowId}`,
            tvShow => {
                mainDiv.innerHTML = TvShowSelection(tvShow);
            }
        )
        }
    })

    // Add event listener to Click comments button and load all comments
    // Also loads add more comments at the bottom of the comments
    mainDiv.addEventListener("click", function() {
        if(event.target.classList.contains("view-comment__submit")){
            const tvShowId = document.querySelector(".tvShow__id").value;
            const commentTextArea = document.querySelector(".tvShowSelection__text_area");
            const tvShowButtonSection = document.querySelector(".tvShowSelection__button_section");
            apiActions.getRequest(`http://localhost:51880/api/Comment/TvShow/${tvShowId}`,
                comments =>{
                    commentTextArea.innerHTML = CommentsByTvShow(comments);
                }
            )
            tvShowButtonSection.innerHTML = TvShowSelectionShowReviewButton();
        }
    })

    // Returns to the main tvShow view after clicking review button
    mainDiv.addEventListener("click", function() {
        if(event.target.classList.contains("tvShowSelection__reload_reviews")){
            const tvShowId = document.querySelector('.tvShow__id').value;
            apiActions.getRequest(`http://localhost:51880/api/TvShow/${tvShowId}`,
            tvShow => {
                mainDiv.innerHTML = TvShowSelection(tvShow);
            }
        )
        }
    })

    // POST request to add comment to a specific show
    mainDiv.addEventListener("click", function() {
        if(event.target.classList.contains("add-comment__submit")){
            const tvShowId = document.querySelector(".tvShow__id").value;
            const userId = "6";
            const commentText = document.querySelector(".add-commentText").value;
            const commentTextArea = document.querySelector(".tvShowSelection__text_area");
            var requestBody = {
                UserId: userId,
                TvShowId: tvShowId,
                CommentText: commentText
            }
            console.log(requestBody);
            apiActions.postRequest(`http://localhost:51880/api/Comment/`,
                requestBody,
                a => {
                    apiActions.getRequest(`http://localhost:51880/api/Comment/TvShow/${tvShowId}`,
                    comments => {
                    commentTextArea.innerHTML = CommentsByTvShow(comments);
                })
                }
            )
        }
    })
}
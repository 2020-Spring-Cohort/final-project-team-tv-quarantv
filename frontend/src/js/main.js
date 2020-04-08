//import here
import apiActions from "./api/apiActions";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Users from "./components/Users";
import TvShows from "./components/TvShows";
import TvShowSelection from "./components/TvShowSelection";
import Watchlist from "./components/Watchlist";
import WatchlistAddShow from "./components/WatchlistAddShow";
import WatchlistByUser from "./components/WatchlistByUser";
import WatchlistAddShowButtonSection from "./components/WatchlistAddShowButtonSection";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";


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

/// GOES TO ALL USERS VIEW FROM NAV BAR

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
  
/// GOES TO SPECIFIC USER FROM USERS VIEW
    mainDiv.addEventListener("click", function() {
        if(event.target.classList.contains('users__specific_user')){
            const userId = event.target.querySelector('.user__id').value;
            
            apiActions.getRequest(`http://localhost:51880/api/User/${userId}`,
            user => {
                mainDiv.innerHTML = Watchlist(user);
            }
        )}
    })

/// Get watchlist by a user's ID
    mainDiv.addEventListener("click", function(){
        if(event.target.classList.contains("watchlist__show_watchlist_btn")){
            const userId = document.querySelector('.user__id').value;
            const watchlistMainSection = document.querySelector(".watchlist__main_section");
            apiActions.getRequest(`http://localhost:51880/api/Watchlist/User/${userId}`,
                userWatchlist => {
                    watchlistMainSection.innerHTML = WatchlistByUser(userWatchlist);
                }
            )
        }
    })

/// DISPLAYS ADD TV SHOW OPTION
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
/// ADDS TV SHOW TO WATCHLIST
    mainDiv.addEventListener("click", function(){
        if(event.target.classList.contains('watchlistaddshow__submit')){
            const userId = document.querySelector('.user__id').value;
            const watchlistMainSection = document.querySelector(".watchlist__main_section");
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
                    apiActions.getRequest(`http://localhost:51880/api/Watchlist/User/${userId}`,
                    usersWatchlist => {
                        watchlistMainSection.innerHTML = WatchlistByUser(usersWatchlist);
                    }
                )}
            )
            watchlistAddShowButtonSection.innerHTML = WatchlistAddShowButtonSection();
        }
    })
}

/// GOES TO ALL TV SHOWS VIEW FROM NAV BAR
function navTvShows() {
    const tvShowsNavButton = document.querySelector(".nav__tvshows");
    const mainDiv = document.querySelector(".main_div");

    tvShowsNavButton.addEventListener("click", function(){
         apiActions.getRequest("http://localhost:51880/api/TvShow",
            tvShows => {
                console.log(tvShows);
                mainDiv.innerHTML = TvShows(tvShows);
            }
        )
    })

/// GOES TO SPECIFIC TV SHOW FROM ALL TV SHOWS VIEW
 
   mainDiv.addEventListener('click', function(){
        if(event.target.classList.contains('tvShows__specific_tvShow')){
            const tvShowId = event.target.querySelector('.tvShow__id').value;
            console.log(tvShowId);

            apiActions.getRequest(`http://localhost:51880/api/TvShow/${tvShowId}`,
            tvShow => {
                console.log(tvShow);
                mainDiv.innerHTML = TvShowSelection(tvShow);
            }
        )
        }
    })
}

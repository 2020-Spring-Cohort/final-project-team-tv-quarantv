//import here
import apiActions from "./api/apiActions";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Users from "./components/Users";
import TvShows from "./components/TvShows";
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

function navUsers() {
    const usersNavButton = document.querySelector(".nav__users");
    const mainDiv = document.querySelector(".main_div");

    usersNavButton.addEventListener("click", function(){
         apiActions.getRequest("https://localhost:44313/api/User",
            users => {
                console.log(users);
                mainDiv.innerHTML = Users(users);
            }
        )
    })
}

function navTvShows() {
    const tvShowsNavButton = document.querySelector(".nav__tvshows");
    const mainDiv = document.querySelector(".main_div");

    tvShowsNavButton.addEventListener("click", function(){
         apiActions.getRequest("https://localhost:44313/api/TvShow",
            tvShows => {
                console.log(tvShows);
                mainDiv.innerHTML = TvShows(tvShows);
            }
        )
    })
}


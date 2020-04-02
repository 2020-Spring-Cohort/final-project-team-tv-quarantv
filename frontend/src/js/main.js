//import here
import apiActions from "./api/apiActions";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default pageBuild

function pageBuild(){
    header();
    navbar();
    footer();
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
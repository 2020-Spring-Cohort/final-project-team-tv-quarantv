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
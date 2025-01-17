let menu = document.querySelector(".menuicon");

menu.onclick = () => {
    menu.classList.toggle("move");
};

window.onscroll = () => {
    menu.classList.remove("move");
}

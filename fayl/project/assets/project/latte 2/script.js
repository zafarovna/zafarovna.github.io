var nav = document.getElementById("nav");

if (window.innerWidth <= 768) {
    nav.style.opacity = "0"
    nav.style.top = -nav.offsetHeight + "px";
}

function open_btn() {
    nav.style.opacity = "1"
    nav.style.top = 0;
}

function close_btn() {
    nav.style.opacity = "0"
    nav.style.top = -nav.offsetHeight + "px";
}
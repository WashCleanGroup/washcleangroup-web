// header
function serviceslist() {
    const menu = document.getElementById("services-list");
    menu.classList.toggle("show");
}
document.addEventListener("click", function(e) {
    const menu = document.getElementById("services-list");
    const button = document.getElementById("services-toggle");
    if (!menu.contains(e.target) && !button.contains(e.target)) {
        menu.classList.remove("show");
    }
});
document.addEventListener("scroll", function(e) {
    const navbar = document.getElementById("navbar");
    const menu = document.getElementById("services-list");
    if (window.scrollY > 200) {
        navbar.classList.add("notransparent");
        menu.classList.add("notransparent");
    } else {
        navbar.classList.remove("notransparent");
        menu.classList.remove("notransparent");
    }
});
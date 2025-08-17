// navbar
fetch("../../../archivos-principales/navbar.html")
.then(res => res.text())
.then(data => {
    document.getElementById("navbar-container").innerHTML = data;
});
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
    if (window.scrollY > 150) {
        navbar.classList.add("notransparent");
        menu.classList.add("notransparent");
    } else {
        navbar.classList.remove("notransparent");
        menu.classList.remove("notransparent");
    }
});
// footer
fetch("../../../archivos-principales/footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer-container").innerHTML = data;
});



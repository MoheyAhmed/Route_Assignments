window.addEventListener("scroll", function () {
    var scroll = this.scrollY;
    if (scroll > 300) {
        document.getElementById("nav-scroll").classList.add("second_nav");
    } else {
        document.getElementById("nav-scroll").classList.remove("second_nav");
    }
});
window.addEventListener("load", function () {
    $(".loading").addClass("end").fadeOut(1000);
});
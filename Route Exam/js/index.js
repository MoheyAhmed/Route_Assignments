window.addEventListener("scroll", function () {
    var scroll = this.scrollY;
    if (scroll > 300) {
        document.getElementById("nav-scroll").classList.add("second_nav");
    } else {
        document.getElementById("nav-scroll").classList.remove("second_nav");
    }
});


// window.addEventListener("scroll", function (event) {
//     var scroll = this.scrollY;
//     if (scroll > 150) {
//         this.document.getElementById("up").style.display = "block";
//     } else {
//         this.document.getElementById("up").style.display = "none";
//     }
// });
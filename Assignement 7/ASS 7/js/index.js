
$("document").ready(function () {

    // -------------------------------------------------------

    window.addEventListener("scroll", function () {
        var scroll = this.scrollY;
        if (scroll > 250) {
            document.getElementById("second_nav").classList.add("second_nav");
        } else {
            document.getElementById("second_nav").classList.remove("second_nav");
        }
    });


    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        if (scroll > 150) {
            this.document.getElementById("top").style.display = "block";
        } else {
            this.document.getElementById("top").style.display = "none";
        }
    });

    document.getElementById("top").addEventListener("click",function(){
    window.scroll({
        top:0,
        left:0,
        behavior: 'smooth',
    })
})

})



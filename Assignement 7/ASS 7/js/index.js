
$("document").ready(function () {

    // var typed= new TypeIt("#element", {
    //     strings: ["<span>Front End Developer</span>", "<span>Back End Developer</span>"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     backDelay: 1000,
    //     waitUntilVisible: true,
    //     loop: true,
    // }).go();

    new TypeIt("#element", {
        lifeLike: false,
        loop: true,
        speed: 10,
        backSpeed: 500,
        speed: 45
    })
        .delete(9, { instant: true })
        .type("D")
        .pause(272)
        .type("e")
        .pause(677)
        .type("s")
        .pause(222)
        .type("i")
        .pause(514)
        .type("g")
        .pause(238)
        .type("n")
        .pause(291)
        .type("e")
        .pause(131)
        .type("r")
        .pause(1250)
        .delete(1)
        .pause(291)
        .delete(1)
        .pause(220)
        .delete(1)
        .pause(327)
        .delete(1)
        .pause(247)
        .delete(1)
        .pause(229)
        .delete(1)
        .pause(220)
        .delete(1)
        .pause(525)
        .delete(1)
        .pause(793)
        .type("D")
        .pause(336)
        .type("e")
        .pause(686)
        .type("v")
        .pause(184)
        .type("e")
        .pause(347)
        .type("l")
        .pause(327)
        .type("o")
        .pause(257)
        .type("p")
        .pause(252)
        .type("e")
        .pause(409)
        .type("r")
        .pause(1089)
        .delete(1)
        .pause(212)
        .delete(1)
        .pause(247)
        .delete(1)
        .pause(238)
        .delete(1)
        .pause(246)
        .delete(1)
        .pause(238)
        .delete(1)
        .pause(201)
        .delete(1)
        .pause(184)
        .delete(1)
        .pause(167)
        .delete(1)
        .pause(1036)
        .type("F")
        .pause(255)
        .type("r")
        .pause(229)
        .type("e")
        .pause(192)
        .type("e")
        .pause(365)
        .type("l")
        .pause(235)
        .type("a")
        .pause(355)
        .type("n")
        .pause(471)
        .type("c")
        .pause(283)
        .type("e")
        .pause(211)
        .type("r")
        .pause(751)
        .delete(1)
        .pause(175)
        .delete(1)
        .pause(193)
        .delete(1)
        .pause(183)
        .delete(1)
        .pause(184)
        .delete(1)
        .pause(193)
        .delete(1)
        .pause(175)
        .delete(1)
        .pause(184)
        .delete(1)
        .pause(184)
        .delete(1)
        .pause(176)
        .delete(1)
        .pause(866)
        .type("P")
        .pause(439)
        .type("h")
        .pause(444)
        .type("o")
        .pause(513)
        .type("t")
        .pause(168)
        .type("o")
        .pause(549)
        .type("g")
        .pause(784)
        .type("r")
        .pause(361)
        .type("a")
        .pause(402)
        .type("p")
        .pause(325)
        .type("h")
        .pause(280)
        .type("e")
        .pause(150)
        .type("r")
        .pause(795)
        .delete(1)
        .pause(166)
        .delete(1)
        .pause(192)
        .delete(1)
        .pause(192)
        .delete(1)
        .pause(204)
        .delete(1)
        .pause(211)
        .delete(1)
        .pause(212)
        .delete(1)
        .pause(166)
        .delete(1)
        .pause(201)
        .delete(1)
        .pause(158)
        .delete(1)
        .pause(166)
        .delete(1)
        .pause(157)
        .delete(1)
        .go();

    // -------------------------------------------------------

    window.addEventListener("scroll", function () {
        var scroll = this.scrollY;
        if (scroll > 250) {
            document.getElementById("second_nav").classList.add("second_nav");
            // document.getElementById("dropdown").style.right = "120px"
            // document.getElementById("dropdown").style.top = "55px"
        } else {
            document.getElementById("second_nav").classList.remove("second_nav");
            // document.getElementById("dropdown").style.right = "0px"
            // document.getElementById("dropdown").style.top = "70px"
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



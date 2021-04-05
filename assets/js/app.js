$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });



    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});

const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load",function(){

 showPopup();
 // setTimeout(function(){
 //   loginPopup.classList.add("show");
 // },5000)

})

function showPopup(){
      const timeLimit = 1 // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
}


close.addEventListener("click",function(){
  loginPopup.classList.remove("show");
})

$("#news-slider2").owlCarousel({
    items:3,
    itemsDesktop:[1199,2],
    itemsDesktopSmall:[980,2],
    itemsMobile:[600,1],
    pagination:false,
    navigationText:false,
    autoPlay:true
});

function $_GET(key) {
    let p = window.location.search;
    p = p.match(new RegExp(key + "=([^&=]+)"));
    return p ? Boolean(p[1]) : false;
}

function color() {
    let head  = document.getElementsByTagName("head")[0];
    let link  = document.createElement("link");
    link.id   = "css";
    link.rel  = "stylesheet";
    link.type = "text/css";
    link.media = "all";
    if($_GET("white")) {
        link.href = "./white.css";
    } else {
        link.href = "./black.css";        
    }
    head.appendChild(link);
}

var cpCreditsUrl = "https://codepen.io/PickJBennett/details/BdbrMW";
var cpCreditsTitle = "🌈 Sexy Animated Rainbow Waves Header";
var cpCreditsTwitter = document.getElementById("js-tweet-this");
cpCreditsTwitter.href = "https://twitter.com/intent/tweet?text=" + encodeURI(cpCreditsTitle) + "&url=" + encodeURI(cpCreditsUrl) + "&via=PickJBennett&related=PickJBennett,CiaoFileManager";
cpCreditsTwitter.innerHTML += "Tweet This Pen";
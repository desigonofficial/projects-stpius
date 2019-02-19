$(document).ready(function(){

    // Nav Bar Ham Menu Selector
    $(".ham-menu").click( function() {
        $(this).toggleClass("close");
        
        var navCheck = $(".nav-wrapper").css("display");
    
        if(navCheck === "none"){
            $(".nav-wrapper").css("display", "block");
        }
        else{
            $(".nav-wrapper").css("display", "none");
        }
        
    });

    // Hero Slider
    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });

});
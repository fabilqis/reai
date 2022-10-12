
$(document).ready(function ($) { 
    "use strict";
    // $(".scroll-Demo").click(function() {
    //     $('html,body').animate({
    //         scrollTop: $(".request-forms").offset().top}, 2000,
    //         'swing');
    // });

    function processFormContact( e ){
        var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (regex.test(forms.value) == false) {
            alert("Please fill valid email")
            return false;
        } else {
        $.ajax({
            url: '/api/website/contactus',
            dataType: 'text',
            type: 'post',
            contentType: 'application/x-www-form-urlencoded',
            data: $(this).serialize(),
            success: function( data, textStatus, jQxhr ){
                swal("Good job!", "Your Request Demo is Send", "success");
                $(".request-form")[0].reset();
                e.target.value = ""
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
        e.preventDefault();    
    }
    }

    $('.request-form').submit( processFormContact );

    /*-----------------------------------*/ 

    function processFormSubscription( e ){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(newsletter.value) == false) {
            $(this).popover({
                content: "Please fill valid email",
                placement: "bottom"
             }).popover("show");
            return false;
        } else {
            $(".popover:visible").popover( "destroy" )
            $.ajax({
                url: '/api/website/subscription',
                dataType: 'text',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded',
                data: $(this).serialize(),
                success: function( data, textStatus, jQxhr ){
                    swal("Thank You!", "You subscribe us, Please check your inbox.", "success");
                    $("#subscribeform")[0].reset();
                    e.target.value = ""
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });

            e.preventDefault();
    }
    }
    $('#subscribeform').submit( processFormSubscription );

    // Preloader
    $(window).load(function () { // makes sure the whole site is loaded
        $('.page-preloader spinner').fadeOut(); // will first fade out the loading animation
        $('.page-preloader').delay(350).fadeOut('slow');
        // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    })
    
    // Animated typing text

    $("#talk-to-bot").click(function(){
        
        window.location.href = "/api/website/#cwidget"+Math.random()
    })

    $(".animated-text").typed({
        strings: [
            "are about re-imagining, re-designing and re-experiencing the future",
            "want to make work less tedious, more interesting",
            "are looking to improve people's lives through AI",
        ],
        typeSpeed: 10,
        loop: true,
    });

    // PopUp Effect

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe', 
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $.extend(true, $.magnificPopup.defaults, {
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });

    // Owl Clients

    $("#owl-clients").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

    // Owl Testimonils

    $("#owl-testimonials").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 600,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "goDown",
        autoPlay: true
    });
    
});

$(function(){

    'use strict';

    $(window).on('load',function(){
        $('.lh-loader').css({'display': 'none'});
    });

    //   profile

$('.show-account').on('click', function (){

    $(this).addClass('active').siblings().removeClass('active');

    $('.content-list > div').hide();

    $($(this).data('content')).fadeIn();
});


$('.close-shop-whish').click(function (){

    $($(this).data('close')).fadeOut();
});


$('.featured-list li').click(function (){

    $(this).addClass('active').siblings().removeClass("active");

    $('.list-support > div').hide();

    $($(this).data('list')).fadeIn();
});


$('.ticket-list li').click(function (){

    $(this).addClass('active').siblings().removeClass("active");

    $('.list-ticket-support > div').hide();

    $($(this).data('ticket')).fadeIn();
});


    
    
    // blogs 

    $(".owl-carousel.blog-slider").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 4,
        nav: false,
        loop: true,
        dots: true,
        // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>",],
        responsive: {
            0 : {
                items: 1
            },
            485 : {
                items: 1
            },
            728 : {
                items: 3
            },
            1200 : {
                items: 4
            }
        }
    });

     // city 

     $(".owl-carousel.city-slider").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 4,
        nav: false,
        loop: true,
        dots: true,
        responsive: {
            0 : {
                items: 1
            },
            485 : {
                items: 1
            },
            728 : {
                items: 3
            },
            1200 : {
                items: 4
            }
        }
    });

    // testimonial 

         $(".owl-carousel.testimonial-slider").owlCarousel({
            autoplay: true,
            autoplayhoverpause: true,
            autoplaytimeout: 100,
            items: 3,
            nav: false,
            loop: true,
            dots: true,
            responsive: {
                0 : {
                    items: 1
                },
                485 : {
                    items: 1
                },
                728 : {
                    items: 3
                },
                1200 : {
                    items: 3
                }
            }
        });


      // scroll to top

$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('.back-to-top').fadeIn(400);
    }else{
        $('.back-to-top').fadeOut(400);
    }
});
$('.back-to-top').click(function () {
    
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


// faqs

$('.btn-faq').click(function(){
    $(this).toggleClass('active');
});

// tabs describtion

$('.tabs-list li').on('click', function (){

    $(this).addClass('show').siblings().removeClass('show');

    $('.content-list > div').hide();

    $($(this).data('content')).fadeIn();
});



// tabs describtion

$('.tabs-years li').on('click', function (){

    $(this).addClass('show').siblings().removeClass('show');

    $('.year-list > div').hide();

    $($(this).data('year')).fadeIn();
});

// featured-properties

$(".featured-properties .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 3,
    nav: false,
    loop: true,
    dots: true,
    responsive: {
        0 : {
            items: 1
        },
        485 : {
            items: 2
        },
        728 : {
            items: 3
        },
        1200 : {
            items: 3
        }
    }
});

$('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.small-slider'
  });
  $('.small-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.main-slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });



});
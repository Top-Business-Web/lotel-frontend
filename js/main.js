$(function(){

    'use strict';

    $(window).on('load',function(){
        $('.lh-loader').css({'display': 'none'});
    });

    $(".view").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        iframe: {
          patterns: {
            youtube: {
              index: "youtube.com",
              id: "v=",
              src: "https://www.youtube.com/embed/%id%",
            },
          },
          srcAction: "iframe_src",
        },
        fixedContentPos: false,
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

// heart button

$('.button-heart').click(function(){
    $(this).toggleClass('active');
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


      // testimonial room

      $(".owl-carousel.testimonial-slider-room").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 2,
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
                items: 2
            },
            1200 : {
                items: 2
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


// add to room

const maxQuantity = 10; // الحد الأقصى للكمية
        
$('.add-to-cart').click(function () {
  $(this).hide(); // إخفاء زر "إضافة للسلة"
  $(this).siblings('.quantity-controls').show(); // إظهار أزرار التحكم بالكمية
});

$('.increase').click(function () {
  let quantityElement = $(this).siblings('.quantity');
  let currentQuantity = parseInt(quantityElement.text());
  
  if (currentQuantity < maxQuantity) { // تحقق من الحد الأقصى
    quantityElement.text(currentQuantity + 1); // زيادة الكمية
  }
});

$('.decrease').click(function () {
  let quantityElement = $(this).siblings('.quantity');
  let currentQuantity = parseInt(quantityElement.text());
  
  if (currentQuantity > 1) {
    quantityElement.text(currentQuantity - 1); // تقليل الكمية
  } else {
    $(this).parent().hide(); // إخفاء أزرار التحكم عند الوصول إلى 0
    $(this).parent().siblings('.add-to-cart').show(); // إظهار زر "إضافة للسلة"
  }
});
  


// images-room

$(".images-room .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 3,
    nav: false,
    loop: false,
    dots: false,
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

// images-hotel

$(".images-hotel .owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 4,
    nav: false,
    loop: false,
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
            items: 4
        }
    }
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
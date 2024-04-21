
(function($) {
    'use strict';
    
	// Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    });
    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });
    //Header Search
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }
    // service Active
    $('.testimonial_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        center: false,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
             600: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1400: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
    // ico Active
    $('.ico_list').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 10000,
        dots: false,
        center: false,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
             600: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            },
            1400: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })
    // team Active
    $('.team_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        center: false,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
             600: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1400: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })
    // process Active
    $('.process-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        center: false,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
             600: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1400: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })
     // brand Active
    $('.brand-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        center: false,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
             600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            },
            1000: {
                items: 5
            },
            1400: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })
    // brand Active
    $('.road-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        center: false,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
             600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            },
            1400: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    })
    /*---------------------
    barfiller js 
    --------------------- */
    $(document).ready(function(){
    $('#bar1').barfiller({ duration: 7000 });
    $('#bar2').barfiller({ duration: 7000 });
    $('#bar3').barfiller({ duration: 7000 });
    $('#bar4').barfiller({ duration: 7000 });
    $('#bar5').barfiller({ duration: 7000 });
    $('#bar6').barfiller({ duration: 7000 });
    });

     /*// counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 5000,
    });
	*/
    / Loder  /
    $(function () {
      $('body').addClass('loaded');
    });
    
	/*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    (function ($) {
  $(".accordion > li:eq(0) a").addClass("active").next().slideDown();

  $(".accordion a").click(function (j) {
    var dropDown = $(this).closest("li").find("p");

    $(this).closest(".accordion").find("p").not(dropDown).slideUp();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).closest(".accordion").find("a.active").removeClass("active");
      $(this).addClass("active");
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
  });
})(jQuery);
	

      /* if in tab mode */
    $("ul.tabs li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });

    // SRCOLL BUTTON
     $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });

	
	 // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });



    jQuery(document).ready(function($) {
                "use strict";

                $(".accordion > li:eq(0) a").addClass("active").next().slideDown();

                $(".accordion a").click(function (j) {
                    var dropDown = $(this).closest("li").find("p");

                    $(this).closest(".accordion").find("p").not(dropDown).slideUp();

                    if ($(this).hasClass("active")) {
                        $(this).removeClass("active");
                    } else {
                        $(this).closest(".accordion").find("a.active").removeClass("active");
                        $(this).addClass("active");
                    }

                    dropDown.stop(false, true).slideToggle();

                    j.preventDefault();
                });

                // Tab Script

                $(".tab_content").hide();
                $(".tab_content:first").show();

                / if in tab mode /
                $("ul.tabs li").click(function() {

                    $(".tab_content").hide();
                    var activeTab = $(this).attr("rel"); 
                    $("#"+activeTab).fadeIn();    

                    $("ul.tabs li").removeClass("active");
                    $(this).addClass("active");

                    $(".tab_drawer_heading").removeClass("d_active");
                    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

                });
                / if in drawer mode /
                $(".tab_drawer_heading").click(function() {

                    $(".tab_content").hide();
                    var d_activeTab = $(this).attr("rel"); 
                    $("#"+d_activeTab).fadeIn();

                    $(".tab_drawer_heading").removeClass("d_active");
                    $(this).addClass("d_active");

                    $("ul.tabs li").removeClass("active");
                    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
                });

            });

    
	/*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })
})(jQuery);
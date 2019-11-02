/*global $, window, WOW*/
$(function () {
    'use strict';
    //Nicescroll
     $("body").niceScroll({
         
         cursorcolor: "#ec1c23",
         cursorwidth: "11px",
         cursorborder: "4px solid #08526d",
         cursorborderradius: "10px",
         scrollspeed: 100,
         zindex: 999,
         cursorminheight: 100
         
     });
    
    //Adjust Slider Height
    var winHeight = $(window).height(),
        upperBarHeight = $('.upper-bar').innerHeight(),
        navHeight = $('.navbar').innerHeight();
    
    $('.slider, .carousel-item').height(winHeight - (upperBarHeight + navHeight));
    
    //Featured Work Shuffle
    $('.featured-work ul li').on('click', function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        
        if ($(this).data('class') === 'all') {
            
            $('.shuffle-images .shuffle').css('opacity', 1);
            
        } else {
            
            $('.shuffle-images .shuffle').css('opacity', '0.08');
            
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
    
    //Start Count.js Plugin
    
            var wow = new WOW(
            {
                callback: function () {
                    
                    $('.count').each(function () {
        
                        $(this).countTo({

                            from: 0,
                            to: $(this).data('count'),
                            speed: 2000,
                            refreshInterval: 120

                        });
                    });
                }
            }
        );
    
    wow.init();
    
    //Smooth Scroll
    $('a[href^="#"]').click(function (e) {
        
        e.preventDefault();
        
        var hash = $(this.hash);
        
        $('html, body').animate({
            
            scrollTop: hash.offset().top - 50
            
        }, 1000);
        
    });
            
              
            
    
});
jQuery('.list li').on('click',function(){jQuery('li.current').removeClass('current');jQuery(this).addClass('current');});jQuery('.responsive').slick({dots:true,infinite:false,speed:300,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:true,dots:true}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});jQuery('.box_slider').slick({dots:false,infinite:false,speed:300,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:true,dots:false}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});jQuery(document).ready(function(){jQuery('.apply_btn').click(function(){jQuery('.career_job').modal('hide');});jQuery(".mob_toggle_btn").click(function(){jQuery(".header-nav-cls").addClass('active');jQuery(".overlay-mobile").addClass('active');jQuery("body").addClass('active');});jQuery(".nav-close-mobile a, .overlay-mobile").click(function(){jQuery(".header-nav-cls").removeClass('active');jQuery(".overlay-mobile").removeClass('active');jQuery("body").removeClass('active');});if(jQuery(window).width()<1250){jQuery(".header_wrap .header_menu>li> .sub-menu-block ").before('<span class="icon"> </span>');jQuery(".header_wrap .header_menu>li .icon").on('click',function(e){jQuery(this).parent().children('.sub-menu-block').slideToggle(500);jQuery(this).parent().siblings('li').find('.sub-menu-block').slideUp(500);jQuery(this).parent().siblings('li').removeClass('active');jQuery(this).parent().toggleClass('active');e.stopPropagation();});}else{}});jQuery(function(){var loc=window.location.href;if(/hire-angularjs-developers/.test(loc)){jQuery('body').addClass('angular-page');}});$(window).scroll(function(){if($(this).scrollTop()>1){$('header').addClass("sticky");}else{$('header').removeClass("sticky");}});$('.count').each(function(){$(this).prop('Counter',0).animate({Counter:$(this).text()},{duration:4000,easing:'swing',step:function(now){$(this).text(Math.ceil(now));}});});$(function(){$('.left_icons a').click(function(e){e.preventDefault();e.stopPropagation();higlight=$(this).attr('href');select_para=$(higlight);$('.list_box_survay li').removeClass('grey-bg');$(select_para).toggleClass('grey-bg');$('.left_icons a').removeClass('active-tab');$(this).addClass('active-tab');});});$('.dropdown').on('mouseenter ',function(event){if(!$('.navbar-toggle').is(':visible')){$('.dropdown-toggle').trigger("show.bs.dropdown")}});$('.dropdown').on('mouseleave ',function(event){if(!$('.navbar-toggle').is(':visible')){$('.dropdown-toggle').trigger("hide.bs.dropdown")}});$('.banner_slider').slick({dots:true,infinite:true,arrows:true,speed:300,fade:true,autoplay:true,slidesToShow:1,slidesToScroll:1,prevArrow:"<img class='a-left prev slick-prev' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/t_arrow_left.png'>",nextArrow:"<img class='a-right next slick-next' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/t_arrow_right.png'>",adaptiveHeight:true,customPaging:function(slider,i){var thumb=$(slider.$slides[i]).data();return'<a class="dot">'+`0${i+1}`+'</a>';},});$('.banner_slider-2').slick({dots:true,infinite:true,arrows:true,speed:300,dots:false,autoplay:true,slidesToShow:1,slidesToScroll:1,prevArrow:"<img class='a-left prev slick-prev' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/arrow_blue_left.png'>",nextArrow:"<img class='a-right next slick-next' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/arrow_blue_right.png'>",adaptiveHeight:true,});$('.tech_slider_main').slick({dots:false,infinite:true,arrows:true,speed:300,slidesToShow:4,prevArrow:"<img class='a-left prev slick-prev' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/t_arrow_left.png'>",nextArrow:"<img class='a-right next slick-next' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/t_arrow_right.png'>",responsive:[{breakpoint:1800,settings:{slidesToShow:4,slidesToScroll:1,}},{breakpoint:1250,settings:{slidesToShow:2,slidesToScroll:1,}},{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.tech_slider_main-2').slick({dots:false,infinite:true,arrows:true,speed:300,slidesToShow:5,prevArrow:"<img class='a-left prev slick-prev' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/t_arrow_left.png'>",nextArrow:"<img class='a-right next slick-next' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/t_arrow_right.png'>",responsive:[{breakpoint:1800,settings:{slidesToShow:4,slidesToScroll:1,}},{breakpoint:1250,settings:{slidesToShow:2,slidesToScroll:1,}},{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.tech_slider_main-3').slick({dots:false,infinite:true,arrows:true,speed:300,slidesToShow:1,prevArrow:"<img class='a-left prev slick-prev' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/t_arrow_left-1.png'>",nextArrow:"<img class='a-right next slick-next' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/t_arrow_right-1.png'>",responsive:[{breakpoint:1800,settings:{slidesToShow:1,slidesToScroll:1,}},{breakpoint:1250,settings:{slidesToShow:1,slidesToScroll:1,}},{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.center').slick({dots:true,infinite:true,speed:500,fade:true,cssEase:'linear',autoplay:true,autoplaySpeed:5000,prevArrow:"<img class='a-left prev slick-prev' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/t_arrow_left.png'>",nextArrow:"<img class='a-right next slick-next' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/t_arrow_right.png'>",});$('.project_wrapper').slick({dots:false,infinite:true,arrows:true,speed:300,fade:true,autoplay:true,slidesToShow:1,prevArrow:"<img class='a-left prev slick-prev' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/arrow_blue_left.png'>",nextArrow:"<img class='a-right next slick-next' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/arrow_blue_right.png'>"});$('.testimonial_slider').slick({dots:false,infinite:true,arrows:true,speed:300,asNavFor:'.slider_profile',slidesToShow:1,variableWidth:true,prevArrow:"<img class='a-left prev slick-prev' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/arrow_white_left.png'>",nextArrow:"<img class='a-right next slick-next' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/arrow_black_right.png'>",responsive:[{breakpoint:767,settings:{slidesToShow:1,variableWidth:false,slidesToScroll:1}}]});$('.slider_profile').slick({asNavFor:'.testimonial_slider',dots:false,arrows:false,focusOnSelect:true,infinite:true,accessibility:false,responsive:[{breakpoint:1250,settings:{slidesToShow:1,slidesToScroll:1}}]});$(document).ready(function(){$('.award_slide').slick({slidesToShow:4,slidesToScroll:1,autoplay:false,infinite:true,arrows:true,autoplaySpeed:2000,responsive:[{breakpoint:1800,settings:{slidesToShow:4,slidesToScroll:1,}},{breakpoint:1250,settings:{slidesToShow:2,slidesToScroll:1,}},{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]});});$('.service_slider').slick({dots:false,infinite:true,arrows:true,speed:300,autoplay:true,slidesToShow:3,prevArrow:"<img class='a-left prev slick-prev' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/t_arrow_left.png'>",nextArrow:"<img class='a-right next slick-next' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/t_arrow_right.png'>",responsive:[{breakpoint:1800,settings:{slidesToShow:3,slidesToScroll:1,}},{breakpoint:1250,settings:{slidesToShow:2,slidesToScroll:1,}},{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.service_slides').slick({dots:false,infinite:true,arrows:true,speed:300,autoplay:true,slidesToShow:3,prevArrow:"<img class='a-left prev slick-prev' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/arrow_blue_left.png'>",nextArrow:"<img class='a-right next slick-next' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/arrow_blue_right.png'>",responsive:[{breakpoint:1800,settings:{slidesToShow:3,slidesToScroll:1,}},{breakpoint:1250,settings:{slidesToShow:2,slidesToScroll:1,}},{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.blog-slider').slick({dots:true,infinite:true,arrows:true,speed:300,dots:false,autoplay:true,slidesToShow:2,slidesToScroll:2,prevArrow:"<img class='a-left prev slick-prev' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/arrow_blue_left.png'>",nextArrow:"<img class='a-right next slick-next' src='https://ongraph.com/wp-content/themes/ongraph/assets/images/arrow_blue_right.png'>",adaptiveHeight:true,responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]});$('.faq_container li .head').click(function(){$(this).parent('li').toggleClass('active').siblings('li').removeClass('active');if($('.faq-content-wrap').is(':visible')){$(".faq-content-wrap").slideUp(300);}
if($(this).next(".faq-content-wrap").is(':visible')){$(this).next(".faq-content-wrap").slideUp(300);}else{$(this).next(".faq-content-wrap").slideDown(300);}});$('.get-btn a').click(function(){jQuery(".hidden-slider").addClass("active");});$('.ply-icon-hidden a').click(function(){jQuery(".hidden-slider").removeClass("active");});$('.ply-icon a').click(function(){jQuery(".ncontact_img .video").addClass("active");});particlesJS('particles',{"particles":{"number":{"value":120,"density":{"enable":true,"value_area":1121.687017273981}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":9},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":1,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":208.31330320802505,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});particlesJS('particles-btm',{"particles":{"number":{"value":120,"density":{"enable":true,"value_area":1121.687017273981}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":9},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":1,"random":true,"anim":{"enable":false,"speed":20,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":208.31330320802505,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
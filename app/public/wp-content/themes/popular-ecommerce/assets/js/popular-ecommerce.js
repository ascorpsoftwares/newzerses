jQuery(document).ready(function() {
    "use strict";

    jQuery('ul.sub-menu').wrap('<div class="wrap-popup column1" />').addClass("nav").wrap('<div class="popup" />');
    jQuery('ul.children').wrap('<div class="wrap-popup column1" />').addClass("nav").wrap('<div class="popup" />');
    


    //Nav menu Call
    jQuery('[data-sidenav]').sidenav();

    //Nav Menu Section
    jQuery('ul.sub-menu').unwrap('<div class="wrap-popup column1" />').unwrap('<div class="popup" />');
    jQuery('ul.children').unwrap('<div class="wrap-popup column1" />').unwrap('<div class="popup" />');
    
    //Add the Wrapper Section
    jQuery('ul>li.menu-item-has-children>a').append('<span class="sidenav-dropdown-icon show" data-sidenav-dropdown-icon><i class="fa fa-angle-down"></i></span><span class="sidenav-dropdown-icon" data-sidenav-dropdown-icon><i class="fa fa-angle-up"></i></span>').attr('data-sidenav-dropdown-toggle', '');
    jQuery('ul.sidenav-dropdown').attr('data-sidenav-dropdown', '');

    
    //Add Button Class woocommerce
    jQuery('.add-to-cart-mt').addClass('woocommerce');


});

// product-slider
    jQuery(".product-slider").show().owlCarousel({
      items : 1,
      itemsCustom : false,
      itemsDesktop : [1199, 1],
      itemsDesktopSmall : [979, 1],
      itemsTablet : [768, 1],
      itemsTabletSmall : true,
      itemsMobile : [480, 1],
      autoPlay : true,
      pagination : true
    });
    
// instagram-feed
    jQuery(".instagram-feed").show().owlCarousel({
      items : 6,
      itemsCustom : false,
      itemsDesktop : [1199, 6],
      itemsDesktopSmall : [979, 4],
      itemsTablet : [768, 2],
      itemsTabletSmall : true,
      itemsMobile : [480, 1],
      autoPlay : true,
      pagination : false
    });


    /*Dropdown Menu Section Js */
  jQuery(document).ready(function () {
    /*Add top Cart */
    jQuery(".mini-cart-link").click(function(e){e.preventDefault()}); 

    jQuery('.menu-item-has-children').hover(function () {
        jQuery(this).find('.sub-menu').first().addClass('menu-hover');
    }, function () {
        jQuery(this).find('.sub-menu').first().removeClass('menu-hover');
    });
    
    jQuery('.page_item_has_children').hover(function () {
        jQuery(this).find('.children').first().addClass('menu-hover');
    }, function () {
        jQuery(this).find('.children').first().removeClass('menu-hover');
    });
  });
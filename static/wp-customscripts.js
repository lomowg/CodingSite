window.addEventListener('load', function() {

  var Interval=null;
  function show_loading_box(){
  jQuery(".spinner-loading-box").css("display","none");
  clearInterval(Interval);
  }
  jQuery('document').ready(function(){
    Interval = setInterval(show_loading_box,1000);
  });


  var owl = jQuery('.product-image-main.owl-carousel');
  if (owl.length > 0) {

    owl.owlCarousel({
      margin: 10,
      nav: true,
      autoplay: false,
      lazyLoad: true,
      autoHeight: false,
      autoplayTimeout: 3000,

      dots:false,
      loop: true,
      navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 4,
        },
        1920: {
          items: 4,
        },

      },
      autoplayHoverPause: true,
      mouseDrag: true
    });
  }




  var owl = jQuery('.car-listing-main.owl-carousel');
  if (owl.length > 0) {

    owl.owlCarousel({
      margin: 10,
      nav: true,
      autoplay: false,
      lazyLoad: true,
      autoHeight: false,
      autoplayTimeout: 3000,

      dots:false,
      loop: true,
      navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 4,
        },
        1920: {
          items: 4,
        },

      },
      autoplayHoverPause: true,
      mouseDrag: true
    });
  }

	var owl = jQuery('.service-page-plan.owl-carousel');
    if (owl.length > 0) {

    owl.owlCarousel({
      margin: 10,
      nav: true,
      autoplay: true,
      lazyLoad: true,
      autoHeight: false,
      autoplayTimeout: 3000,

      dots:false,
      loop: true,
      navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1920: {
          items: 3,
        },

      },
      autoplayHoverPause: true,
      mouseDrag: true
    });
  }



  jQuery(".wpe-car-blog-section .ea-button-wrap a .ea-readmore-icon").append('<i class="far fa-arrow-alt-circle-right"></i>');

  jQuery(".wpe-car-blog-section .ea-readmore-icon span").each(function() {
    var text = jQuery(this).text();
    text = text.replace("read more", "Learn More");
    jQuery(this).text(text);
  });


  // ============================

  //Sticky Header on scroll Start

  jQuery(window).scroll(function(){
    if(jQuery(this).scrollTop() > 100){
      jQuery('.wpe-car-header-main-container').addClass('sticky')
    }
    else{
      jQuery('.wpe-car-header-main-container').removeClass('sticky')
    }
  });

  //Sticky Header on scroll End



  //If page is scrolled show return to top arrow

  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  jQuery('#return-to-top').click(function() {      // When arrow is clicked
    jQuery('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
    }, 1000);
  });

  //If page is scrolled show return to top arrow end

  // ============================


    //Team Social Icon Start

    jQuery('.wpe-car-team-section .swiper-wrapper .swiper-slide').each(function(index, elem){
      const spanTag = `<span class="tm-icon-span"></span>`;
      jQuery(this).find('.ea-tm .ea-tm-content').append(spanTag)
    })

    jQuery(document).on('click',  '.tm-icon-span', function(e){
      jQuery(this).closest('.ea-tm-content').find('.ea-tm-social-links').toggle();
    });

    //Team Social Icon End


  // ============================


  const get_woocommerce_currency_symbol = wp_customscripts_object.get_woocommerce_currency_symbol;

  jQuery( "#product-price-slider" ).slider({
    range: true,
    min: 0,
    max: parseInt(wp_customscripts_object.product_max_price),
    values: [ 0, parseInt(wp_customscripts_object.product_max_price) ],
    change: function( event, ui ) {
      car_repair_pro_filters(event, ui);
    },
    slide: function( event, ui ) {
      jQuery( "#product-amount-start" ).text(
        get_woocommerce_currency_symbol + ui.values[ 0 ]
      );
      jQuery( "#product-amount-end" ).text(
        get_woocommerce_currency_symbol + ui.values[ 1 ]
      );
    }
  });
  jQuery('.car-repair-filter [type="checkbox"]').on('change', function(event) {
    car_repair_pro_filters(event);
  });

  jQuery('.elemento-widget-sidebar input[type="text"]').attr('placeholder',"Search...");

  jQuery('.dgwt-wcas-search-submit').html('<i class="fa fa-search" aria-hidden="true"></i>');

  jQuery('#wpe-sneaker-instagram-sec div#sbi_load a span').text('Instagram');





  //Shop Page Start

  //jQuery('.shop-page-rating').prepend('<span class="shop-page-rating-icon"><i class="fas fa-star"></i></span>');

  //Shop Page End

  jQuery('.hfe-menu-toggle.sub-arrow.hfe-menu-child-0').append('<i class="fa fa-angle-down"></i>');

  jQuery('#wpe-sneaker-footer-5 .ewd-otp-form-identifier input[type="text"]').attr('placeholder',"Order Id Here");

  jQuery('.woocs-style-1-select i').append('<i class="fa fa-angle-down" aria-hidden="true"></i>');

  // jQuery( ".summary.entry-summary" ).append( jQuery( ".quantity" ) );
  //
  // jQuery( "#single-product-page .price" ).append( jQuery( ".quantity" ) );

  jQuery("#wpelemento-zymerce-account-login").click(function(){
    jQuery('.wpelemento-zymerce-account-form').addClass('form-active');
    jQuery('#wpelemento-zymerce-account-login').addClass('form-active-content');
  });
  jQuery("#wpelemento-zymerce-my-account-close-icon").click(function(){
    jQuery('.wpelemento-zymerce-account-form').removeClass('form-active');
    jQuery('#wpelemento-zymerce-account-login').removeClass('form-active-content');
  });

  //Category Dropdown Start
  // Get the button, and when the user clicks on it, execute myFunction
  /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
  jQuery('.wpelemento-zymerce-browse-category-section').click(function () {
    jQuery("#myDropdown").toggleClass("show")
  })


  //Category Dropdown Start
  jQuery('.wpelemento-zymerce-dropdown-category-main-section .elementor-widget-wrap:first').on('click', function() {
    jQuery('#myDropdown').toggleClass('show');
  })
  //Category Dropdown End

  jQuery(".wishlist-title h2").replaceWith("<h2>Your Wishlist</h2>");



  function car_repair_pro_filters(event, ui) {
      var data_obj = {};

      data_obj['values'] = jQuery('#product-price-slider').slider( "values" );

      jQuery('.car-repair-filter [type="checkbox"]:checked').each(function(index, element) {
        if (!Array.isArray(data_obj[jQuery(element).attr('name')])) {
          data_obj[jQuery(element).attr('name')] = new Array();
        }
        data_obj[jQuery(element).attr('name')].push(jQuery(element).val())
      });

      jQuery.post(wp_customscripts_object.ajaxurl, {
        'action': 'get_shop_page_filter',
        'data':   data_obj
      },
      function(response) {
        jQuery('.products.columns-3').html(response.html)
      });

  }


  jQuery('form.variations_form.cart').on('submit', function(e) {
      e.preventDefault();

      var form   = jQuery(this),
          mainId = form.find('.single_add_to_cart_button').val(),
          fData  = form.serializeArray();

      form.block({ message: null, overlayCSS: { background: '#fff', opacity: 0.6 } });

      if ( mainId === '' ) {
          mainId = form.find('input[name="product_id"]').val();
      }

      if ( typeof wc_add_to_cart_params === 'undefined' )
          return false;

      jQuery.ajax({
          type: 'POST',
          url: "?wc-ajax=custom_add_to_cart",
          data : {
              'product_id': mainId,
              'form_data' : fData
          },
          success: function (response) {
              jQuery(document.body).trigger("wc_fragment_refresh");
              jQuery('.woocommerce-error,.woocommerce-message').remove();
              jQuery('input[name="quantity"]').val(1);

              form.find('.woocommerce-variation-add-to-cart button[type="submit"]').before(jQuery(response).find('a'));

              form.unblock();
          },
          error: function (error) {
              form.unblock();
          }
      });
  });


    jQuery('form').on('change', '[data-attribute_name]', function() {

      var $the_form = $(this).closest('form.variations_form.cart')
      console.log('$the_form', $the_form);

      const $thumbImg = $the_form.closest('.thumbImg').find('img[decoding="async"]')

      var $selects = $the_form.find('[data-attribute_name]');

      $.ajax({
          url: wc_add_to_cart_variation_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_variation"),
          type: "POST",
          data: $the_form.serialize(),
          success: function(data) {
            if ( data && data.hasOwnProperty('image') && data.image.hasOwnProperty('full_src') ) {
              $thumbImg.attr('src', data.image.full_src)
            }
          },
          complete: function() {
          }
      })
    })






  // ============================


  jQuery('#wpe-sneaker-upcoming-stock-sec .wishlist.button-default.yith-wcwl-add-to-wishlist[class*="add-to-wishlist-"]').each(function(i, element) {
    let $this = jQuery(this);
    let $parent = $this.closest('.ht-product-inner')
    $parent.find('.ht-product-image').append(jQuery(element))
  })

  jQuery('#wpe-sneaker-upcoming-stock-sec .ht-product-price').each(function(i, element) {
    let $this = jQuery(this);
    let $parent = $this.closest('.ht-product-content')
    $parent.find('.ht-product-action').append(jQuery(element))
  })

  //
  jQuery('.color-variable-items-wrapper').each(function(ul_index, ul_element) {
    const attribute_pa_color_length = jQuery(ul_element).find('li').length
    const colors_percentage = 100/attribute_pa_color_length
    const color_percentage_start = colors_percentage/2
    const color_percentage_parts = color_percentage_start/attribute_pa_color_length

    let color_percentage = 0
    let color_gradient = '180deg, '
    jQuery(ul_element).find('li span').each(function(index, element) {
      const $color_att = jQuery(element)
      const $color_hex = $color_att.css('background-color')
      if (index === 0) {
        color_gradient += `${$color_hex} ${color_percentage_start.toFixed()}%, `
      } else {
        if (index === 1) {
          // color_percentage += (color_percentage_start + colors_percentage + color_percentage_parts)
          color_percentage += (color_percentage_start + colors_percentage)
        } else {
          if ((index===1) === attribute_pa_color_length) {
            color_percentage += (colors_percentage + color_percentage_parts + color_percentage_start)
          } else {
            color_percentage += (colors_percentage + color_percentage_parts)
          }
        }

        if ((index+1) === attribute_pa_color_length) {
          color_gradient += `${$color_hex} ${color_percentage.toFixed()}%`
        } else {
          color_gradient += `${$color_hex} ${color_percentage.toFixed()}%, `
        }
      }
    })
    jQuery(ul_element).attr('style', `background: transparent linear-gradient(${color_gradient});`)
  })

  jQuery('.variable-item-span.variable-item-span-color').on('click',  function(){
    var currentColor = jQuery(this).css("background-color");
    document.documentElement.style.setProperty('--swatches-color', currentColor);
  });

  if (
    jQuery('body').hasClass('single-product') ||
    jQuery('body').hasClass('home')
  ) {
    jQuery('.selected .variable-item-span.variable-item-span-color').trigger('click')
  }


  if (jQuery('.woo-cart-form-container').length) {
    jQuery('.woo-cart-form-container').on( 'click', '.plus, .minus', function() {

       var qty = jQuery( this ).parent( '.quantity' ).find( '.qty' );
       var val = parseFloat(qty.val());
       var max = parseFloat(qty.attr( 'max' ));
       var min = parseFloat(qty.attr( 'min' ));
       var step = parseFloat(qty.attr( 'step' ));

       if ( jQuery( this ).is( '.plus' ) ) {
          if ( max && ( max <= val ) ) {
             qty.val( max ).change();
          } else {
             qty.val( val + step ).change();
          }
       } else {
          if ( min && ( min >= val ) ) {
             qty.val( min ).change();
          } else if ( val > 1 ) {
             qty.val( val - step ).change();
          }
       }
    });
  }

  jQuery('.quantity_cloned').on( 'click', '.plus, .minus', function() {

     var qty = jQuery( this ).parent( '.quantity_cloned' ).find( '.qty-cloned' );
     var val = parseFloat(qty.val());
     var max = parseFloat(qty.attr( 'max' ));
     var min = parseFloat(qty.attr( 'min' ));
     var step = parseFloat(qty.attr( 'step' ));

     if ( jQuery( this ).is( '.plus' ) ) {
        if ( max && ( max <= val ) ) {
           qty.val( max ).change();
        } else {
           qty.val( val + step ).change();
        }
     } else {
        if ( min && ( min >= val ) ) {
           qty.val( min ).change();
        } else if ( val > 1 ) {
           qty.val( val - step ).change();
        }
     }

     const quantity_cloned = parseInt(jQuery('#quantity_cloned').val())
     jQuery('.quantity .qty').val(quantity_cloned)

  });



  var owl_image_gallerys = jQuery('#image-gallerys');
  if (owl_image_gallerys.length > 0) {

    owl_image_gallerys.owlCarousel({
      stagePadding: 180,
      margin: 10,
      nav: true,
      autoplay: false,
      lazyLoad: true,
      autoHeight: false,
      autoplayTimeout: 3000,
      dots:false,
      loop: true,
      navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1024: {
          items: 1,
        },
        1366: {
          items: 1,
        },
        1920: {
          items: 1,
        },

      },
      autoplayHoverPause: true,
      mouseDrag: true
    });

    jQuery('#image-gallerys-thumbnails').on('click', 'div', function(event) {
      const the_src = event.target.src
      const the_element = jQuery(`#image-gallerys .owl-item li[data-thumb="${the_src}"]`).closest('.owl-item')
      const the_index = jQuery(the_element).index();
      var carousel = jQuery('#image-gallerys').data('owl.carousel');
      console.log('carousel', carousel)
      carousel.to(carousel.relative(jQuery(the_element).index()));
    })
  }





}, false);





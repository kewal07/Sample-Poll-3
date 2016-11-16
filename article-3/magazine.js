(function ($) {
Drupal.behaviors.garnetAction = {
  attach: function (context) {
    Drupal.Magazine.setInputPlaceHolder('search_block_form', Drupal.t('Search...'));
    $('.btn-btt').smoothScroll({offset:0, speed: 200});
    
    Drupal.Magazine.initUserMenu();


    $(window).load(function() {
      window.setTimeout(function() {
        // Drupal.Magazine.equalHeight( $('#quicktabs-tabpage-quicktab-0 .views-field-title') );
        // Drupal.Magazine.equalHeight( $('#quicktabs-tabpage-quicktab-0 .views-field-body') );

        Drupal.Magazine.equalHeight( $('#quicktabs-container-quicktab .views-field-title') );
        Drupal.Magazine.equalHeight( $('#quicktabs-container-quicktab .view-field-body') );


        // Drupal.Magazine.equalHeight( $('#quicktabs-tabpage-quicktab-1 .views-field-title') );
        // Drupal.Magazine.equalHeight( $('#quicktabs-tabpage-quicktab-1 .views-field-body') );
        // Drupal.Magazine.equalHeight( $('#panel-third-wrapper .panel-column .grid-inner') );
      }, 100);
    }).scroll(function() {
      Drupal.Magazine.checkScroll();
    }).resize(function(){
      Drupal.Magazine.checkScroll();
    });

    // Drupal.Magazine.initQuickTab();
  }
}

Drupal.Magazine = Drupal.Magazine || {};
Drupal.Magazine.FIXED_MENU_POSITION = 150;

Drupal.Magazine.setInputPlaceHolder = function(name, text) {
  $('input[name="' + name + '"]').val(Drupal.t(text));
  $('input[name="' + name + '"]').focus(function(){
    if(this.value == Drupal.t(text)) {
      this.value='';
    }
  }).blur(function(){
    if(this.value == '') {
      this.value=Drupal.t(text);
    }
  });
}

Drupal.Magazine.initQuickTab = function() {
  $('#quicktabs-quicktab ul.quicktabs-tabs li a').click(function() {
    var self = $(this);
    if (self.hasClass('processed')) return;
    var id = self.attr('id').substr(-1);
    if (id == 0) return;

    Drupal.Magazine.equalHeight( $('#quicktabs-tabpage-quicktab-'+id+' .views-field-title') );
    Drupal.Magazine.equalHeight( $('#quicktabs-tabpage-quicktab-'+id+' .views-field-body') );

    self.addClass('processed');
  })
}

Drupal.Magazine.checkScroll = function() {
  // if (Drupal.settings.garnet.show_fixed_menu == undefined || Drupal.settings.garnet.show_fixed_menu == false) return;
  // var wrapper = $('#main-menu-wrapper');
  // if ($(window).scrollTop() > this.FIXED_MENU_POSITION) {
  //   var $page = $('#page');
  //   wrapper.css({top: $page.position().top});
  //   wrapper.addClass('fixed-menu');
  //   wrapper.find('#fixedLogo').show();
  // } else {
  //   wrapper.css({top: 'auto'});
  //   wrapper.removeClass('fixed-menu');
  //   wrapper.find('#fixedLogo').hide();
  // }
  
  if($(window).scrollTop() > 100) {
    $('.btn-btt').show();
  }
  else {
    $('.btn-btt').hide();
  }
}
  
Drupal.Magazine.equalHeight = function(elements) {
  highest = 0;
  elements.each(function() {
    if($(this).outerHeight() > highest) {
      highest = $(this).outerHeight();
    }
  });
  return elements.each(function() {
    padding = $(this).innerHeight() - $(this).height();
    extra = padding + ($(this).outerHeight() - $(this).innerHeight());
    if(($.browser.msie && $.browser.version == 6.0)) {
      $(this).css({'height': highest - extra, 'overflow': 'hidden'});
    }
    else {
      $(this).css({'min-height': highest - extra});
    }
  });
}

Drupal.Magazine.initUserMenu = function() {
  
  
    $('i.wp-icon-user-login').click(function() {
      $('#wp-user-wrapper').toggle();
    })  
  
}
  
})(jQuery);
(function ($) {

Drupal.WeebPal = Drupal.WeebPal || {};
Drupal.WeebPal.onClickResetDefaultSettings = function() {
  var answer = confirm(Drupal.t('Are you sure you want to reset your theme settings to default theme settings?'))
  if (answer){
    $("input:hidden[name = magazine_use_default_settings]").attr("value", 1);
    return true;
  }

  return false;
}

  

Drupal.behaviors.actionWeebPal = {
  attach: function (context) {
	$(".change-skin-button").click(function() {
	  parts = this.href.split("/");
	  style = parts[parts.length - 1];
   	  $.cookie("magazine_skin", style, {path: '/'});
      window.location.reload();
	  return false;
    });
    $("#change_skin_menu_wrapper").mouseenter(function() {
      $('#change_skin_menu_wrapper').stop(true, false).animate({left: 0}, 1000);	  
    }).mouseleave(function() {
      $('#change_skin_menu_wrapper').stop(true, false).animate({left: -61}, 1000);
    });	
  }
};
})(jQuery);

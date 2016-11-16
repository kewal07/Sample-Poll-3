jQuery(document).ready(function ($) {
             if (!navigator.userAgent.match(/Android/i) &&
             !navigator.userAgent.match(/webOS/i) &&
             !navigator.userAgent.match(/iPhone/i) &&
             !navigator.userAgent.match(/iPod/i) &&
             !navigator.userAgent.match(/iPad/i) &&
             !navigator.userAgent.match(/Blackberry/i)) 
             {
               /* Article ads */ 
               $('#div-clmb-ctn-196025-1').addClass('colombia');
               $('#div-clmb-ctn-196024-1').addClass('colombia');
               $('#div-clmb-ctn-196022-1').addClass('colombia');
               
               /* Category page ads */
               $('#div-clmb-ctn-196021-1').addClass('colombia');             
               
               /* Photo gallery ads*/
               $('#div-clmb-ctn-196023-1').addClass('colombia');
             } 
             else 
             {
               /* Article ads */ 
               $('#div-clmb-ctn-206949-1').addClass('colombia');
               
               /* Category page ads */
               $('#div-clmb-ctn-206938-1').addClass('colombia');
               
               /* Photo gallery ads*/
               $('#div-clmb-ctn-207937-1').addClass('colombia');
               
             }
});


if(typeof colombia == 'undefined')
{
	var colombia = colombia || {};
   colombia.fns = colombia.fns || [];
   (function() {
        var cads = document.createElement("script");
        cads.async = true;
        cads.type = "text/javascript";
        cads.src = "http://static.clmbtech.com/ctn/commons/js/colombia_v11.js";
        var node = document.getElementsByTagName("script")[0];
        node.parentNode.insertBefore(cads, node);
   })();
}
		        
function adwidget (data,container)
{
   if (data != null) 
   {
      var conObj = document.getElementById(container);
      if(data.paidAds[0].text.length > 75)
      {
         var desctext = data.paidAds[0].text.substring(0, 75)+'...';
      }
      else {
         var desctext = data.paidAds[0].text;
      }

      var conText = "";
      conText='<div class="colombiaAds" onmouseover = "javascript:document.getElementById(\'colombialogo\').src=\'http://static.clmbtech.com/ad/commons/images/colombia_red_small.png \'" onmouseout = "javascript:document.getElementById(\'colombialogo\').src=\''+data.paidAds[0].colombiaLogo+'\'"><a target="_blank" href="' + data.paidAds[0].clk[0] + '" title="' + data.paidAds[0].mainimage + '"><img width="86" height="86" class="lazy" src="' + data.paidAds[0].mainimage + '" alt="' + data.paidAds[0].mainimage + '"></a><a class="title" target="_blank" href="' + data.paidAds[0].clk[0] + '">' + data.paidAds[0].title + '</a><p class="desc">' + desctext + '</p><p class="sponsored">Sponsored by ' + data.paidAds[0].brandtext + '&nbsp;<img class="flr" id="colombialogo" src="' + data.paidAds[0].colombiaLogo + '" width="14" height="14" style="position:absolute;margin:2px;"></p><div class="columbia-separator"></div></div><div style="clear:both"></div>';

conObj.innerHTML = conText;
conObj.style.display = '';

   }
}

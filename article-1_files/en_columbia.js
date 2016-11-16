jQuery(document).ready(function ($) {
if (!navigator.userAgent.match(/Android/i) &&
!navigator.userAgent.match(/webOS/i) &&
!navigator.userAgent.match(/iPhone/i) &&
!navigator.userAgent.match(/iPod/i) &&
!navigator.userAgent.match(/iPad/i) &&
!navigator.userAgent.match(/Blackberry/i)) 
{
/* Article ads */ 
$('#div-clmb-ctn-205970-1').addClass('colombia');
$('#div-clmb-ctn-205975-1').addClass('colombia');

/* Category page ads */
$('#div-clmb-ctn-205978-1').addClass('colombia');             

/* Photo gallery ads*/
$('#div-clmb-ctn-205969-1').addClass('colombia');
} 
else 
{
/* Article ads */ 
$('#div-clmb-ctn-206952-1').addClass('colombia');

/* Category page ads */
$('#div-clmb-ctn-206947-1').addClass('colombia');

/* Photo gallery ads*/
$('#div-clmb-ctn-207938-1').addClass('colombia');

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
		
			
function adwidget(data,container)
{
if (data != null)
{
   var conObj = document.getElementById(container);
   var conText= "";
   if(data.hasOwnProperty('paidAds')){
      for(var i=0; i<data.paidAds.length; i++) 
      {
          if(data.paidAds[i].text.length > 75)
          {
          var desctext = data.paidAds[i].text.substring(0, 75)+'...';
          } 
          else {
          var desctext = data.paidAds[i].text;
          }
       conText+='<div class="colombiaAds" onmouseover = "javascript:document.getElementById(\'colombialogo'+i+'\').src=\'http://static.clmbtech.com/ad/commons/images/colombia_red_small.png \'" onmouseout = "javascript:document.getElementById(\'colombialogo'+i+'\').src=\''+data.paidAds[i].colombiaLogo+'\'"><a style="float:left;" target="_blank" href="' + data.paidAds[i].clk[0] + '" title="' + data.paidAds[i].title + '"><img width="86" height="86" class="lazy" src="' + data.paidAds[i].mainimage + '" alt="' + data.paidAds[i].title + '"></a><a class="title" target="_blank" href="' + data.paidAds[i].clk[0] + '">' + data.paidAds[i].title + '</a><p class="desc">'+desctext+'</p><p class="sponsored">Sponsored by ' + data.paidAds[i].brandtext + '&nbsp;<img class="flr" id="colombialogo'+i+'" src="' + data.paidAds[i].colombiaLogo + '" width="14" height="14"></p></div><div style="clear:both"></div>';
     }
  }
  if(data.hasOwnProperty('organicAds')){
   conText += "<br><br><div>Organic Ads";
      for(var j=0; j<data.organicAds.length; j++) 
      {
                                          if(data.paidAds[j].text.length > 75)
                                          {
                                            var desctext = data.paidAds[j].text.substring(0, 75)+'...';
                                          } 
                                          else {
                                          var desctext = data.paidAds[j].text;
                                          }
       conText+='<div class="colombiaAds" onmouseover = "javascript:document.getElementById(\'colombialogo'+j+'\').src=\'http://static.clmbtech.com/ad/commons/images/colombia_red_small.png \'" onmouseout = "javascript:document.getElementById(\'colombialogo'+j+'\').src=\''+data.organicAds[j].colombiaLogo+'\'"><a style="float:left;" target="_blank" href="' + data.organicAds[j].clk[0] + '" title="' + data.organicAds[j].title + '"><img width="90" height="90" class="lazy" src="' + data.organicAds[j].mainimage + '" alt="' + data.organicAds[j].title + '"></a><a class="title" target="_blank" href="' + data.organicAds[j].clk[0] + '">' + data.organicAds[j].title + '</a><p>'+desctext+'</p><p class="sponsored">Sponsored by  ' + data.organicAds[j].brandtext +'&nbsp; <img class="flr" id="colombialogo'+j+'" src="' + data.organicAds[j].colombiaLogo + '" width="14" height="14"></p></div></div><div style="clear:both"></div>';
     }
  }
   conObj.innerHTML = conText;
   conObj.style.display = '';
}
}


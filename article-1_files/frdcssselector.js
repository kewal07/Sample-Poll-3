(function(){window.publisherid="oneSiteMainContent";document.getElementById("oneSiteMainContent")&&document.getElementById("oneSiteMainContent").addEventListener("scroll",function(){inreadFn.zinr_event()});var w=0,t=0,x=0,y=document.getElementById("inArticleSelector").src.match(/[?&]layout=([^&#]+)/),z=function(){"interactive"==document.readyState?(clearTimeout(w),1>t?(++t,q()):"undefined"!==typeof inreadFn.loadOtherAd&&inreadFn.loadOtherAd("Css selector not present on page","place_holder_check_timeout")):
w=setTimeout(function(){q()},1E3)},q=function(){try{var b=window.zd_parent||window.zflag_parent||"",b=unescape(b),l=0;clearTimeout(w);if(""!==b&&null===document.getElementById(b)&&0<b.indexOf(" ")&&"default"===y[1]){var e=0,f=0,m=0,n=0,g=0,a=ichildpos=new_tag=isep="",d=b.split(/\s+/),c=d[0];if(void 0!==d[1]&&void 0!==d[2]){var p=d[1].toLowerCase(),h=d[2],k=void 0===d[3]?"":d[3];""!==k&&(-1!=k.indexOf("#")?(k="",m=1):a+=k.replace(/[|]/g,">"));ichildpos=void 0===d[4]?"":d[4];"*"==ichildpos&&(ichildpos=
"");-1!=ichildpos.indexOf("%")?(e=1,ichildpos=ichildpos.split("%")[0]):0<ichildpos&&(ichildpos=Number(ichildpos)-1);switch(p){case "class":var q=h.replace(/[|]/g,".");k&&ichildpos?(isep=">",new_tag=c+"."+q+">"+a):(isep="",new_tag=""===k?c+"."+q:c+"."+q+">"+a);break;case "id":k&&ichildpos?(isep=">",new_tag=c+"#"+h+">"+a):(isep="",new_tag=""===k?c+"#"+h:c+"#"+h+">"+a);break;default:k&&ichildpos?(isep=">",new_tag=c+"["+p+"="+h+"]>"+a):(isep="",new_tag=""===k?c+"["+p+"="+h+"]>"+a:c+"["+p+"="+h+"]")}if(document.querySelectorAll(new_tag).length){var u=
document.querySelectorAll(new_tag);1==e&&(f=u.length,0<f&&(ichildpos=Math.round(ichildpos*f/100),0<ichildpos&&(ichildpos=Number(ichildpos)-1)));var n=""===ichildpos?parseInt(u.length/2):ichildpos,g=""===isep?n:ichildpos,r=document.createElement("div");r.id="inarticle_wrapper_div";var v=u[g];1==m?v.parentNode.insertBefore(r,v):"undefined"===typeof u[g]?z():v.parentNode.insertBefore(r,v.nextSibling);document.getElementById("inarticle_wrapper_div")&&(l=1);l&&(zinr_libLoaded&&zinr_debugParam&&zinr_hif.conlog(zinr_getTimestamp()+
" ZINC Log : Wrapper Div Created from css selector"),window.zflag_parent="inarticle_wrapper_div")}else z()}}else if("sanook"===y[1]){for(var t=function(a){if(a.previousElementSibling)return a.previousElementSibling;for(;a=a.previousSibling;)if(1===a.nodeType)return a},a={settings:{minContentHeight:350},elmPrevious:{isBannedTag:null},isContentLongEnough:function(a){return a.offsetHeight<this.settings.minContentHeight?!1:!0},isNotBannedTag:function(a){function b(a){var c=a.childNodes.length;if(0<c)for(var e=
0;e<c;e++)if(0<d.indexOf(a.childNodes[e].nodeName.toLowerCase()))return!0;return!1}var d="figure img iframe object embed video table".split(" ");if(!0===this.elmPrevious.isBannedTag)return this.elmPrevious.isBannedTag=null,!1;if(null==this.elmPrevious.isBannedTag){var c=t(a);if(0<d.indexOf(c.nodeName.toLowerCase())||b(c))return!1}if(0<d.indexOf(a.nodeName.toLowerCase())||b(a))return this.elmPrevious.isBannedTag=!0,!1;this.elmPrevious.isBannedTag=!1;return!0},isNotTheLastElement:function(a,b){return a==
b?!1:!0}},e=document.getElementById(b),f=function(a){var b=[];a=a.childNodes;for(var c=0,d=a.length;c<d;c++)1==a[c].nodeType&&b.push(a[c]);return b}(e),m=f.length,n=zinr_hif.getOffset(e).top+e.offsetHeight/2,b=0;b<m;b++)if(g=f[b],zinr_hif.getOffset(f).top,zinr_hif.getOffset(g).top>=n&&1==g.nodeType&&a.isContentLongEnough(e)&&a.isNotBannedTag(g)&&a.isNotTheLastElement(b+1,m)){r=document.createElement("div");r.id="inarticle_wrapper_div";g.parentNode.insertBefore(r,g);document.getElementById("inarticle_wrapper_div")&&
(l=1);zinr_libLoaded&&zinr_debugParam&&zinr_hif.conlog(zinr_getTimestamp()+" ZINC Log : Wrapper Div Created after all Sanook Conditions");window.zflag_parent="inarticle_wrapper_div";break}0==l&&"undefined"!==typeof inreadFn.loadOtherAd&&inreadFn.loadOtherAd("Sanook condition not meet","")}else l=1;if(l){var A=function(){"undefined"!==typeof loadHTMLLayout?(loadHTMLLayout(),clearTimeout(x)):x=setTimeout(A,500)};A()}}catch(B){zinr_libLoaded?zinr_hif.prepareErrMsg(B,"addDivSelector",zinr_hif.adformat,
"Severity=Low;"):""}};window.inreadSelector={fix_positions:function(b,l,e){0!==document.getElementById("inread1_26817").childNodes.length&&zinr_hif.setCss(document.getElementById("inread1_26817"),{display:"inline-block",clear:"both"});for(var f=e=0,m=document.querySelectorAll("#inread1_26817 *"),n=0,g=m.length;n<g;n++){var a=m[n],d=zinr_hif.getCss(a,"marginBottom")||zinr_hif.getCss(a,"margin-bottom"),c=zinr_hif.getCss(a,"marginTop")||zinr_hif.getCss(a,"margin-top"),p=zinr_hif.getCss(a,"marginLeft")||
zinr_hif.getCss(a,"margin-left"),h=zinr_hif.getCss(a,"marginRight")||zinr_hif.getCss(a,"margin-right");"0px"!==p&&"auto"!==p&&(a.style.cssText+="margin-left: -0px !important",e+=parseInt(p,10));"0px"!==h&&"auto"!==h&&(a.style.cssText+="margin-right: -0px !important",f+=parseInt(h,10));"0px"!==c&&"auto"!==c&&(a.style.cssText+="margin-top: -"+c+" !important");"0px"!=d&&"auto"!==d&&(a.style.cssText+="margin-bottom: -"+d+" !important")}if(0!==e||0!==f)return parseInt(zinr_hif.getCss(document.getElementById(b).parentNode,
"width"),10)-e-f;zinr_hif.setCss(document.getElementById("inread1_26817"),{width:l});return!1},show_hide_pixel:function(b){b?zinr_hif.setCss(document.getElementById("zd_td_26817"),{opacity:"1",filter:"alpha(opacity=100)"}):zinr_hif.setCss(document.getElementById("zd_td_26817"),{opacity:"0",filter:"alpha(opacity=0)"})},fix_chrome_lb:function(b){("www.almamagazine.com"===location.host||"demos.zedo.com"===location.host||"dev12.juhu.zedo.com"===location.host)&&0<document.querySelectorAll(".main").length&&
(1==b?document.querySelector(".main").style.webkitTransform="none":document.querySelector(".main").style.webkitTransform="")}};q()})();

var loopTimer = 0;
var allLanguages = 'undefined';
var allLanguagesFlag = 'undefined';
var ButtonslinksObject = function() {
	if ((typeof inreadFn !== 'undefined') && (typeof inreadFn.domain_player !== 'undefined')) {
		clearTimeout(loopTimer);
		allLanguages = {
			english : {
				rollOver : inreadFn.domain_player+"jsc/images/zplayer/inarticle-Sound-Text.png",
				clickFullscreen : inreadFn.domain_player+"jsc/images/zplayer/inarticle-Fullscreen-Text.png",
				clickExit : inreadFn.domain_player+"jsc/images/zplayer/inarticle-Exit-Btn.png",
				advt : "Advertisement",
				replay : "Replay Ad",
				close : "Close"
			},
			japanese : {
				rollOver : inreadFn.domain_player+"jsc/images/zplayer/rollover_for_sound-jp.png",
				clickFullscreen : inreadFn.domain_player+"jsc/images/zplayer/clickFullscreen-jp.png",
				clickExit : inreadFn.domain_player+"jsc/images/zplayer/exitfullscreen-jp.png",
				advt : "広告をもう",
				replay : "度見る",
				close : "閉じる"
			}
		};
		allLanguagesFlag=1;
	} else loopTimer=setTimeout(function() {  ButtonslinksObject(); }, 500);
};
ButtonslinksObject();
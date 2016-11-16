//  Copyright (c) 2000-2016 ZEDO Inc. All Rights Reserved.
var v16="http://z1.zedo.com/asw";var y13=new function(){var n3=this;
n3.a5=false;
var zzDtctRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7"},{"name":"ShockwaveFlash.ShockwaveFlash.6"},{"name":"ShockwaveFlash.ShockwaveFlash"}];var zzgetXObj=function(name){var w19=-1;
try{
w19=new ActiveXObject(name);
}
catch(err)
{
w19={
zzactiveXError:true};
}
return w19;
};
n3.y13=function(){
if(navigator.plugins&&navigator.plugins.length>0){
var o1='application/x-shockwave-flash';var q6=navigator.mimeTypes;
if(q6&&q6[o1]&&q6[o1].enabledPlugin&&q6[o1].enabledPlugin.description){
n3.a5=true;
}
}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){
var n47=-1;
for(var i=0;i<zzDtctRules.length&&n47==-1;i++){
try{
var w19=zzgetXObj(zzDtctRules[i].name);
if((typeof(w19)!=='undefined')&&!w19.zzactiveXError){
n3.a5=true;
return;
}
}catch(err){
n3.a5=false;
}}}
}();
};
get_flash_bit=function(){
var r4=navigator.userAgent.toLowerCase();var c22=(r4.indexOf('mac')!=-1);var i22=parseInt(navigator.appVersion);
var r23=(!c22&&(r4.indexOf('opera')==-1)&&(r4.indexOf('msie')!=-1)&&(i22>=4)&&(r4.indexOf('webtv')==-1
)&&(r4.indexOf('msie 4')==-1));
var r20=navigator.javaEnabled();var i3=1;var w33=document.createElement("audio");var y38=document.createElement("video");var o24={audio:(w33.play)?true:false,video:(y38.play)?true:false};
if(o24.audio&&o24.video){
i3 |=128;
}
if(r20){i3 |=4;}
if(y13.a5){i3 |=8;}
if(r23){
if(document.documentElement){
document.documentElement.style.behavior='url(#default#clientCaps)';
if(document.documentElement.connectionType=='lan'){
i3 |=16;
}}
else if(document.body){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
i3 |=16;
}}}
return i3;
};
var v14=get_flash_bit();
if(v14==null){
v14='';
}

if(typeof zflag_vals!='undefined'&&typeof zflag_vals.c!='undefined'){
var zflag_cid=zflag_vals.c;}
if(typeof zflag_vals!='undefined'&&typeof zflag_vals.s!='undefined'){
var zflag_sid=zflag_vals.s;}
var n9=0;var r0='';var z8=0;var q51;var w49;var y50;var i51;var w50;var c50;var c51='';var r11='0';var t9=0;var y31='';var zd_$='';var a5=0;var p27='';var n31='';
var a39="";var q35='';var t38='';var d19=new Array();var d14='';var o36=0;var q31='';var t11="";var w31="";var a31="";var t41="";var y17="";var d31="";var w25="";var o31='';var z36='';var w36='';
var w37='';var i38='';var w32='';var c39='';var y36='';var z39='';var e36='';var n30='';var a32="";var t25=new Array();var n40=new Array();var e23=new Array();var p34=0;var y6="";var t20="";
function F6(){
if(typeof zflag_nid=='undefined'){
return false;
}
return true;
}
var a38="";
if(typeof zflag_ct!='undefined'){
a38=encodeURI(zflag_ct);
zflag_ct="";
}
if(typeof zflag_nid!='undefined'){
n9=zflag_nid;
zflag_nid=0;
}
if(typeof zflag_charset!='undefined'){
r0=zflag_charset;
zflag_charset="";
}else{
r0="UTF-8";
}
if(typeof zflag_sid!='undefined'){
z8=zflag_sid;
}
if(typeof zflag_pbnw!='undefined'&&zflag_pbnw>0){
t11+="&pn="+zflag_pbnw;
zflag_pbnw=0;
}
if(typeof zflag_6!='undefined'){
t11+="&6="+zflag_6;
zflag_6=0;
}
if(typeof zflag_pbad!='undefined'){
t11+="&pa="+zflag_pbad;
zflag_pbad=0;
}
if(typeof zflag_pbch!='undefined'){
if(zflag_pbch.indexOf("/")!=-1){
var w48=zflag_pbch.substr(0,zflag_pbch.indexOf("/"));
t11+="&pc="+w48;
}
else{
t11+="&pc="+zflag_pbch;
}
zflag_pbch="0";
}
if(typeof zflag_pbr!='undefined'){
t11+="&pr="+zflag_pbr;
zflag_pbr=0;
}
if(typeof zflag_pbsid!='undefined'){
t11+="&ps="+zflag_pbsid;
}
if(typeof zflag_tmy!='undefined'){
w31+="&tmy="+zflag_tmy;
zflag_tmy=0;
}
if(typeof zflag_cid!='undefined'){
zflag_cid=zflag_cid.toString();
if(zflag_cid.indexOf("/")>-1){
r11=zflag_cid.substr(0,zflag_cid.indexOf("/"));
}else{
r11=zflag_cid;
}
if(r11<0||r11>999999){
r11=0;
}}
if(typeof zflag_chanlimits!='undefined'){
o36=zflag_chanlimits;
zflag_chanlimits=0;
}
if(typeof zflag_sz!='undefined'){
t9=zflag_sz;
if(t9<0||t9>95){
t9=0;
}
zflag_sz=0;
}
if(typeof zflag_msize!='undefined'){
zd_msz=F59(zflag_msize,screen.width,screen.height);
if(typeof zd_msz!='undefined'){
t9=zd_msz;
}
zflag_msize="";
}
if(typeof zflag_alter_sz!='undefined'){
y17=zflag_alter_sz;
if(y17<0||y17>95){
y17=0;
}
zflag_alter_sz=0;
}
if(typeof zflag_kw!='undefined'){
zflag_kw=zflag_kw.replace(/&/g,'zzazz');
y31=zflag_kw;
zflag_kw="";
}
if(typeof zflag_$!='undefined'){
zd_$=zflag_$;
zflag_$='';
}
if(typeof zflag_fixWidth!='undefined'){
o31=zflag_fixWidth;
zflag_fixWidth='';
}
if(typeof zflag_fixHeight!='undefined'){
z36=zflag_fixHeight;
zflag_fixHeight='';
}
if(typeof zflag_minWidth!='undefined'){
w36=zflag_minWidth;
zflag_minWidth='';
}
if(typeof zflag_minHeight!='undefined'){
w37=zflag_minHeight;
zflag_minHeight='';
}
if(typeof zflag_maxWidth!='undefined'){
i38=zflag_maxWidth;
zflag_maxWidth='';
}
if(typeof zflag_maxHeight!='undefined'){
w32=zflag_maxHeight;
zflag_maxHeight='';
}
if(typeof zflag_autoPlayViewPercent!='undefined'){
c39=zflag_autoPlayViewPercent;
zflag_autoPlayViewPercent='';
}
if(typeof zflag_autoPlay!='undefined'){
y36=zflag_autoPlay;
zflag_autoPlay='';
}
if(typeof zflag_onVideoReady!='undefined'){
z39=zflag_onVideoReady;
zflag_onVideoReady='';
}
if(typeof zflag_onVideoError!='undefined'){
e36=zflag_onVideoError;
zflag_onVideoError='';
}
if(typeof zflag_hideFullscreenicon!='undefined'){
n30=zflag_hideFullscreenicon;
zflag_hideFullscreenicon='';
}
if(typeof zflag_geo!='undefined'){
if(!isNaN(zflag_geo)){
p27="&gc="+zflag_geo;
zflag_geo=0;
}}
if(typeof zflag_param!='undefined'){
a39="&p="+zflag_param;
zflag_param="";
}
if(typeof zflag_click!='undefined'){
zzTrd=encodeURIComponent(zflag_click);
n31='&l='+zzTrd;
zflag_click="";
}
if(typeof zflag_ad_title!='undefined'){
zzTitle=escape(zflag_ad_title);
q31='&t='+zzTitle;
zflag_ad_title="";
}
if(typeof zflag_hasAd!='undefined'){
q35='&y='+zflag_hasAd;
}
if(typeof zflag_num!='undefined'){
t38=zflag_num;
zflag_num=0;
}
if(typeof zflag_ck!='undefined'){
d14='&ck='+zflag_ck;
zflag_ck=0;
}
if(typeof zflag_message_transport!='undefined'){
a31=zflag_message_transport;
zflag_message_transport=0;
}
if(typeof zflag_append_message!='undefined'){
t41=zflag_append_message;
zflag_append_message=0;
}
if(typeof zflag_multi_param!='undefined'){
d31="&mp="+zflag_multi_param;
zflag_multi_param="";
}
if(typeof zflag_smooth!='undefined'){
w25+="&ssm="+zflag_smooth;
}
if(typeof zflag_slide_speed!='undefined'){
w25+="&ssp="+zflag_slide_speed;
}
if(typeof zflag_slider_close_text!='undefined'){
w25+="&sct="+zflag_slider_close_text;
}
if(typeof zflag_page!='undefined'&&zflag_page!='[INSERT_PAGE_URL]'){
y6=zflag_page;
zflag_page='';
}
if(typeof zflag_ref!='undefined'&&zflag_ref!='[INSERT_REFERER_URL]'){
t20=zflag_ref;
zflag_ref='';
}
if(typeof zd_pg_id=='undefined'){
zd_pg_id=(new Date).getTime();
}
var d19="d1,d2,d3,d4,d5,d6,d7,d8,d9,da,db,dc,dd,de,df".split(",");
function B17(){
var p20=new Array();
for(var i=0;i<d19.length;i++){
p20[i]=d19[i].substring(1);
}
return p20;
}
function F15(){
var o26=d19;var a6=new Array();var c14=new RegExp(",","g");
for(var i=0;i<o26.length;i++){
if(eval('typeof(zflag_'+d19[i]+')!="undefined"')){
a6[i]=eval('zflag_'+d19[i]);
if(a6[i]!=""){
a6[i]=a6[i].replace(c14,"Z");
}}}
return a6;
}
n40=B17();
e23=F15();
for(var i=0;i<e23.length;i++){
if(e23[i]!=""&&typeof e23[i]!='undefined'){
t25[t25.length]=n40[i]+":"+e23[i];
}}
if(t25.length!=0){
a32='&dm='+t25;
}
var zzStr='';
if(typeof zzCountry=='undefined'){
var zzCountry=255;}
if(typeof zzMetro=='undefined'){
var zzMetro=0;}
if(typeof zzState=='undefined'){
var zzState=0;}var zzSection=z8;var zzPbNId=w49;var zzPbEId=y50;var zzPbAId=i51;var zzPbCId=w50;var zzPbGeoLvl=c50;var zzPbk=c51;
if(typeof zzPbk=='undefined'){
zzPbk=-1;
}
var zzPbSId=q51;var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';var zzPat='';var zzSkip='';var zzExp='';var zzTrd='';var zzPos=0;var zzNw=0;var zzCh=0;
var zzDmCodes=new Array();var zzDmValues=new Array();var zzBr=99;var zzLang=99;var zzAGrp=0;var zzAct=new Array();var zzActVal=new Array();
if(v14<0||v14>159){
v14=1;
}
var p11=new Array();
function B0(zp_label){
if(!p11[zp_label]){
var e37=document.cookie;var t7=new Array();var z16=new Array();
t7=e37.split(';');
var p35=(t7!=null)?t7.length:0;
for(var i=0;i<p35;i++){
t7[i]=t7[i].replace(/^\s/,'');
z16=t7[i].split('=');
p11[z16[0]]=z16[1];
}}
if(p11[zp_label]){
return p11[zp_label];
}else{
return '';
}}
function F67(){
var a45=new Date();var v51=new Date(a45.getFullYear(),0,1,0,0,0,0);var a47=new Date(a45.getFullYear(),6,1,0,0,0,0);var q50=Math.max(v51.getTimezoneOffset(),a47.getTimezoneOffset());
return-q50/60;
}
p34=F67();
function U11(isJsTag){
var d21="";
try{
var c31=U2(B18(isJsTag));var c24=F10().split("?")[0];var y30=U2(decodeURIComponent((y6)));
d21=encodeURIComponent(c31+"_"+c24+"_"+y30+"_"+B26(c24)+"_"+U17()+"_"+y6);
}catch(t){}
return d21;
}
function zzOVV(){function a(a){try{if(window.top==window)return a.OnPage;for(var b=window,c=0;b.parent!=b&&1e3>c;){if(b.parent.document.domain!=b.document.domain)return a.CrossDomainIframe;b=b.parent}return a.SameDomainIframe}catch(d){}return a.CrossDomainIframe}this.DEBUG=!1,this.asset=null,this.positionInterval,this.userAgent=window.testOvvConfig&&window.testOvvConfig.userAgent?window.testOvvConfig.userAgent:navigator.userAgent,this.servingScenarioEnum={OnPage:1,SameDomainIframe:2,CrossDomainIframe:3},this.servingScenario=a(this.servingScenarioEnum),this.IN_IFRAME=this.servingScenario!=this.servingScenarioEnum.OnPage,this.IN_XD_IFRAME=this.servingScenario==this.servingScenarioEnum.CrossDomainIframe,this.geometrySupported=!this.IN_XD_IFRAME;var b=new OVVBrowser(this.userAgent);this.browser=b.getBrowser(),this.browserIDEnum=b.getBrowserIDEnum();var c=1e3;this.interval=c,this.releaseVersion="OVVRELEASEVERSION",this.buildVersion="OVVBUILDVERSION";var d={},e=[],f=1e3,g=[];this.addAsset=function(a){d.hasOwnProperty(a.getId())||(d[a.getId()]=a,this.asset=a)},this.removeAsset=function(a){delete d[a.getId()]},this.getAssetById=function(a){return d[a]},this.getAds=function(){var a={};for(var b in d)d.hasOwnProperty(b)&&(a[b]=d[b]);return a},this.subscribe=function(a,b,c,d){if(d)for(key in e[b])e[b][key]&&i(e[b][key].eventName,a)&&j(function(){c(b,e[b][key])});for(key in a)g[a[key]+b]||(g[a[key]+b]=[]),g[a[key]+b].push({Func:c})},this.publish=function(a,b,c){var d={eventName:a,eventTime:h(),ovvArgs:c};if(e[b]||(e[b]=[]),e[b].length<f&&e[b].push(d),a&&b&&g[a+b]instanceof Array)for(var i=0;i<g[a+b].length;i++){var k=g[a+b][i];k&&k.Func&&"function"==typeof k.Func&&j(function(){k.Func(b,d)})}},this.getAllReceivedEvents=function(a){return e[a]};var h=function(){"use strict";return Date.now?Date.now():(new Date).getTime()},i=function(a,b){for(var c=0;c<b.length;c++)if(b[c]===a)return!0;return!1},j=function(a){try{var b=a();return void 0!==b?b:!0}catch(c){return!1}}}function OVVCheck(){this.clientHeight=-1,this.clientWidth=-1,this.error="",this.focus=null,this.fps=-1,this.id="",this.beaconsSupported=null,this.geometrySupported=null,this.geometryViewabilityState="",this.beaconViewabilityState="",this.cssViewabilityState="",this.domViewabilityState="",this.technique="",this.beacons=new Array,this.inIframe=null,this.objBottom=-1,this.objLeft=-1,this.objRight=-1,this.objTop=-1,this.percentViewable=-1,this.percentObscured=0,this.viewabilityState=""}function OVVBrowser(a){function b(a,b){var c=function(){for(var b={ID:0,name:"",version:""},c=a,f=0;f<e.length;f++)if(null!=c.match(new RegExp(e[f].brRegex))){if(b.ID=e[f].id,b.name=e[f].name,null==e[f].verRegex)break;var g=c.match(new RegExp(e[f].verRegex+"[0-9]*"));if(null!=g){var h=g[0].match(new RegExp(e[f].verRegex));b.version=g[0].replace(h[0],"")}var i=c.match(new RegExp(d+"[0-9\\.]*"));null!=i&&(b.os=i[0]);break}return b},d="(Windows NT)",e=[{id:4,name:"Opera",brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,name:"MSIE",brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7",verRegex:"(MSIE |rv:)"},{id:2,name:"Firefox",brRegex:"Firefox",verRegex:"Firefox/"},{id:3,name:"Chrome",brRegex:"Chrome",verRegex:"Chrome/"},{id:5,name:"Safari",brRegex:"Safari|(OS |OS X)[0-9].*AppleWebKit",verRegex:"Version/"}];return c()}var c={MSIE:1,Firefox:2,Chrome:3,Opera:4,safari:5},d=b(a);this.getBrowser=function(){return d},this.getBrowserIDEnum=function(){return c}}function OVVBeaconSupportCheck(){var a=new OVVBrowser($zovvObj.userAgent),b=a.getBrowser(),c=a.getBrowserIDEnum();this.supportsBeacons=function(){var a=6.3,d=b.ID==c.MSIE,e=b.version>=11,f=b.os?b.os.split(" "):[0],g=f[f.length-1],h=g>=a;return!d||e&&h}}function ZOVVAsset(a,b){var c,d,e=13,f=Math.sqrt(2),g=0,h=1,i=2,j=3,k=4,l=5,m=6,n=7,o=8,p=9,q=10,r=11,s=12,t=13,u=500,v=a,w=0,x=$zovvObj.DEBUG?20:1,y=b.geometryViewabilityCalculator,z=function(){return null},A=function(){return null},B=new OVVBeaconSupportCheck;this.checkViewability=function(){var a=new OVVCheck;if(a.id=v,a.inIframe=$zovvObj.IN_IFRAME,a.geometrySupported=$zovvObj.geometrySupported,a.focus=S(),!d)return a.error="Player not found!",a;if(C(a,d)===!0){if(!$zovvObj.DEBUG)return a;a.cssViewabilityState=OVVCheck.UNVIEWABLE}if(D(a,d)===!0){if(!$zovvObj.DEBUG)return a;a.domViewabilityState=OVVCheck.UNVIEWABLE}if(!B.supportsBeacons()&&a.geometrySupported===!1&&(a.viewabilityState=OVVCheck.UNMEASURABLE,!$zovvObj.DEBUG))return a;if(a.geometrySupported){if(a.technique=OVVCheck.GEOMETRY,F(a,d),a.viewabilityState=a.percentViewable>=1&&a.focus?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE,!$zovvObj.DEBUG)return a;a.geometryViewabilityState=a.viewabilityState}var b=L(0),c=O(0);if(b&&b.isViewable&&c){var e=K(c)&&b.isViewable();a.beaconsSupported=!e}else a.beaconsSupported=!1;if(H())if(a.beaconsSupported){a.technique=OVVCheck.BEACON;var f=G(a);null===f?(a.viewabilityState=OVVCheck.UNMEASURABLE,$zovvObj.DEBUG&&(a.beaconViewabilityState=OVVCheck.UNMEASURABLE)):(a.viewabilityState=f?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE,$zovvObj.DEBUG&&(a.beaconViewabilityState=f?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE))}else a.viewabilityState=OVVCheck.UNMEASURABLE;else a.technique=OVVCheck.BEACON,a.viewabilityState=OVVCheck.NOT_READY;if($zovvObj.DEBUG)if(a.technique="",null===a.geometryViewabilityState&&null===a.beaconViewabilityState)a.viewabilityState=OVVCheck.UNMEASURABLE;else{var g=a.beaconViewabilityState===OVVCheck.VIEWABLE,h=a.cssViewabilityState===OVVCheck.VIEWABLE,i=a.domViewabilityState===OVVCheck.VIEWABLE,j=a.geometryViewabilityState===OVVCheck.VIEWABLE;a.viewabilityState=h||i||g||j?OVVCheck.VIEWABLE:OVVCheck.UNVIEWABLE}return a},this.beaconStarted=function(b){$zovvObj.DEBUG&&L(b).debug&&L(b).debug(),0!==b&&(w++,H()&&d["onJsReady"+a]())},this.dispose=function(){for(var a=1;e>=a;a++){var b=O(a);b&&(delete w[a],b.parentElement.removeChild(b))}clearInterval(window.$zovvObj.positionInterval),window.$zovvObj.removeAsset(this)},this.getId=function(){return v},this.getPlayer=function(){return d};var C=function(a,b){var c=window.getComputedStyle(b,null),d=c.getPropertyValue("visibility"),e=c.getPropertyValue("display");return"hidden"==d||"none"==e?(a.technique=OVVCheck.CSS_INVISIBILITY,a.viewabilityState=OVVCheck.UNVIEWABLE,!0):!1},D=function(a,b){var c=b.getBoundingClientRect(),d=12,e=c.left+d,f=c.right-d,g=c.top+d,h=c.bottom-d,i=Math.floor(c.left+c.width/2),j=Math.floor(c.top+c.height/2),k=[{x:e,y:g},{x:i,y:g},{x:f,y:g},{x:e,y:j},{x:i,y:j},{x:f,y:j},{x:e,y:h},{x:i,y:h},{x:f,y:h}];for(var l in k)if(k[l]&&k[l].x>=0&&k[l].y>=0&&(elem=document.elementFromPoint(k[l].x,k[l].y),null!=elem&&elem!=b&&!b.contains(elem)&&(overlappingArea=E(c,elem.getBoundingClientRect()),overlappingArea>0&&(a.percentObscured=100*E(c,elem.getBoundingClientRect()),a.percentObscured>50))))return a.percentViewable=100-a.percentObscured,a.technique=OVVCheck.DOM_OBSCURING,a.viewabilityState=OVVCheck.UNVIEWABLE,!0;return!1},E=function(a,b){var c=a.width*a.height,d=Math.max(0,Math.min(a.right,b.right)-Math.max(a.left,b.left)),e=Math.max(0,Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));return d*e/c},F=function(a,b){a.percentObscured=a.percentObscured||0;var c=y.getViewabilityState(b,window);return c.error||(a.clientWidth=c.clientWidth,a.clientHeight=c.clientHeight,a.percentViewable=c.percentViewable-a.percentObscured,a.objTop=c.objTop,a.objBottom=c.objBottom,a.objLeft=c.objLeft,a.objRight=c.objRight),c},G=function(a){if(!H())return null;var b=0,c=0,f=0,g=0;a.beacons=new Array(e);var u=d.getClientRects?d.getClientRects()[0]:{top:-1,bottom:-1,left:-1,right:-1};a.objTop=u.top,a.objBottom=u.bottom,a.objLeft=u.left,a.objRight=u.right;for(var v=0;e>=v;v++)if(0!==v){var w=L(v),x=O(v),y=w.isViewable(),z=K(x);if(a.beacons[v]=y&&z,y)switch(b++,v){case i:case j:case k:case l:c++;break;case m:case n:case o:case p:f++;break;case q:case r:case s:case t:g++}}if(b===e)return!0;var A=a.beacons;return A[h]===!1?g>=3||f>=3||c>=3?null:!1:A[h]===!0&&(A[i]===!0&&A[j]===!0||A[i]===!0&&A[k]===!0||A[j]===!0&&A[l]===!0||A[k]===!0&&A[l]===!0)?!0:A[h]===!0&&4==f?!0:(!A[i]||!A[l]||A[m]&&A[q]&&A[h]&&A[t]&&A[p])&&(!A[k]||!A[j]||A[o]&&A[s]&&A[h]&&A[r]&&A[n])?!1:null},H=function(){return d?w===e:!1},I=function(a){var b="LRU_FWS_NOCAEB",c=b.split("").reverse().join("");if(""!=a&&a!=c){for(var d=0;e>=d;d++){var f=document.createElement("DIV");f.id="OVVBeaconContainer_"+d+"_"+v,f.style.position="absolute",f.style.zIndex=$zovvObj.DEBUG?99999:-99999;var g='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+x+'" height="'+x+'"><param name="movie" value="'+a+'" /><param name="quality" value="low" /><param name="flashvars" value="id='+v+"&index="+d+'" /><param name="bgcolor" value="#ffffff" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><!--[if!IE]>--><object id="OVVBeacon_'+d+"_"+v+'" type="application/x-shockwave-flash" data="'+a+'" width="'+x+'" height="'+x+'"><param name="quality" value="low" /><param name="flashvars" value="id='+v+"&index="+d+'" /><param name="bgcolor" value="#ff0000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><!--<![endif]--></object>';f.innerHTML=g,document.body.insertBefore(f,document.body.firstChild)}J.bind(this)(),this.positionInterval=setInterval(J.bind(this),u)}},J=function(){if(H()){var a=d.getClientRects()[0];if(!c||!a||c.left!==a.left||c.right!==a.right||c.top!==a.top||c.bottom!==a.bottom){c=a;for(var b=a.right-a.left,u=a.bottom-a.top,v=b/(1+f),w=u/(1+f),y=b/f,z=u/f,A=0;e>=A;A++){var B=a.left+document.body.scrollLeft,C=a.top+document.body.scrollTop;switch(A){case g:B=-1e5,C=-1e5;break;case h:B+=(b-x)/2,C+=(u-x)/2;break;case i:break;case j:B+=b-x;break;case k:C+=u-x;break;case l:B+=b-x,C+=u-x;break;case m:B+=(b-y)/2,C+=(u-z)/2;break;case n:B+=(b-y)/2+y,C+=(u-z)/2;break;case o:B+=(b-y)/2,C+=(u-z)/2+z;break;case p:B+=(b-y)/2+y,C+=(u-z)/2+z;break;case q:B+=(b-v)/2,C+=(u-w)/2;break;case r:B+=(b-v)/2+v,C+=(u-w)/2;break;case s:B+=(b-v)/2,C+=(u-w)/2+w;break;case t:B+=(b-v)/2+v,C+=(u-w)/2+w}A>=m&&(B-=x/2,C-=x/2);var D=O(A);D.style.left=B+"px",D.style.top=C+"px"}}}},K=function(a){if(!a)return!1;var b=Math.max(document.body.clientWidth,window.innerWidth),c=Math.max(document.body.clientHeight,window.innerHeight),d=a.getClientRects()[0];return d.top<c&&d.bottom>0&&d.left<b&&d.right>0},L=function(a){return z(a)}.memoize(),M=function(a){return document.getElementById("OVVBeacon_"+a+"_"+v)},N=function(a){var b=document.getElementById("OVVFrame_"+v+"_"+a),c=null;return b&&(c=b.contentWindow),c},O=function(a){return A(a)}.memoize(),P=function(a){return document.getElementById("OVVBeaconContainer_"+a+"_"+v)},Q=function(a){return document.getElementById("OVVFrame_"+v+"_"+a)},R=function(){var a=document.getElementById(v);return a},S=function(){return"undefined"!==document.hidden&&document.hidden===!0?!1:$zovvObj.IN_XD_IFRAME?!0:window.top.document.hasFocus?window.top.document.hasFocus():!0};d=R(),0==$zovvObj.geometrySupported||$zovvObj.DEBUG?$zovvObj.browser.ID===$zovvObj.browserIDEnum.Firefox?(z=N,A=Q):(z=M,A=P,I.bind(this)("BEACON_SWF_URL")):d&&d["onJsReady"+a]&&setTimeout(function(){d["onJsReady"+a]()},5)}function OVVGeometryViewabilityCalculator(){this.getViewabilityState=function(d,e){var f,g=a();if(g.area==1/0)return{error:"Failed to determine viewport"};var h=d.getBoundingClientRect(),i=h.width*h.height;if(g.area/i<.5)f=Math.floor(100*g.area/i),j=g;else{var j=b(window.top),k=c(d,e);k.bottom>j.height&&(k.height-=k.bottom-j.height),k.top<0&&(k.height+=k.top),k.left<0&&(k.width+=k.left),k.right>j.width&&(k.width-=k.right-j.width),f=Math.floor(100*(k.width*k.height)/i)}return{clientWidth:j.width,clientHeight:j.height,objTop:h.top,objBottom:h.bottom,objLeft:h.left,objRight:h.right,percentViewable:f}};var a=function(){for(var a=b(window),c=a.area,d=window;d!=window.top;)d=d.parent,viewPortSize=b(d),viewPortSize.area<c&&(c=viewPortSize.area,a=viewPortSize);return a},b=function(a){var b={width:1/0,height:1/0,area:1/0};return!isNaN(a.document.body.clientWidth)&&a.document.body.clientWidth>0&&(b.width=a.document.body.clientWidth),!isNaN(a.document.body.clientHeight)&&a.document.body.clientHeight>0&&(b.height=a.document.body.clientHeight),a.document.documentElement&&a.document.documentElement.clientWidth&&!isNaN(a.document.documentElement.clientWidth)&&(b.width=a.document.documentElement.clientWidth),a.document.documentElement&&a.document.documentElement.clientHeight&&!isNaN(a.document.documentElement.clientHeight)&&(b.height=a.document.documentElement.clientHeight),a.innerWidth&&!isNaN(a.innerWidth)&&(b.width=Math.min(b.width,a.innerWidth)),a.innerHeight&&!isNaN(a.innerHeight)&&(b.height=Math.min(b.height,a.innerHeight)),b.area=b.height*b.width,b},c=function(a,b){var e=b,f=b.parent,g={width:0,height:0,left:0,right:0,top:0,bottom:0};if(a){var h=d(a,b);if(h.width=h.right-h.left,h.height=h.bottom-h.top,g=h,e!=f){var i=c(e.frameElement,f);i.bottom<g.bottom&&(i.bottom<g.top&&(g.top=i.bottom),g.bottom=i.bottom),i.right<g.right&&(i.right<g.left&&(g.left=i.right),g.right=i.right),g.width=g.right-g.left,g.height=g.bottom-g.top}}return g},d=function(a,b){var c=b,e=b.parent,f={left:0,right:0,top:0,bottom:0};if(a){var g=a.getBoundingClientRect();c!=e&&(f=d(c.frameElement,e)),f={left:g.left+f.left,right:g.right+f.left,top:g.top+f.top,bottom:g.bottom+f.top}}return f}}function getViewabilityObject(a){var b=new ZOVVAsset(a,{geometryViewabilityCalculator:new OVVGeometryViewabilityCalculator});return b}function zViewability(){}function ViewabilityMonitor(a,b){this.ovvAssetObject=b,this.onAdViewableImpressionCB=function(){},this.onTwentyPercentViewableCB=function(){},this.onFourtyPercentViewableCB=function(){},this.onSixtyPercentViewableCB=function(){},this.onEightyPercentViewableCB=function(){},this.onHundredPercentViewableCB=function(){},this.onViewableStateChangeCB=function(a,b){},this.onUnmesurableCB=function(){},this.config={IntervalForPullingViewablityMs:100,debugMode:!1},this.setConfig(a),this.pullViewabilityTimer={},this.analyerObj=new ViewabilityAnalyzer,this.lastCallback=0,this.lastViabilityState="",this.lastIabViewableState="",this.isIabViewableFired=!1,this.isUserIntract=!1,this.calculateViewabilityWith=50,this.viewableSince=zViewabilityUtils.getFutureDate(),this.IABLARGEADSIZEPIXEL=242500,this.config.debugMode&&ZVWiget.initViewability()}function ViewabilityAnalyzer(){}function ZState(){}function zViewabilityUtils(){}function zCallbackManager(){}function ZVWiget(){}OVVCheck.UNMEASURABLE="unmeasurable",OVVCheck.VIEWABLE="viewable",OVVCheck.UNVIEWABLE="unviewable",OVVCheck.NOT_READY="not_ready",OVVCheck.BEACON="beacon",OVVCheck.GEOMETRY="geometry",OVVCheck.CSS_INVISIBILITY="css_invisibility",OVVCheck.DOM_OBSCURING="dom_obscuring",Function.prototype.memoized=function(a){return this._cacheValue=this._cacheValue||{},void 0!==this._cacheValue[a]?this._cacheValue[a]:this._cacheValue[a]=this.apply(this,arguments)},Function.prototype.memoize=function(){var a=this;return function(){return a.memoized.apply(a,arguments)}};var newOVV=new zzOVV;window.$zovvObj=window.$zovvObj||newOVV;for(var i in newOVV)$zovvObj.hasOwnProperty(i)||($zovvObj[i]=newOVV[i]);window.$zovvObj.addAsset(new ZOVVAsset("OVVID",{geometryViewabilityCalculator:new OVVGeometryViewabilityCalculator})),zViewability.getViewabilityMonitor=function(a,b,c){try{var d=getViewabilityObject(a.id),e=d.checkViewability();if(""==e.viewabilityState||e.viewabilityState==ZState.UNMEASURABLE||e.viewabilityState==ZState.NOT_READY)c("Can't measure viewability");else{var f=new ViewabilityMonitor(a,d);b(f),f.startViewability()}}catch(g){a.debugMode&&console.error(g),c("Error due to construct object")}},ViewabilityMonitor.prototype={startViewability:function(){var a=this,b=function(){zViewabilityUtils.log("debug","startAnalysing ",a.config.debugMode);var b=a.ovvAssetObject.checkViewability(),c=a.createStateObject(b);ZVWiget.updatePercentViewable(a.config.debugMode,c.viewablePercentage,c.viewabilityState);var d=function(){a.lastCallback=zCallbackManager.ZERO_PERCENTAAGE.Name},e=function(){a.lastCallback=zCallbackManager.TWENTY_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onTwentyPercentViewableCB,[])},f=function(){a.lastCallback=zCallbackManager.FORTY_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onFourtyPercentViewableCB,[])},g=function(){a.lastCallback=zCallbackManager.SIXTY_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onSixtyPercentViewableCB,[])},h=function(){a.lastCallback=zCallbackManager.EIGHTY_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onEightyPercentViewableCB,[])},i=function(){a.lastCallback=zCallbackManager.HUNDRED_PERCENTAGE.Name,zViewabilityUtils.asyncCallback(a.onHundredPercentViewableCB,[])},j=function(b){a.lastViabilityState=b,zViewabilityUtils.asyncCallback(a.onViewableStateChangeCB,[b])},k=function(){a.lastCallback=ZState.UNMEASURABLE,zViewabilityUtils.asyncCallback(a.onUnmesurableCB,[])};a.analyerObj.analyzeViewability(c,a.lastCallback,d,e,f,g,h,i,j,a.lastViabilityState,k,a.config),a.calculateViewabilityWith=a.getIabViewabilityCriteria(c.height,c.width);var l=function(b,c,d){a.isIabViewableFired=!0,ZVWiget.appendLog("AdViewableImpression",a.config.debugMode),zViewabilityUtils.asyncCallback(a.onAdViewableImpressionCB,[b,c,d])},m=function(b){a.lastIabViewableState=b,a.lastIabViewableState==ZState.VIEWABLE?a.viewableSince=zViewabilityUtils.getCurrentTime():a.lastIabViewableState==ZState.UNVIEWABLE&&(a.viewableSince=zViewabilityUtils.getFutureDate())};a.analyerObj.analyzeIabViewability(c,a.isIabViewableFired,l,a.isUserIntract,a.calculateViewabilityWith,a.viewableSince,a.lastIabViewableState,m,zViewabilityUtils.getCurrentTime(),a.config)};b(),this.pullViewabilityTimer=setInterval(b,this.config.IntervalForPullingViewablityMs)},createStateObject:function(a){return{viewablePercentage:Math.round(a.percentViewable),viewabilityState:a.viewabilityState,height:zViewabilityUtils.getElementHeight(this.config.id),width:zViewabilityUtils.getElementWidth(this.config.id),focus:a.focus}},getIabViewabilityCriteria:function(a,b){var c=a*b;return c<this.IABLARGEADSIZEPIXEL?50:30},onAdViewableImpression:function(a){this.onAdViewableImpressionCB=a},onTwentyPercentViewable:function(a){this.onTwentyPercentViewableCB=a},onFourtyPercentViewable:function(a){this.onFourtyPercentViewableCB=a},onSixtyPercentViewable:function(a){this.onSixtyPercentViewableCB=a},onEightyPercentViewable:function(a){this.onEightyPercentViewableCB=a},onHundredPercentViewable:function(a){this.onHundredPercentViewableCB=a},onViewableStateChange:function(a){this.onViewableStateChangeCB=a},onUnmesurable:function(a){this.onUnmesurableCB=a},userIntraction:function(){this.isUserIntract=!0},getViewability:function(){var a=this.createStateObject(this.ovvAssetObject.checkViewability());return a},stopViewabilityMonitor:function(){clearInterval(this.pullViewabilityTimer)},setConfig:function(a){if(a)for(var b in a)a.hasOwnProperty(b)&&(this.config[b]=a[b])}},ViewabilityAnalyzer.prototype={analyzeViewability:function(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t=!1;if(zViewabilityUtils.log("debug"," viewablePercentage "+a.viewablePercentage+" lastCallback "+b,l.debugMode),isNaN(a.viewablePercentage)&&b!=ZState.UNMEASURABLE&&a.viewabilityState==ZState.UNMEASURABLE)return k(),!1;s=(a.viewablePercentage==zCallbackManager.ZERO_PERCENTAAGE.Min||a.viewablePercentage<zCallbackManager.ZERO_PERCENTAAGE.Min)&&a.focus,s&&(t=zCallbackManager.ZERO_PERCENTAAGE.Name),m=a.viewablePercentage>=zCallbackManager.TWENTY_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.TWENTY_PERCENTAGE.Max&&a.focus,m&&(t=zCallbackManager.TWENTY_PERCENTAGE.Name),n=a.viewablePercentage>=zCallbackManager.FORTY_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.FORTY_PERCENTAGE.Max&&a.focus,n&&(t=zCallbackManager.FORTY_PERCENTAGE.Name),o=a.viewablePercentage>=zCallbackManager.SIXTY_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.SIXTY_PERCENTAGE.Max&&a.focus,o&&(t=zCallbackManager.SIXTY_PERCENTAGE.Name),p=a.viewablePercentage>=zCallbackManager.EIGHTY_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.EIGHTY_PERCENTAGE.Max&&a.focus,p&&(t=zCallbackManager.EIGHTY_PERCENTAGE.Name),q=a.viewablePercentage>=zCallbackManager.HUNDRED_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.HUNDRED_PERCENTAGE.Max&&a.focus,q&&(t=zCallbackManager.HUNDRED_PERCENTAGE.Name);var u=function(a){switch(w){case 0:c();break;case 20:d();break;case 40:e();break;case 60:f();break;case 80:g();break;case 100:h()}};if(t>b){var v=t;if(t=b,b=v,t!==!1)for(var w=t+zCallbackManager.FREQUENCY;b>=w;w+=zCallbackManager.FREQUENCY)u(w)}else if(b>t&&t!==!1)for(var w=b-zCallbackManager.FREQUENCY;w>=t;w-=zCallbackManager.FREQUENCY)u(w);r=a.viewablePercentage>zCallbackManager.ONSTATECHANGE_PERCENTAGE.Min&&a.viewablePercentage<=zCallbackManager.ONSTATECHANGE_PERCENTAGE.Max&&a.focus,r&&j!=ZState.VIEWABLE?i(ZState.VIEWABLE):r||j==ZState.UNVIEWABLE||i(ZState.UNVIEWABLE)},analyzeIabViewability:function(a,b,c,d,e,f,g,h,i,j){if(!b){a.viewablePercentage>=e?g!=ZState.VIEWABLE&&h(ZState.VIEWABLE):g!=ZState.UNVIEWABLE&&h(ZState.UNVIEWABLE);var k=i.getTime()-f.getTime();zViewabilityUtils.log("debug"," currentTime-"+i+" viewableSince-"+f,j.debugMode),zViewabilityUtils.log("debug"," diff "+k,j.debugMode),(k>=1e3||d)&&c(d,a.height,a.width)}}},ZState.VIEWABLE="viewable",ZState.UNVIEWABLE="unviewable",ZState.UNMEASURABLE="unmeasurable",ZState.NOT_READY="not_ready",zViewabilityUtils.getCurrentTime=function(){return new Date},zViewabilityUtils.getFutureDate=function(){var a=new Date;return a.setFullYear(4e3),a},zViewabilityUtils.log=function(a,b,c){if(c)switch(a.toLowerCase()){case"warn":console.warn(b);break;case"info":console.info(b);break;case"error":console.error(b);break;case"trace":console.trace(b);break;case"bizlogic":"undefined"!=typeof console.bizlogic&&console.bizlogic(b);break;default:console.log(b)}},zViewabilityUtils.asyncCallback=function(a,b){setTimeout(function(){a.apply(this,b)},0)},zViewabilityUtils.getElementHeight=function(a){return document.getElementById(a).clientHeight},zViewabilityUtils.getElementWidth=function(a){return document.getElementById(a).clientWidth},zCallbackManager.FREQUENCY=20,zCallbackManager.ZERO_PERCENTAAGE={Min:0,Max:0,Name:0},zCallbackManager.TWENTY_PERCENTAGE={Min:20,Max:39,Name:20},zCallbackManager.FORTY_PERCENTAGE={Min:40,Max:59,Name:40},zCallbackManager.SIXTY_PERCENTAGE={Min:60,Max:79,Name:60},zCallbackManager.EIGHTY_PERCENTAGE={Min:80,Max:99,Name:80},zCallbackManager.HUNDRED_PERCENTAGE={Min:100,Max:100,Name:100},zCallbackManager.UNMEASURABLE_PERCENTAGE={Min:-1,Max:-1,Name:"Unmeasurable"},zCallbackManager.ONSTATECHANGE_PERCENTAGE={Min:1,Max:100,Name:"ViewableStateChange"},ZVWiget.domainPath="http://cz.iozo.com/",ZVWiget.initViewability=function(){if(null==document.getElementById("chip")){this.loadCSS();var a='<div id="viewability-main-container"><div id="viewability-wrapper"><div id="viewability-header"><img id="viewability-logo" src="'+ZVWiget.domainPath+'jsc/images/viewability/logo.png"><span class="viewability-title">VIEWABILITY INFO</span></div>';a+='<div id="viewability-content"><div class="prop-row"><span class="prop-name">Viewability</span><span id="viewability" class="prop-value">Viewable</span></div>',a+='<div class="prop-row"><span class="prop-name">Viewable %</span><span class="prop-value" id="percentViewable">100%</span></div></div></div></div>';var b=document.createElement("div");b.innerHTML=a,document.body.appendChild(b)}},ZVWiget.appendLog=function(a,b){if(b){var c=document.createElement("div");c.setAttribute("class","prop-row"),c.innerHTML="<span class='prop-name'>"+a+"</span><span class='prop-value'><span class='tick'></span></span>",document.getElementById("viewability-content").appendChild(c)}},ZVWiget.updatePercentViewable=function(a,b,c){a&&(document.getElementById("percentViewable").innerHTML=b,document.getElementById("viewability").innerHTML=c,c==ZState.VIEWABLE?document.getElementById("viewability").style.color="green":(document.getElementById("viewability").style.color="#FF0000",document.getElementById("percentViewable").innerHTML=""))},ZVWiget.loadCSS=function(){var a='#viewability-main-container{position:fixed;display:block;width:292px;height:auto;top:5px;right:5px;border:1px solid #AAA;padding:5px;box-shadow:0px 0px 8px #888888;background-color:white;font-family:"Roboto",sans-serif;font-size:15px;}';a+="#viewability-main-container #viewability-wrapper{width:100%;height:auto;border:1px solid #E8E8E8;}#viewability-wrapper #viewability-header{height:16px;background-color:#32aed7;padding:10px;}",a+="#viewability-header #viewability-logo{position:relative;top:-5px;}#viewability-header .viewability-title{color:#fff;text-transform:uppercase;float:right;font-size:14px;vertical-align:middle;}",a+="#viewability-content .prop-row{margin-left:5px;margin-right:5px;padding:7px 5px;border-bottom:1px solid #E8E8E8;line-height:24px;}",a+="#viewability-content .prop-row:last-child{border-bottom:none;}.prop-row .prop-value{float:right;}",a+='.prop-value .tick{background:url("'+ZVWiget.domainPath+'jsc/images/viewability/tick.png")no-repeat;width:24px;height:24px;display:inline-block;}',head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style"),style.type="text/css",style.styleSheet?style.styleSheet.cssText=a:style.appendChild(document.createTextNode(a)),head.appendChild(style)};
function B23(tag_dimid,tag_height,tag_width){
this.tag_dimid=tag_dimid;
this.tag_height=tag_height;
this.tag_width=tag_width;
}
function U23(p2,scrWidth,scrHeight){
if(typeof p2=='undefined'||p2.length==0||typeof scrWidth=='undefined'||typeof scrHeight=='undefined'){
return;
}
p2.sort(B63);
p2.sort(F33);
var z50=p2[p2.length-1];
for(i=0;i<p2.length;i++){
if(parseInt(p2[i].tag_width)<=parseInt(scrWidth)&&parseInt(p2[i].tag_height)<=parseInt(scrHeight)){
return p2[i].tag_dimid;
}}
for(i=0;i<p2.length;i++){
if(parseInt(p2[i].tag_width)<=parseInt(scrWidth)){
return p2[i].tag_dimid;
}}
p2.reverse();
p2.sort(F56);
for(i=0;i<p2.length;i++){
if(parseInt(p2[i].tag_height)<=parseInt(scrHeight)){
return p2[i].tag_dimid;
}}
return z50.tag_dimid;
}
function F33(a,b){
if(parseInt(a.tag_height)>parseInt(b.tag_height)&&parseInt(a.tag_width)==parseInt(b.tag_width)){
return-1;
}else if(parseInt(a.tag_height)<parseInt(b.tag_height)&&parseInt(a.tag_width)==parseInt(b.tag_width)){
return 1;
}else{
return 0;
}}
function B63(a,b){
if(parseInt(a.tag_width)>parseInt(b.tag_width)){
return-1;
}else if(parseInt(a.tag_width)<parseInt(b.tag_width)){
return 1;
}else{
return 0;
}}
function F56(a,b){
if(parseInt(a.tag_height)>parseInt(b.tag_height)){
return-1;
}else if(parseInt(a.tag_height)<parseInt(b.tag_height)){
return 1;
}else{
return 0;
}}
function F59(msize,scrWidth,scrHeight){
if(typeof msize=='undefined'){
return;
}
var arr=msize.replace(/^\s+|\s+$/g,'').split(",");var p2=new Array();
for(i=0;i<arr.length;i++){
var a42=arr[i].replace(/^\s+|\s+$/g,'');
if(null!=a42.match(/^\d+x\d+:\d+$/)){
p2.push(U47(a42));
}}
return U23(p2,scrWidth,scrHeight);
}
function U47(val){
var arr=val.split(":");var r43=arr[0].split("x");
return new B23(arr[1],r43[1],r43[0]);
}
function B18(isJSTag){
var z7='';var o42=U17();
try{
if(o42>1){
var win=U35(o42);
if(U27(win)){
z7=(typeof(win.document.referrer)=='undefined'?"":win.document.referrer.split("?")[0]);
}
else{
z7=(typeof(win.location.href)=='undefined'?"":win.location.href.split("?")[0]);
}
}else{
if(isJSTag){
z7=(typeof(location.href)=='undefined'?"":location.href.split("?")[0]);
}else{
z7=(typeof(document.referrer)=='undefined'?"":document.referrer.split("?")[0]);
}}
}catch(err){}
return z7;
}
function B14(isJSTag){
var t40='';
try{
if(isJSTag){
t40=(typeof(document.referrer)=='undefined'?"":encodeURIComponent(document.referrer.split("?")[0]));
}
}catch(e){}
return t40;
}
function U2(url){
var p0="";
try{
if(url&&url.length>0){
if(url.indexOf("://")>-1){
p0=url.split('/')[2];
}else{
p0=url.split('/')[0];
}}
}catch(t){}
return p0;
}
function F10(){
var url="";
try{
if(!window.location.ancestorOrigins){
return "";
}
url=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]||"";
}catch(t){}
return url;
}
function B26(stackTopUrl){
var r45="";
try{
if(window.location.ancestorOrigins&&stackTopUrl.length>0){
r45=window.location.ancestorOrigins.length-1;
}
}catch(t){}
return r45;
}
function F16(isJSTag,y6){
var z7='';
try{
if(y6!=''){
z7=decodeURIComponent(y6);
z7=z7.split("?")[0];
}else{
z7=B18(isJSTag);
}
var t13=F10();
if(t13!=null&&t13.length>0){
zd_pg_dom=U2(z7);
zd_stack_top_dom=U2(t13);
if(zd_pg_dom!=zd_stack_top_dom){
z7=t13.split("?")[0];
}}
}catch(err){}
return encodeURIComponent(z7);
}
function B16(passedPu){
var t43,detected_dom;
if(typeof(passedPu)!='undefined'&&passedPu!=null&&passedPu!=''){
t43=U2(decodeURIComponent(passedPu));
var t13=F10();
if(t13!=null&&t13.length>0){
detected_dom=U2(t13);
if(t43==detected_dom){
return 1;
}else{
return 2;
}
}else{
return 3;
}}
return '';
}
function U17(){
var p37=0,frame;
do{
try{
frame=frame?frame.parent:window;
p37++;
}catch(t){}
}
while(frame!==window.top&&p37<20);
return p37;
}
function F50(win){
try{
win.document.location&&win.parent.document.location;
return true;
}catch(e){
return false;
}}
function U27(win){
return(win.frameElement&&win.frameElement.tagName=="IFRAME");
}
function B66(win){
return(!F50(win)?false:U27(win));
}
function U35(iframeDepth){
var d33=window;var cnt=0;
while(B66(d33)&&cnt<iframeDepth){
try{
d33=window.parent;
cnt++;
}catch(t){}
}
try{
return d33;
}catch(t){
return window;
}}
var z0="";
if(F6()){
z0=v16+'/fm/'+n9+'/'+r11+'/'+t9+'/fm.js'+'?c='+r11+'&a='+o36+'&f='+t38+'&n='+n9+'&r='+v14+'&d='+t9+'&adm='+y17+'&q='+y31+'&$='+zd_$+t11+w31+'&s='+z8+p27+a39+n31+q35+q31+'&ct='+a38+a32+'&z='+Math.random()+'&tt=0'+d31+'&tz='+p34+'&fw='+o31+'&fh='+z36+'&mw='+w36+'&mh='+w37+'&mxw='+i38+'&mxh='+w32+'&pu='+F16(true,y6)+'&ru='+((t20!='')?encodeURI(t20.split("?")[0]):B14(true))+'&pi='+zd_pg_id+'&apv='+c39+'&ap='+y36+'&ovr='+z39+'&ove='+e36+'&hfs='+n30+'&ce='+r0+'&zpu='+U11(true)+'&tpu='+(B16(y6));
z0='<scr'+'ipt language="javascript" src="'+z0+'" charset='+r0+'></scr'+'ipt>';
}
var w20=B0("ZEDOIDA");
if(!(w20=="OPT_OUT"&&t9==15)){
document.write(z0);
}
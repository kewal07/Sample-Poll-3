//ver2.0.0929
var $Xx={bsrc:0,cid:"12753%3A224",cnl:function(ag1,ag2){var cl=(function(){var bool=document.querySelector("link[rel='canonical']");if(bool!=null){return document.querySelector("link[rel='canonical']").href;}})();if(typeof cl==='undefined'||cl.indexOf('?')>-1){cl=undefined;return cl;}else{var clar=cl.replace(/\/\//g,"/").split(ag1);if(clar.length>2){var lgth=0;var lgst;for(var i=2;i<clar.length;i++){if(clar[2].length==0){cl=undefined;return cl;}
if(clar[i].length>lgth){lgth=clar[i].length;lgst=clar[i];}}
if(lgst.split(ag2).length>3){if(clar.indexOf(lgst)>2){exl=clar.length-clar.indexOf(lgst)
for(var i=0;i<exl;i++){clar.pop();}
if(clar[0]==='http:'||clar[0]==='https:'){
clar.shift();}
return clar.join(ag1);}else{cl=undefined;return cl;}}else if(lgst.split(ag2).length===3){if(clar.indexOf(lgst)>1){exl=clar.length-clar.indexOf(lgst)-1
for(var i=0;i<exl;i++){clar.pop();}
if(clar[0]==='http:'||clar[0]==='https:'){clar.shift();}
return clar.join(ag1);}else{cl=undefined;return cl;}}else{if(clar[0]==='http:'||clar[0]==='https:'){clar.shift();}
if(clar[clar.length-1].indexOf("cms")>-1||clar[clar.length-1].indexOf("htm")>-1){clar.pop();if(clar.length===1){cl=undefined;return cl;}else{return clar.join(ag1);}}else{return clar.join(ag1);}}}else{cl=undefined;return cl;}}},extract:function(){var url=("https:"==document.location.protocol?"https://":"http://")+"ase.clmbtech.com/message";try{var dn=document.domain;if(dn!=null&&typeof $Xx.cnl("/","-")!='undefined'){$Xx.createIframe(url+"?cid="+$Xx.cid+"&val_101="+$Xx.cid+"&val_102="+dn+"&val_120="+$Xx.bsrc+"&val_101=int:"+$Xx.cnl("/","-"));}else{if(dn!=null){$Xx.createIframe(url+"?cid="+$Xx.cid+"&val_101="+$Xx.cid+"&val_102="+dn+"&val_120="+$Xx.bsrc);}}}catch(e){if(typeof console!='undefined'){console.log("Error in processing Rules: "+e);}}}};$Xx.createIframe=function(url){var tempIFrame=document.createElement('iframe');tempIFrame.setAttribute('id',' iframe '+new Date());tempIFrame.setAttribute('src',url.replace(/'/g,"%27"));tempIFrame.style.border='0px';tempIFrame.style.width='0px';tempIFrame.style.height='0px';tempIFrame.style.display='block';document.body.appendChild(tempIFrame)};$Xx.extract()

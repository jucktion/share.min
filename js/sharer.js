var title= document.title,link = encodeURIComponent(document.location.href);
var gp = document.querySelector('.shr.gp');var gph=document.createElement('a');gph.href="https://plus.google.com/share?url="+link;gp.appendChild(gph);
var fb = document.querySelector('.shr.fb');var fbh=document.createElement('a');fbh.href="https://www.facebook.com/sharer.php?u="+link;fb.appendChild(fbh);
var twt = document.querySelector('.shr.twt');var twth=document.createElement('a');twth.href="https://twitter.com/intent/tweet?url="+link+"&text="+title;twt.appendChild(twth);
var pin = document.querySelector('.shr.pin');var pinh=document.createElement('a');pinh.href="https://www.pinterest.com/pin/create/button/";pinh["data-pin-do"]="buttonBookmark";pinh["data-pin-custom"] = "true";pin.appendChild(pinh);
var stmbl = document.querySelector('.shr.stmbl');var stmblh=document.createElement('a');stmblh.href="http://www.stumbleupon.com/submit?url="+link;stmbl.appendChild(stmblh);
//var whats = document.querySelector('.shr.wha');var whtf=document.createElement('a');whtf.href="whatsapp://send?text="+link;whats.appendChild(whtf);

var shrs=document.querySelectorAll('.shr a');for(var s=0;s<shrs.length;s++){shrs[s].target="_blank";}

function repos(){
    var shrelm = document.querySelector('.share');
    // console.log(window.screen.width);
    // console.log(window.screen.availWidth);
    // console.log(document.body.clientWidth);
    // console.log(document.body.offsetWidth);
    // console.log(document.body.scrollWidth);
    if(document.body.offsetWidth > 468){shrelm.style= ''; shrelm.style.top='calc(50% - ' + shrelm.offsetHeight/2 + 'px)'}else{ shrelm.style='';shrelm.style.left='calc(50% - ' + shrelm.offsetWidth/2 + 'px)';}
        if(document.querySelectorAll('.shr.pin').length == 1){
        !function(a,b,c){var d,e,f;d="PIN_"+~~((new Date).getTime()/864e5),a[d]?a[d]+=1:(a[d]=1,a.setTimeout(function(){e=b.getElementsByTagName("SCRIPT")[0],f=b.createElement("SCRIPT"),f.type="text/javascript",f.async=!0,f.src=c.mainUrl+"?"+Math.random(),e.parentNode.insertBefore(f,e)},10))}(window,document,{mainUrl:"//assets.pinterest.com/js/pinit_main.js"});
        }
    
}
//? height offset to center the element
window.onload = repos();
window.addEventListener("resize", function(){
    repos();
});
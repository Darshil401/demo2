//     var lastScrollTop = 0;
//     var heade = document.getElementById("navbar");
// window.addEventListener("scroll", function(){
//     var scrollTop = window.pageYOffset ||document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop){
//         heade.style.top="-60px";
//     }
//     else{
//         // heade.style.transition=".3s"
//         heade.style.top="0px";
//     }
//     lastScrollTop=scrollTop;
// });


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}
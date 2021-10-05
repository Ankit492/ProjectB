var index4 =0;
var stopcnt3 =0
var slide4ln = 11;
function nextslide4(n){
    if(stopcnt3%2==0)
    slideshow4(index4 += n);
}
function slideshow4(n){
    if(n>slide4ln){n = 1}
    if(n<1){n = slide4ln}
    document.getElementById("slides4").src = 'img/05-12-2019/' + n + '.jpg';
    index4=n;
}
function stp3()
{
    stopcnt3 ++;
}
nextslide4(1);
setInterval(nextslide4,1000,1);
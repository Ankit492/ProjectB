
var index2 =0;
var stopcnt =0
var slide2ln = 12;
function nextslide2(n){
    if(stopcnt%2==0)
    slideshow2(index2 += n);
}
function slideshow2(n){
    if(n>slide2ln){n = 1}
    if(n<1){n = slide2ln}
    document.getElementById("slides2").src = 'img/16-11-2019/' + n + '.jpg';
    index2=n;
}
function stp()
{
    stopcnt ++;
}
nextslide2(1);
setInterval(nextslide2,1000,1);

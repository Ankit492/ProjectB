var index3 =0;
var stopcnt2 =0
var slide3ln = 9;
function nextslide3(n){
    if(stopcnt2%2==0)
    slideshow3(index3 += n);
}
function slideshow3(n){
    if(n>slide3ln){n = 2}
    if(n<2){n = slide3ln}
    document.getElementById("slides3").src = 'img/19-02-2020/' + n + '.jpg';
    index3=n;
}
function stp2()
{
    stopcnt2 ++;
}
nextslide3(1);
setInterval(nextslide3,1000,1);


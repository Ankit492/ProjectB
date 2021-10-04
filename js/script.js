
function wish()
{
    var wishh = "";
    for(var i=0;i<10000;i++)
    {
        wishh += " Happy BirthDay Babe ";
    }
    document.getElementById('tophead').innerHTML = wishh;
}
wish();
var user = 0;
function EnterPass()
{   if(user ==0){
        let pass = prompt("Enter the Password");
        if (pass != "0504") {
            document.getElementsByTagName("body")[0].innerHTML =" InCorrect Password! Try Again After Refreshing";
            user++;
        }
    }
}
// EnterPass();


var index =0;
var slide1imgs = ['/img/slides1/slideimg1.jpg','/img/slides1/slideimg2.jpg','/img/slides1/slideimg3.jpg','/img/slides1/slideimg4.jpg'];
function nextslide(n)
{
    slideshow(index += n);
}
function slideshow(n){
    if(n>slide1imgs.length-1){n = 0}
    if(n<0){n = slide1imgs.length-1}
    document.getElementById("slide1").src = slide1imgs[n];
    index=n;
}
setInterval(nextslide,3000,1);
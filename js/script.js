
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

function confirmpass()
{
    let pass = document.getElementById("passin").value;
    if (pass == "0504") {
        window.location.replace("./home.html");
    }
    else{
        document.getElementById("passin").value="";
        document.getElementById("error").innerHTML = "Wrong passowrd!!"
        document.getElementById("errmsg").style.display="block";
    }

}
function act(ID){
    var  mnu = document.getElementsByClassName("lst");
    for(var i=0;i<mnu.length;i++){
        mnu[i].classList.remove("active");
    }
    document.getElementById(ID).classList.add("active");
}



var index =0;
var slideln=12;
function nextslide(n)
{
    slideshow(index += n);
}
function slideshow(n){
    if(n>slideln){n = 1}
    if(n<1){n = slideln}
    document.getElementById("slide1").src = 'img/slides1/slideimg' + n + '.jpg' ;
    index=n;
}
nextslide(1);
setInterval(nextslide,3000,1);
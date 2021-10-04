
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
var slideln=9;
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
setInterval(nextslide,3000,1);

var index2 =0;
var stopcnt =0
var slide2ln = 12;
function nextslide2(n,stop){
    if(stopcnt%2==0)
    slideshow2(index2 += n);
}
function slideshow2(n){
    
    if(n>slide2ln){n = 1}
    if(n<1){n = slide2ln}
    document.getElementById("slides2").src = 'img/pics/' + n + '.jpg';
    index2=n;
}
function stp()
{
    stopcnt ++;
}
nextslide2(1);
setInterval(nextslide2,1000,1,stopcnt);
document.getElementById('bdy').innerHTML = 'Firstly many many many Happy returns of the day babe. This day is more special to me than it is to you. All i wanted and wished for is to be with you on this day and make your day more special with everything I can do. But the nature planned something else.. no worries and no more regretting thought from now.. this letter is completly based on how much I loved, love, will love you and how much your presence in my life makes me special.I feel special just to have you in my life not just Bragging but seriously your nature is something I personally loved the best among everyone i ever met. My Love towards you always increases day by day..Like you have some sort of magic within yourself that whenever i see you i cannot control myself and I am saying truely that everytime i see you I feel the same crazy and special feeling inside me that came the very first time. Mostly My face starts smiling and my stomach starts trumbling whenever a single thought of you comes to my mind. Today is your day babe I want you to spend your entire day with a small smile on your face. Koi bhi agar aaj meri babe ko sad karega na ...usko sidha ek paune kilo ka punch dena apna 😉. ';

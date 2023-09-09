
//document.querySelectorAll("button")[0].addEventListener("click",handleClick);
/*document.querySelectorAll("button")[1].addEventListener("click",handleClick);
document.querySelectorAll("button")[2].addEventListener("click",handleClick);
document.querySelectorAll("button")[3].addEventListener("click",handleClick);
document.querySelectorAll("button")[4].addEventListener("click",handleClick);
document.querySelectorAll("button")[5].addEventListener("click",handleClick);
document.querySelectorAll("button")[6].addEventListener("click",handleClick);
*/
/*var randonNumber=Math.floor(Math.random()*6);
document.querySelectorAll("button")[randomNumber].addEventListener("click",handleClick);
function handleClick(){
    alert("I got clicked");
}*/
var NumberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<NumberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttoninnerHTML=this.innerHTML;
      switch(buttoninnerHTML){
        case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
        case "j":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
        case "k":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
        case "l":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      }
    })
}

document.addEventListener("keypress",function(){
    alert("Key Was Pressed !");
})






 //this.style.color="white";
 /*var audio=new Audio("sounds/tom-1.mp3");
        audio.play();*/
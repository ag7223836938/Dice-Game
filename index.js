var randomNumber1 = Math.floor(6*Math.random())+1;
console.log(randomNumber1);

if(randomNumber1==1){
    document.querySelector(".dice-1").setAttribute("src","dice1.png");
}if(randomNumber1==2){
    document.querySelector(".dice-1").setAttribute("src","dice2.png");
}if(randomNumber1==3){
    document.querySelector(".dice-1").setAttribute("src","dice3.png");
}if(randomNumber1==4){
    document.querySelector(".dice-1").setAttribute("src","dice4.png");
}if(randomNumber1==5){
    document.querySelector(".dice-1").setAttribute("src","dice5.png");
}if(randomNumber1==6){
    document.querySelector(".dice-1").setAttribute("src","dice6.png");
}

var randomNumber2 = Math.floor(6*Math.random())+1;
console.log(randomNumber2);

if(randomNumber2==1){
    document.querySelector(".dice-2").setAttribute("src","dice1.png");
}if(randomNumber2==2){
    document.querySelector(".dice-2").setAttribute("src","dice2.png");
}if(randomNumber2==3){
    document.querySelector(".dice-2").setAttribute("src","dice3.png");
}if(randomNumber2==4){
    document.querySelector(".dice-2").setAttribute("src","dice4.png");
}if(randomNumber2==5){
    document.querySelector(".dice-2").setAttribute("src","dice5.png");
}if(randomNumber2==6){
    document.querySelector(".dice-2").setAttribute("src","dice6.png");
}

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player-1 wins!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player-2 wins🚩!";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImage = "images/dice" + randomNumber1 + ".png";


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage = "images/dice" + randomNumber2 + ".png";


var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImage);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";

}   
else{
    document.querySelector("h1").textContent = "Draw!";
} 
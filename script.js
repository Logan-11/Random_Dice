
/* For Dice image 1 */

var randomNumber1 = Math.floor(Math.random() * 6) + 1;  /* rand num 1 to 6 */

var randomDiceImage = `dice${randomNumber1}.png`;  /* dice1.png to dice6.png */

var randomImageSource = `./images/${randomDiceImage}`; /* ./image/dice1.png to ./image/dice2.png */

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


/* For Dice image 2 */


var randomNumber2 = Math.floor(Math.random() * 6) + 1;  /* rand num 1 to 6 */

var randomDiceImage2 = `dice${randomNumber2}.png`;  /* dice1.png to dice6.png */

var randomImageSource2 = `./images/${randomDiceImage2}`; /* ./image/dice1.png to ./image/dice2.png */

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

/* Dice logic */

if(randomNumber1 > randomNumber2){
    
    document.querySelector("h1").innerHTML = "Player 1 wins 🏆";
    document.querySelectorAll("p")[0].style.color = "red";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins 🏆";
    document.querySelectorAll("p")[1].style.color = "red";

}

else{
    document.querySelector("h1").innerHTML = "Draw!!";
}



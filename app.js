var scores, roundScore, activePlayer, gamePlaying, winScore;


init();


document.querySelector(".btn-settings").addEventListener("click", function(){
  
  if(gamePlaying){
    
    winScore = Number(prompt("Please enter your desired winning score"));
  
  }
  
});





document.querySelector(".btn-roll").addEventListener("click", function(){
  //This is a 'state variable'  Or a variable with a boolean value.  So if our variable is true the enclosed code
  //will execute, if false nothing happens when the button-roll is clicked.
  if (gamePlaying){
    
    //get random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    
    //Display the number
    var diceDOM = document.querySelector(".dice");
    var diceDOM2 = document.querySelector(".dice-2");
    diceDOM.style.display = "block";
    diceDOM2.style.display = "block";
    diceDOM.src = "externalfile:drive-71f063f0832f4eaea59920f4d8081006d998fa16/root/Jonas JS/Section 4 Game/dice-"
    + dice   + ".png";
    diceDOM2.src = "externalfile:drive-71f063f0832f4eaea59920f4d8081006d998fa16/root/Jonas JS/Section 4 Game/dice-"
    + dice2   + ".png";
    
    
 if (dice !== 1 && dice2 !== 1) {
        //add dice to score
        roundScore += dice + dice2;
        
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
                  
           
      } else {
        //change player
        nextPlayer();
      
      }


  }
  

});



document.querySelector(".btn-hold").addEventListener("click", function(){
  //Add current score to global score
  if(gamePlaying){
    scores[activePlayer] += roundScore;
  
    
    //Update UI
    
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    
    //Check if player won the game
    if (scores[activePlayer] >= winScore){
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".dice-2").style.display = "none";
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
      gamePlaying = false;
    }
    else {
    
    nextPlayer();
    
    }
  }
});



//Toggle Active Player

function nextPlayer (){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice-2").style.display = "none";
    
}



document.querySelector(".btn-new").addEventListener("click", init);


function init (){
  
  scores = [0,0];

  roundScore = 0;
  
  activePlayer = 0;
  
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".dice-2").style.display = "none";
  
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  
  document.querySelector(".player-0-panel").classList.add("active");
  
  gamePlaying=true;

  winScore = 100;
  
}


//dice = Math.floor(Math.random() * 6) + 1;
//document.querySelector("#current-" + activePlayer).textContent = dice;


//This is a great example of a callback function.  We passed the name of the btn function to our event listener
//We did not actually call it with the parentheses.  We don't want to call it, we want the function (even listener)
//to call it for us.






// querySelector allows you to search the DOM with the same terminology that we would use in CSS (so really easy/useful)
//textContent only allows us to change the plain text inside the HTML tags
//If we also want to add new HTML tags around the text we would use innerHTML

//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";
//DOM manipulation method is called a "Setter" in these 2 instances because they are setting value
//And it would be called a "Getter" if it were on the receiving end of an equals sign.

//\\//\\//Lecture 40:
//Event Listeners are functions that just sit listening for a certain situation
//Event Listeners are Functions that react to an action
//When the event occurrs they send a message to the js engine.  The messages from the listener are added to a message que
//When All the events in Execution stack are executed then the messages & their functions are added to the execution stack



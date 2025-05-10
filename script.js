import { HandFactory } from "./js/HandFactory.js"
import { GameState } from "./js/GameState.js";
import { ScoreCounter } from "./js/ScoreCounter.js";

let scoreCounter = new ScoreCounter("#player-score", "#computer-score");

function onHandChoice(event) {
    let id = event.currentTarget.id;

    let playerHand = HandFactory.create(id);
    let computerHand = HandFactory.getRandomHand();

    console.log(playerHand);
    console.log(computerHand);

    document.querySelector(".computer-side img")
        .src = "img/" + computerHand.name + ".webp";

    document.querySelector(".computer-side p")
        .innerText = computerHand.name.toUpperCase();

    let gameResult = playerHand.gameResultWith(computerHand);

    let roundResultElement = document.querySelector(".game-result p:nth-child(2)");

    if(gameResult == GameState.DRAW) {
        roundResultElement.innerText = "DRAW";
    }

    if(gameResult == GameState.WIN) {
        roundResultElement.innerText = "YOU WON THIS ROUND";
        
        scoreCounter.addPlayerScore();
    }
        
    if(gameResult == GameState.LOSE) {
        roundResultElement.innerText = "YOU LOSE THIS ROUND";
        scoreCounter.addComputerScore();
    }


}

let currentChoice = false;

document.addEventListener('DOMContentLoaded', function () {

    let choices = document.getElementsByClassName('selectable');

    for (let i = 0; i < choices.length; i++) {
        choices[i].addEventListener('click', onHandChoice);
    }
});
import { HandFactory } from "./js/HandFactory.js"


function onHandChoice(event) {
    let id = event.currentTarget.id;

    let playerHand = HandFactory.create(id);
    let computerHand = HandFactory.getRandomHand();

    console.log(playerHand);
    console.log(computerHand);

    console.log(playerHand.gameResultWith(computerHand));
}

let currentChoice = false;

document.addEventListener('DOMContentLoaded', function () {

    let choices = document.getElementsByClassName('player-choice');

    for (let i = 0; i < choices.length; i++) {
        choices[i].addEventListener('click', onHandChoice);
    }
});
const hands = ['rock', 'paper', 'scissors'];


function getComputerChoice()
{
    let hand = hands[getRandomInteger(0, 2)];
    return HandFactory.create(hand);
}

function getRandomInteger(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onHandChoice(event)
{
    let id = event.currentTarget.id;

    if(hands.includes(id) === false) {
        alert('Error');
        return;
    }

    let playerHand = HandFactory.create(id);
    let computerHand = getComputerChoice();

    console.log(playerHand);
    console.log(computerHand);

    console.log(playerHand.gameResultWith(computerHand));
}

let currentChoice = false;

document.addEventListener('DOMContentLoaded', function () {

    let choices = document.getElementsByClassName('player-choice');

    for(let i=0; i<choices.length; i++) {
        choices[i].addEventListener('click', onHandChoice);
    }
});
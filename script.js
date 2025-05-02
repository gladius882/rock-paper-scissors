function getComputerChoice()
{
    let hands = ['rock', 'paper', 'scissor'];

    return hands[getRandomInteger(0, 2)];
}

function getRandomInteger(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentChoice = false;

document.addEventListener('DOMContentLoaded', function () {

    let choices = document.getElementsByClassName('player-choice');

    for(let i=0; i<choices.length; i++) {
        choices[i].addEventListener('click', function(event) {
            
        });
    }

});
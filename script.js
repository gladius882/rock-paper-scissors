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

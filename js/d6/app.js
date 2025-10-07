function checkargs(str) {
    const diceVariant = ["D4", "D6", "D8", "D10", "D12", "D16", "D20"];
    return diceVariant.includes(str);
}

function dice(dice) {
    if(checkargs(dice)) {
        return Math.floor(Math.random() * dice.substr(1, dice.length -1)) + 1;
    }

    return 0;
}

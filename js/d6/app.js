function checkargs(str) {
    if (str.match(/^\d+$/)) {
        const dice = Number(str.substr(1));
        return dice <= 20 && 
        dice >= 2 && 
        dice % 2 === 0;
    }

}

function dice(dice) {
    if(checkargs(dice)) {
        return Math.floor(Math.random() * dice) + 1;
    }

    return 0;
}

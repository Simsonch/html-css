function checkargs(str) {
    const dice = Number(str.substr(1))
    if (str.substr(0) === "d" && typeof dice === "number") {
        ;
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

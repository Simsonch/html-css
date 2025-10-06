function dice(dice) {
    if(dice <= 20 && dice >= 2 && dice % 2 === 0) {
        return Math.floor(Math.random() * dice) + 1;
    }

    return 0;
}

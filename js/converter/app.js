
function converter(summ, currancy, relustCurrency) {
    const rateRubTo ={
        "$": 80,
        "EUR": 85,
        "KZ": 0.15,
    }

    if (currancy === "RUB" && rateRubTo[relustCurrency]) {
        return relustCurrency + (summ * rateRubTo[relustCurrency]);
    } else if(relustCurrency === "RUB" && rateRubTo[currancy]){
        return relustCurrency + (summ / rateRubTo[currancy]);
    }
        return `нет курса рубль к ${relustCurrency}`
}

console.log(converter(100, "EUR", "RUB"));
console.log(converter(100, "RUB", "KZ"));
console.log(converter(100, "KZ", "RUB"));
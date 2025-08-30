
function converter(summ, currancy, relustCurrency) {
    const rateRubTo ={
        "$": 80,
        "EUR": 85,
        "KZ": 0.15,
    }

    if (currancy === "RUB" && rateRubTo[relustCurrency]) {
        return summ / rateRubTo[relustCurrency];
    } else if(relustCurrency === "RUB" && rateRubTo[currancy]){
        return summ * rateRubTo[currancy];
    }
        return null;
}

console.log(converter(100, "EUR", "RUB"));
console.log(converter(100, "RUB", "KZ"));
console.log(converter(100, "KZ", "RUB"));
console.log(converter(1000, "RUB", "$"));
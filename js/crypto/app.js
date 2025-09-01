

function crypto(str) {
    const arr = str.split("");
    const deletCount = Math.round(arr.length / 2);
    const chunk1 = arr.splice(0, deletCount).reverse();
    const chunk2 = arr.splice(0, 1);
    const chunk3 = arr.splice(-1, 1);
    return chunk1.join("") + chunk3.join("") + arr.join("") + chunk2.join("") ;
}

function check(value, checksValue) {
    return crypto(checksValue) === value;
}

console.log(crypto("password")) //-> ssapdorw
console.log(check("ssapdorw", "password")) //-> true
console.log(check("ssapdorw", "wrong")) // -> false

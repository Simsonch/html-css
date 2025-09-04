
const itemDell = (item) => item >= 5;

function arrayClean(arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(arrayClean([1, 2, 3, 4, 5, -2, 54, 332, 12], itemDell));
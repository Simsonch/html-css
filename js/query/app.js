function getQueryString(obj) {
    let str = '';
    for (let key in obj) {
        str += `${key}=${obj[key]}&`;
    }
    return str.slice(0, -1);
}

console.log(getQueryString({ a: 1, b: 2, c: 3 }));
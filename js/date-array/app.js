function checkArrayHasDate(array) {
    return array.reduce((acc, cur) => {
        if(!isNaN(Date.parse(cur))) {
            const now = new Date(cur);
            const year = now.getFullYear();
            const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
            const day = now.getDate().toString().padStart(2, '0');

            const customFormat = `${day}-${month}-${year}`;
            acc.push(customFormat);
        }

        return acc;
    }, new Array());
}

console.log(checkArrayHasDate(['2023-01-01', 'tesst-01-02', '2023-01-03', '2023-01-04', '2023-01-05', '2023-01-06', '2023-01-07', '2023/01/08', '2023-01-09', '2023-01-10']));
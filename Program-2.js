function generateSeries(num) {
    if (isNaN(num)) {
        return "Please enter a valid number";
    }
    let arr = new Array;
    let start = 1;
    while (num > 0) {
        arr.push(start);
        start += 2;
        num--;
    }
    return arr;
}

console.log(generateSeries(5));
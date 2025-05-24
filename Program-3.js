function generateSeries(num) {
    if (isNaN(num)) {
        return "Please enter a valid number";
    }

    let arr = new Array;
    let start = 1;
    let count = 1;
    let skippednum;
    while (count <= num) {
        if (count % 2 !== 0) {
            if (skippednum) {
                arr.push(skippednum);
            }
            arr.push(start);
        } else {
            skippednum = start;
        }
        count++;
        start += 2;
    }
    return arr;
}

console.log(generateSeries(6));
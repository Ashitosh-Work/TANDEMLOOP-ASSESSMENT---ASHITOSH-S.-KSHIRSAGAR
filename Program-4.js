function multipleofNumbers(arr) {
    let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let multiplesObj = new Object;

    numArr.forEach(element => {
        let count = 0
        arr.forEach(arrEle => {
            if (arrEle % element === 0) {
                count++;
            }
        })
        multiplesObj[element] = count;
    });

    return multiplesObj;
}

console.log(multipleofNumbers([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]));
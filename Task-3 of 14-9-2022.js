let number = 1234689;
let answerArray = [];
numberArray = number.toString().split('');
isItEven = () => {
    numberArray.forEach((item, i) => {
        if (item % 2 === 0 && numberArray[i - 1] % 2 === 0) {
            answerArray.push('|', item)
        } else {
            answerArray.push(item);
        }
    })
}
isItEven()
console.log(answerArray.join(''))
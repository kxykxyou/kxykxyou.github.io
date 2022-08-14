// 1-1 countAandB: array.filter method
function countAandB(input) {
    return input.filter(i => i === 'a').length + input.filter(i => i === 'b').length;
}

/* 
// 1-2 countAandB: for loop method
function countAandB(input) {
    var count = 0;
    for (i = 0; i<input.length; i++) {
        if (input[i] === 'a' || input[i] === 'b') {
            count += 1
        }
    };
    return count;
}
*/

// 2-1 mapping method
function toNumber(input) {
    var engMapNum = {
       'a': 1,
       'b': 2,
       'c': 3,
       'd': 4,
       'e': 5, 
    };
    var newArr = [];
    input.forEach(element => newArr.push(engMapNum[element]));
    return newArr
}


let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]

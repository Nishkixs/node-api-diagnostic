// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');

let array = fs.readFileSync('data/integer.txt').toString().split("\n");

let items = {}, base, key;
for (let i = 0; i < array.length; i++) {
    base = array[i];
    key = base[0];
    if (!items[key]) {
        items[key] = 0;
    }
    items[key] += base[1];
}

let outputArr = [], temp;
for (key in items) {
    temp = [key, items[key]];
    outputArr.push(temp);
}
console.log(outputArr);

// module.exports = {
//   sumLines,
// };

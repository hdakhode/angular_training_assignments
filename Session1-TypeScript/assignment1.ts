// EX 1 -> Sort and Reverse data from string array based on string length

let stringToSortAndReverse = 'Sort and Reverse data from string array based on string length';

let stringArray = stringToSortAndReverse.split(' ');

let sortedArray = stringArray.sort((x, y) => x.length - y.length).join(' ');

console.log(sortedArray);

let reverseArray = stringArray.sort((x, y) => y.length - x.length).join(' ');

console.log(reverseArray);
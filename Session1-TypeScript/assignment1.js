// EX 1 -> Sort and Reverse data from string array based on string length
var stringToSortAndReverse = 'Sort and Reverse data from string array based on string length';
var stringArray = stringToSortAndReverse.split(' ');
var sortedArray = stringArray.sort(function (x, y) { return x.length - y.length; }).join(' ');
console.log(sortedArray);
var reverseArray = stringArray.sort(function (x, y) { return y.length - x.length; }).join(' ');
console.log(reverseArray);

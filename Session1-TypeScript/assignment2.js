// EX 2 -> Define a string variable with data of 100 characheters in it and perform the following operation on the data
//       - Find out the indexes and occurances of character 'a' in it
//       - Findout number of statements in the string. (value after . symbol) 
//       - Convert the first character of the statement in Upper case.
var string100characters = 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean m';
var a_regex = /a/g;
var match;
var position = [];
while ((match = a_regex.exec(string100characters)) !== null) {
    position.push(match.index);
}
var words = string100characters.split(' ');
var occurances = [];
for (var i = 0; i < words.length; i++) {
    if (words[i].indexOf("a") > -1) {
        occurances.push(words[i]);
    }
}
var indexAndOccurence = occurances.map(function (o, i) {
    return { word: o, index: position[i] };
});
var statements = string100characters.split('.');
var totalStatements = statements.length;
for (var i = 0; i < statements.length; i++) {
    var words_1 = statements[i].split(' ');
    var index = 0;
    if (words_1[0] === '')
        index = 1;
    words_1[index] = words_1[index].charAt(0).toUpperCase() + words_1[index].slice(1);
    statements[i] = words_1.join(' ');
}
var output = {
    indexAndOccurence: indexAndOccurence,
    totalStatements: totalStatements,
    capitalizedString: statements.join('.')
};
console.log(output);

// EX 2 -> Define a string variable with data of 100 characheters in it and perform the following operation on the data
//       - Find out the indexes and occurances of character 'a' in it
//       - Findout number of statements in the string. (value after . symbol) 
//       - Convert the first character of the statement in Upper case.

let string100characters = 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean m';

let a_regex = /a/g

let match;
let position: number[] = [];

while ((match = a_regex.exec(string100characters)) !== null) {
    position.push(match.index);
}

let words = string100characters.split(' ');
let occurances = [];
for(var i = 0; i < words.length; i++) {
    if(words[i].indexOf("a") > -1){
        occurances.push(words[i]);
    }
}

var indexAndOccurence= occurances.map((o, i) => {
    return {word: o, index: position[i]}
});

let statements = string100characters.split('.')
let totalStatements = statements.length;

for (var i = 0; i < statements.length; i++) {    
        let words = statements[i].split(' ');
        let index = 0;
        if(words[0] === '')
            index = 1;
        words[index] = words[index].charAt(0).toUpperCase() + words[index].slice(1);
        statements[i] = words.join(' ');
}

let output = {
    indexAndOccurence : indexAndOccurence,
    totalStatements : totalStatements,
    capitalizedString : statements.join('.'),
};

console.log(output);
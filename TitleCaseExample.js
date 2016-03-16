var lowerCaseWords = ['a','the','to','at','in','with','and','but','or'];

function titleCaseWord (word) {
    if (typeof word === 'string' && word.length) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    return word;
}

function titleCase (phrase) {
    phrase = typeof phrase === 'string' ? phrase.toLowerCase() : '';
    
    if (phrase) {
        var words = phrase.split(' ');
        var lastWordIndex = words.length - 1;
    
        words.forEach(function (word, i) {
            if (i === 0 || i === lastWordIndex) {
                word = titleCaseWord(word);
            } else if (lowerCaseWords.indexOf(word) === -1) {
                word = titleCaseWord(word);
            }
            
            words[i] = word;
        });
        
        phrase = words.join(' ');
    }

    return phrase;
}

console.log(titleCase('i love solving problems and it is fun'));
console.log(titleCase('wHy DoeS A biRd Fly?'));

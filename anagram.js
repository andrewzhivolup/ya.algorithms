function anagram(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) {
        return false;
    }
    const firstWordDict = buildDict(firstWord);
    const secondWordDict = buildDict(secondWord);

    for (let char in firstWordDict) {
        if (firstWordDict[char] !== secondWordDict[char]) {
            return false;
        }
    }
    return true;
}

function buildDict(word) {
    const dict = {};
    for (const char of word) {
        if(!dict[char]){
            dict[char] = (dict[char] || 0) + 1;
        }
    }
    return dict;
}

// Анаграмы
// O(n)
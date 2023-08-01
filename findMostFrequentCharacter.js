const findMostFrequentCharacter = (string) => {
    if (!string) return '';
    const charSet = {};
    for(let char of string) {
        charSet[char] = charSet[char] ? charSet[char] + 1 : 1;
    }
    let maxFrequent = 0;
    let mostFrequentChar = '';

    for (const char in charSet) {
        if(charSet[char] > maxFrequent){
            mostFrequentChar = char;
            maxFrequent = charSet[char];
        }
    }
    return mostFrequentChar;
}

// O(n+m) -> O(n)
function findLongestSequenceOfOnes(vector) {
    if (!vector.length) return 0;
    let longestSequence = 0;
    let curSequence = 0;
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === 1) {
            curSequence += 1;
        } else {
            if (curSequence > longestSequence) {
                longestSequence = curSequence;
            }
        }
    }
    return longestSequence;
}

// Требуется найти в бинарном векторе самую длинную последовательность единиц и вывести её длину.
// O(n) - сложность
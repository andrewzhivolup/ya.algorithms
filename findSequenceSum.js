function findSequenceSum(sequence) {
    let sum = 0;
    if (!sequence) return sum;
    for (let el of sequence){
        sum += el;
    }
    return sum;
}

// Поиск суммы последовательность
// O(n)
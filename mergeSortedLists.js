function mergeSortedLists(arrays) {
    const dict = {};
    const result = [];
    for (const array of arrays) {
        for (const el of array) {
            if (dict[el]) {
                dict[el] += 1;
            } else {
                dict[el] = 1;
            }
        }
    }
    for (const dictKey in dict) {
        for (let i = 0; i < dict[dictKey]; i++) {
            result.push(+dictKey)
        }
    }

    return result;
}

console.log(mergeSortedLists([
    [1, 3, 5, 7, 9],
    [2, 4, 6, 8],
    [0, 9, 10, 11],
]))
// [
//     [1, 3, 5, 7],
//     [2, 4, 6, 8],
//     [0, 9, 10, 11],
// ]
// Даны k отсортированных в порядке неубывания массивов неотрицательных целых чисел,
// каждое из которых не превосходит 100.
// Требуется построить результат их слияния: отсортированный в порядке неубывания массив,
// содержащий все элементы исходных k массивов.
// Длина каждого массива не превосходит 10k.
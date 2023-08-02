function removeDuplicates(array) {
    if (!array.length) return array;
    const dict = {};
    for (const el of array) {
        if(!dict[el]){
            dict[el] = el;
        }
    }
    const clearArray = [];
    for (const el in dict) {
        clearArray.push(dict[el]);
    }
    return clearArray;
}

//хеш-таблица
function removeDuplicates2(array) {
    let uniqueArr = [];
    let prevNum = null;

    for (let num of array) {
        if (num !== prevNum) {
            uniqueArr.push(num);
        }
        prevNum = num;
    }

    return uniqueArr;
}

// Дан упорядоченный по неубыванию массив целых 32-разрядных чисел.
// Требуется удалить из него все повторения.
// O(n)
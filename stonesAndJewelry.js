function stonesAndJewelry(S, J) {
   const jewelsSet = {};
    let count = 0;

    for (const jewel of J) {
        jewelsSet[jewel] = true;
    }

    for (const stone of S) {
        if (jewelsSet[stone]) {
            count++;
        }
    }

    return count;
}

// Даны две строки строчных латинских символов: строка J и строка S.
// Символы, входящие в строку J, — «драгоценности», входящие в строку S — «камни».
// Нужно определить, какое количество символов из S одновременно являются «драгоценностями».
// Проще говоря, нужно проверить, какое количество символов из S входит в J.
// O(J+S)
function twoMaxNumEntry(str) {
    let max1 = str[0] > str[1] ? 0 : 1;
    let max2 = str[0] > str[1] ? 1 : 0;
    for (let i = 2; i < str.length; i++) {
        if(str[i] > str[max1]){
            max2 = max1;
            max1 = i;
        } else if (str[i] > str[max2]){
            max2 = i;
        }
    }
    return [max1, max2];
}
function maxNumEntry(str) {
    let max = 0;
    for (let i = 1; i < str.length; i++) {
        if(str[i] > str[max]){
            max = i;
        }
    }
    return str[max];
}
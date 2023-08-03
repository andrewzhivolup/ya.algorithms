function findLeftEntry(str, x) {
    let res = -1;
    if(!str) return res;
    for (let i = 0; i < str.length; i++) {
        if(+str[i] === x) {
            return i;
        }
    }
    return res;
}

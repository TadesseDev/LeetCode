/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const occurance = new Map();

let i=0;
    do{
        const ele = arr[i] 
        occurance.set(ele, occurance.has(ele) ? occurance.get(ele)+1 : 1);
        i++;
    } while(i<arr.length);

    const values = Array.from(occurance.values()).sort((a,b)=>a-b);
i=values.length;
    do {
        i--;
        if(values[i]==values[i-1])
            return false
    }while(i>0)
    return true;
};
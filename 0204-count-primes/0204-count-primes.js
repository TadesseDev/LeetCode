/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n<2)
        return 0
    let arr=new Array(n)
    arr.fill(true)
    for(i=2;i<arr.length;i++){
        if(arr[i]){
            for(j=i+i;j<arr.length;j+=i){
                arr[j]=false
            }
        }
    }
    return arr.filter(ele=>ele).length-2

};
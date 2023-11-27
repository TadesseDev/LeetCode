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
//     if(n<2)
//         return 0
//     let res=0,i=2
//     function isPrime(num){
//         let j=2;
//         let max=Math.ceil(Math.sqrr(num))
//         while(j<=max){
//             if(num%j==0)
//                 return false
//             j++
//         }
//         return true
//     }
    
//     while(i<n){
//         if(isPrime(i))
//             res++
//         i++
//     }
//     return res
    
    // function getThePrimes(n){
    //     if(n<2)
    //         return []
    //     let primes=getThePrimes(n-1)
    //     let i=0, isPrime=true, sqrt=Math.ceil(Math.sqrt(
    //     while(i<primes.length&&isPrime){
    //         if(n%primes[i]==0)
    //             isPrime=false
    //         if(primes[i]>sqrt)
    //             break
    //         i++
    //     }
    //     if(isPrime)
    //         primes.push(n)
    //     return primes
    // }
    // return getThePrimes(n).length
    
    
};
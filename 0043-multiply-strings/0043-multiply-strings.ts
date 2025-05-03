function multiply(num1: string, num2: string): string {
    /*
    - prepare a store array
    - start result as ''
    - iterate through num1
        - find the current number 
        - rem = 0
        - res = []
        - iterate thogu num2
            - rem = ?
            - value = ?
            - update result
        - store.push res
    - iterate through store
        - push 0 with its number of index for the current arra
    - initialize rem as 0
        rem = 0
    - iterate through store and calculate the result 
         - sum = rem
        - iterate through the internal array 
            - sum the element at `i` for each array
        - calculate 
            - res = ''
            - rem = 0
    return res
        
    */
    const store = []
    const zeros = 0 
    let rem = 0
    let res = ''
    let maxLen = 0
    for(let i=num2.length-1; i>=0; i--){
        let curr = +num2[i]
        let res = []
        for(let j=num1.length-1; j>=0; j--){
            // console.log(curr, rem, num1[j])
            let product = curr*+num1[j] + rem
            if(product>9){
            rem = Math.floor(product/10)
            let val = product%10
            res.unshift(val)
            }else{
                res.unshift(product)
                rem=0
            }
        }
            if(rem){
                res.unshift(rem)
                rem=0 
                }
            // console.log('after ', curr, ":", res)
        store.push(res, ...new Array(zeros).fill(0))
    }
    // console.log('store is: ',store)
    // 123
    // 456
    // [ [ 7, 3, 8 ], [ 6, 1, 5 ], [ 4, 9, 2 ] ]
    // for(let i=store[0].length; i>=0; i--){
    //     let sum=rem
    //     for(let j=0; j<store.length; j++){
    //         sum+=store[j][i] || 0
    //     }
    //     console.log(sum)
    //     if(sum==0)
    //         continue
    //     else if(sum>9){
    //         rem = Math.floor(sum/10)
    //         let val = sum%10
    //         res = String(val) + res
    //         console.log(val, rem, res)
    //     }else{
    //             res = String(sum) + res
    //             rem=0
    //     }
    // }

    let iter = 1;
    const accum = []
    rem = 0
    while(store.length){
        let i=0;
        let sum = rem
        while(i<iter && i<store.length){
            const last = store[i].pop()
            sum += last
            if(!store[i].length){
                store.splice(i,1)
                iter--
                i--
            }
            i++
        }
        if(sum>9){
            rem = Math.floor(sum/10)
            let val = sum%10
            accum.unshift(val)
        }else{
            accum.unshift(sum)
            rem=0
        }
        // console.log('after :', i , "is ", accum, store)
        iter++
    }
    if(rem)
    accum.unshift(rem)
    let leadingZeros=0
    while(leadingZeros<accum.length-1 && accum[leadingZeros]==0)
    leadingZeros++
accum.splice(0,leadingZeros)
    return accum.join("")

};
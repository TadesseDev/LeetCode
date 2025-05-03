function multiply(num1: string, num2: string): string {
    const store = []
    let rem = 0
    let res = ''
    for(let i=num2.length-1; i>=0; i--){
        let curr = +num2[i]
        let res = []
        for(let j=num1.length-1; j>=0; j--){
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
        store.push(res)
    }

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
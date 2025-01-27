function addBinary(a: string, b: string): string {
    /*
    - set reminder to 0
    - split both the string into array
    - start at the last items 
        - pop from A
        - pop from B
        - add the values.
        - calculate the result and the reminder
        - update the reminder, and push the result to the store. 
    - unshit the reminder if it is 1 
    - join the array and return the result  
    */

/*
    - '1,1'
    -'1'
    - [0,0]
    - 0
*/
    let rem = 0;
    let arrA=a.split("")
    let arrB=b.split("")
    const result = []
    while(arrA.length && arrB.length){
        const res = Number(arrA.pop()) + Number(arrB.pop()) + rem
        console.log(res, rem)
        if(res==3){
            rem = 1
            result.unshift(1)
        }else if(res==2){
            rem = 1
            result.unshift(0)
        } else if(res==1){
            rem = 0
            result.unshift(1)
        } else {
            result.unshift(0)
        }
        if(rem==1){
            if(!arrA.length){
                arrA.push('1')
                rem=0
            }
            else if(!arrB.length){
                arrB.push('1')
                rem=0
            }
        }
    }

     result.unshift(...arrA, ...arrB)

     return result.join("")
};
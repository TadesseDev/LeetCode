function plusOne(digits: number[]): number[] {
    /*
    1. add one to the last digit and save the reminder to "reminder"
    2. start a for loop from end and move to the beginning
        loop breaking conditions
        2.1 iterator reaches the beginning 
        2.2 reminder becomes 0
    3. if reminder is more than 0 push it to the beginning 
    4. return the updated array
    */ 

    let reminder = 0
    if(digits[digits.length-1]>8){
            digits[digits.length-1]=0
            reminder = 1
            }
        else{
            digits[digits.length-1]++
            return digits
        }
    let i=digits.length-2
    while(i>=0 && reminder){
        if(digits[i]>8)
            digits[i]=0
        else{
            digits[i]++
            return digits
        }
        i--
    }
  
    digits.unshift(1)
    return digits
};
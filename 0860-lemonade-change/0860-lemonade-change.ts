function lemonadeChange(bills: number[]): boolean {
    // collect 5 bills 
    // collect 10 bills 
    // on evry iteration  
        // if 5 
            // add 5 bill by one 
        // if 10 chec we have 5 bill > 1
            // if yes minus 1 on 5 bill and add 1 to 10 bill
            // if no return false 
        // if 20 check we have 5 bill > 1 and 10 bill > 1
            // if yes minus 1 from 10 and 5 bills
            // if no return false 
        
    // finally return true

    let note5=0
    let note10=0

    for(let i=0; i<bills.length; i++){
        if(bills[i]==5){
            note5++
        }else if(bills[i]==10){
            note5--
            note10++
        } else if(bills[i]==20){
            if(note10>0){
                note10--
                note5--
            }else{
                note5-=3
            }
        }
        if(note5<0 || note10<0)
            return false
    }
    return true 
};
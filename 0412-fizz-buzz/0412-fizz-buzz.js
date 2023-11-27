/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer=[]
    let start=1
    while(start<=n){
        if(start%3==0&&start%5==0)
            answer.push("FizzBuzz")
        else if(start%3==0)
            answer.push("Fizz")
        else if(start%5==0)
            answer.push("Buzz")
        else
            answer.push(start+"")
        start++
    }
    return answer
};
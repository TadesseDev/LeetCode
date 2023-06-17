/**
 * @param {string[]} tokens
 * @return {number}
 */

function operat(a,oprand, b){
    switch(oprand){
        case '+':
            return a+b
        case '/':
            return Math.trunc(a/b)
        case '-':
            return a-b
        case '*':
            return a*b
        default:
            return "unknown operator"
    }
}

var evalRPN = function(tokens) {
    /*
        ["4","13","5","/","+"]
        stack[6
            fs=
            ss=
    */
    let stack=[]
    for(let token of tokens){
        // console.log(token)
        if(Number(token)||Number(token)==0)
            stack.push(Number(token))
        else{
            let secondOperand=stack.pop()
            let firstOperand=stack.pop()
            // console.log(firstOperand, token, secondOperand)
            stack.push(operat(firstOperand, token, secondOperand))
            // console.log(stack)
        }
    }
    return stack[0]
};
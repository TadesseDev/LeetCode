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

    let stack=[]
    for(let token of tokens){
        if(Number(token)||Number(token)==0)
            stack.push(Number(token))
        else{
            let secondOperand=stack.pop()
            let firstOperand=stack.pop()
            stack.push(operat(firstOperand, token, secondOperand))
        }
    }
    return stack[0]
};
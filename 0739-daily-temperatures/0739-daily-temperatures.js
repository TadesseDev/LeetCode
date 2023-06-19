/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    /*
        [73,74,75,71,69,72,76,73]
        stack=[]
        result=[1,1,4,2,1,1]
        for
            i=6
            while 1&&73<74
                res=[2,75]
            
    */
    let stack=[[0, temperatures[0]]]
    let result=[0]
    for(let i=1; i<temperatures.length; i+=1){
        while(stack.length&&stack[stack.length-1][1]<temperatures[i]){
            let res=stack.pop()
            result[res[0]]=i-res[0]
        }
        result[i]=0
        stack.push([i, temperatures[i]])
    }
    return result;
};
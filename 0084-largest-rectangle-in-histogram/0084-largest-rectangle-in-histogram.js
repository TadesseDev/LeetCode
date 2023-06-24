/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let height=0
    let stack=[[0,heights[0]]]
    for(let index=1;index<heights.length;index++){
        let stackIndex=stack.length-1
        while(stackIndex>=0 && heights[index]<stack[stackIndex][1]){ // 1 && 1<2 | 2 && 5<1 /false || 2 && 6<5 || 2 && 2<5 || 2 && 3<2      
            let val=[...stack[stackIndex]]
            stack[stackIndex][1]=heights[index]
            let he=((index-val[0]))*val[1] // 1-0*2 =1 || 4-3* 6 || 4-2*5
            if(he>height)
                height=he
            stackIndex-=1
        }
        stack.push([index,heights[index]])
    }
    let index = heights.length-1
    while(stack.length){
            let val=stack.pop()
            let he=((index-val[0])+1)*val[1] // 5-5+1*3 || 5-4+1*2 || 5*1
            if(he>height){
                height=he
            }
        }
    return height
};
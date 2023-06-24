/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    /*
    height=0,1,6,10
        [2,1,5,6,2,3]
        stack=
        index=5
            val=[1,1]
            
    */
    let height=0
    let stack=[[0,heights[0]]]
    for(let index=1;index<heights.length;index++){
        let extendIndex=index
        while(stack.length && heights[index]<stack[stack.length-1][1]){ // 1 && 1<2 | 2 && 5<1 /false || 2 && 6<5 || 2 && 2<5 || 2 && 3<2
            
    // console.log(stack)
            let val=stack.pop()
            extendIndex=val[0]
            let he=((index-val[0]))*val[1] // 1-0*2 =1 || 4-3* 6 || 4-2*5
            if(he>height)
                height=he
        }
        stack.push([extendIndex,heights[index]])
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
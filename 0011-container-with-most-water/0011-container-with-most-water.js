/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    const distance = new Map([[height[0], 0]])
    const points = [height[0]]

    for(let i=0;i<height.length;i++){

        for(let point of points){
            const newMax = (i-distance.get(point))*Math.min(height[i], point);
            if(newMax>max)
                max=newMax
        }

        if(height[i] > points[points.length-1]){
            points.push(height[i])
            distance.set(height[i], i)
        }
    }
    return max
};
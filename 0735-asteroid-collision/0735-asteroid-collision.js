/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const result = [];
    for(let i=0;i<asteroids.length;i++){
        if(asteroids[i]>0)
            result.push(asteroids[i])
        else {
            while(result.length && Math.abs(asteroids[i])>result[result.length-1] && result[result.length-1]>0){
                result.pop()
            }
            if(result.length && Math.abs(asteroids[i])==result[result.length-1])
                result.pop()
            else if(!result.length || result[result.length-1]<0)
                result.push(asteroids[i])
        }
    }
    return result;
};
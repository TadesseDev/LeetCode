/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {

    let arr=position.map((v,i)=>[v,speed[i]]).sort((a,b)=>a[0]-b[0])
    let result=arr.length
    for(let i=arr.length-1;i>0;i--){
        if(arr[i-1][1]>arr[i][1]){
            let diff1=(target-arr[i-1][0])/arr[i-1][1]
            let diff2=(target-arr[i][0])/arr[i][1]
            if(diff1<=diff2){
                arr[i-1][1]=arr[i][1]
                arr[i-1][0]=arr[i][0]
                result-=1
            }
        }
    }
    return result;
};
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    /*
    [0,4,2]
    [2,1,3]
    10
    arr=[10,2],[8,4][0,1][5,1][3,3]
    arr=[0,2][2,3][4,1]
    result=2
    */
    let arr=position.map((v,i)=>[v,speed[i]]).sort((a,b)=>a[0]-b[0])
    let result=arr.length
    for(let i=arr.length-1;i>0;i--){
        if(arr[i-1][1]>arr[i][1]){
            // console.log(i)
            let diff1=(target-arr[i-1][0])/arr[i-1][1]
            let diff2=(target-arr[i][0])/arr[i][1]
            if(diff1<=diff2){
                arr[i-1][1]=arr[i][1]
                arr[i-1][0]=arr[i][0]
                result-=1
            }
        }
    }
    // console.log(arr)
    return result;
};
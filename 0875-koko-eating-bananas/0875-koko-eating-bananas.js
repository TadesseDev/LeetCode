/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    
    /*
    [3,6,7,11], 8
    l=4
    r=3
    res=4
    mid=7
    while...
        mid=3
        h=10
        while...
            10<=8&&4<4
            
    */
    
    
    let arr=piles.sort((a,b)=>a-b)
    let left=Math.ceil(arr[0]/h), right=arr[arr.length-1]
    let res=right
    let mid=right
    while(left<=right){
        mid=Math.ceil((left+right)/2)
        let hou=0, j=0
        while(hou<=h&&j<piles.length){
            hou+=Math.ceil(piles[j]/mid)
            j+=1;
        }
        if(hou<=h){
            right=mid-1
            res=mid
        }else{
            left=mid+1
        }
            
    }
    return res
};
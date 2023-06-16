/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {

    let arr=piles.sort((a,b)=>a-b)
    let left=Math.ceil(arr[0]/h), right=arr[arr.length-1]
    let res=right
    let mid=right
    while(left<=right){
        mid=Math.ceil((left+right)/2)
        let hou=0, j=piles.length-1
        while(hou<=h&&j>=0){
            hou+=Math.ceil(piles[j]/mid)
            j-=1;
        }
        if(hou<=h){
            right=mid-1
            res=mid
        }else
            left=mid+1
            
    }
    return res
};
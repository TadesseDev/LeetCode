/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    /*
    1. initialize empty array as a to collect the final result 
    2. sort the array
    2. start iteration with i=0 and j=0, only increment
	2.1 check if the i'th array second element is equal of greater that the start element in the j'th array.  
		2.1.1 No: 
			- push [arr[i][0], arr[j-1][1]]
			- i=j
3. push [arr[i][0], arr[j-1][1]]
4. return result 
    */
 intervals.sort((a,b)=>a[0]-b[0])
    const result = []
    let i=0,j=1,max=intervals[0][1]
    while(j<intervals.length){
        if(!(max>=intervals[j][0])){
            result.push([intervals[i][0], max])
            i=j
            max=intervals[i][1]
        }
        if(intervals[j][1]>max)
            max = intervals[j][1]
        j++
    }
    result.push([intervals[i][0],  max])
    return result 
};
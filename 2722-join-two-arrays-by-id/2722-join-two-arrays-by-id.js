/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    
    const hash ={}
    
    arr1.forEach((ele)=>hash[ele.id] = ele)
    
    arr2.forEach(ele=>{
        hash[ele.id] = hash[ele.id] ? {...hash[ele.id], ...ele} : ele
    });
    
    return Object.values(hash).sort((a,b)=>a-b)
};

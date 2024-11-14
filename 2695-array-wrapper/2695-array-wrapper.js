/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
        this.nums = nums
    //    [Symbol.toPrimitive](hint){
    //     if(hint=='number'){
    //         return this.nums.reduce((accum, val)=>accum+val, 0)
    //     }
    //     else if(hint=='string'){
    //         return `[${this.nums}]`
    //     }
    //     else 
    //         return this.nums
    // }
};

// ArrayWrapper.prototype[Symbol.primitive] = function(hint){
//     console.log(hint)
//         if(hint=='number'){
//             return this.nums.reduce((accum, val)=>accum+val, 0)
//         }
//         else if(hint=='string'){
//             return `[${this.nums}]`
//         }
//         else 
//             return this.nums.reduce((accum, val)=>accum+val, 0)
// }
/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    // [Symbol.toPrimitive](hint){
    //     if(hint=='number'){
            return this.nums.reduce((accum, val)=>accum+val, 0)
        // }
    // }
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    // [Symbol.toPrimitive](hint){
    //     if(hint=='string'){
            return `[${this.nums}]`
        // }
    // }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
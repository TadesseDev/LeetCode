/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const prefixSumMap = new Map();
    prefixSumMap.set(0, -1);  // Initialize with special case for zero modulus.
    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        let mod = prefixSum % k;

        // Adjust for negative modulus values to handle negative numbers correctly.
        if (mod < 0) {
            mod += k;
        }

        if (prefixSumMap.has(mod)) {
            if (i - prefixSumMap.get(mod) > 1) {
                return true;
            }
        } else {
            prefixSumMap.set(mod, i);
        }
    }

    return false;
};
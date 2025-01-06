function arraySign(nums: number[]): number {
    const res = nums.reduce((accum, val) =>accum*val, 1)

    return res > 0 ? 1 : res < 0 ? -1 : 0
};
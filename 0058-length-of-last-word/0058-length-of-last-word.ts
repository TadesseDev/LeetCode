function lengthOfLastWord(s: string): number {
    const arr =  s.trim().split(" ")
    return arr[arr.length-1].length
};
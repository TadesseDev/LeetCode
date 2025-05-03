function myPow(x: number, n: number): number {
    if(n == 0)
        return 1
    let pow = Math.abs(n)
    let res = 1
    while(pow>0){
        if(pow%2==1){
            res*=x
        }
        x*=x
        pow = Math.floor(pow/2)
    }
    return n<0 ? 1/res : res
    // return Math.pow(x,n)
};
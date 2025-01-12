function calPoints(operations: string[]): number {
    function performOpe(arr: number[], ope: string){
        switch(ope){
            case '+':
                arr.push((+arr[arr.length-2])+(+arr[arr.length-1]))
                return 
            case 'D':
                arr.push(+arr[arr.length-1]*2)
                return 
            case 'C':
                arr.pop()
                return 
            default:
                throw new Error("no such operation")
        }
    }
    const res:number[] = []
    for(let i=0; i<operations.length; i++){
        if(!isNaN(+operations[i]))
            res.push(+operations[i])
        else {
            performOpe(res, operations[i])
        }
    }
    return res.reduce((accum, val)=>val+accum, 0)
};
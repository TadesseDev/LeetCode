function spiralOrder(matrix: number[][]): number[] {
    

    const newArr = [...matrix];
    let direction = 'left', position = 1;
    const result = []
    while(newArr.length){
        if(direction == 'left' && position == 1){
            result.push(...newArr.shift())
            direction = 'top';
        }
        else if(direction == 'top' && position == 1){
            newArr.forEach(row=>row.length && result.push(row.pop()))
            direction = 'left';
            position = -1
        }
        else if(direction == 'left' && position == -1){
            result.push(...newArr.pop().reverse())
            direction = 'top';
        }
        else if(direction == 'top' && position == -1){
            [...newArr].reverse().forEach(row=>row.length && result.push(row.shift()))
            direction = 'left';
            position = 1
        }
    }
    return result;
};
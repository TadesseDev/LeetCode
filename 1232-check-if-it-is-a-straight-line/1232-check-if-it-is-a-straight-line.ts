function checkStraightLine(coordinates: number[][]): boolean {
    const xchange = coordinates[0][0] - coordinates[1][0]
    const ychange = coordinates[0][1] - coordinates[1][1]

if(xchange ==0 || ychange==0)
return true
    let j=0
    while(++j<coordinates.length-1){
        const x = coordinates[j][0] - coordinates[j+1][0]
        const y = coordinates[j][1] - coordinates[j+1][1]
        if(x/xchange != y/ychange)
            return false
    }
return true
};
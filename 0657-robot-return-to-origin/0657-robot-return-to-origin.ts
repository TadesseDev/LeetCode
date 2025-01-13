function judgeCircle(moves: string): boolean {

    const accum = moves.split("").reduce((accum, val)=>{
        accum[val]=(accum[val] || 0)+1
        return accum
    }, {})
    if((accum['U']==accum['D'])&&(accum['L']==accum['R']))
        return true 
        return false
};
function isRobotBounded(instructions: string): boolean {
    /*
    1. set all the possitions in order
    2. set x and y values to 0 
    3. set alterate to 1
    4. set possition to 'Y'
    4. start iteration 
        5.1 if(G)
            5.1.1 check if possition is Y or X
            5.1.2 add alterate to x/y accoringly 
        5.2 else(R/L)
            5.2.1 if(R)
                5.2.1.1 if(Y)
                        possition=X
                5.2.1.1 else
                        possition=Y
                        alterate*=-1
            5.2.2 if(L)
                5.2.1.1 if(Y)
                        possition=X
                        alterate*=-1
                5.2.1.1 else
                        possition=Y
    6 if both x and y are 0 return true, if not return false 
    */

    let x = 0, y = 0, alternate = 1, position = 'Y', results=[];
    for (let i = 0; i <=instructions.length*instructions.length; i++) {
        Array.from(instructions).forEach(char => {
            if (char == 'G') {
                if (position == 'Y')
                    y += alternate
                else
                    x += alternate
            }
            else if (char == 'R') {
                if (position == 'Y')
                    position = 'X'
                else {
                    position = 'Y'
                    alternate *= -1
                }
            }
            else if (char == 'L') {
                if (position == 'Y') {
                    position = 'X'
                    alternate *= -1
                }
                else
                    position = 'Y'
            }
        })
        if (results.includes([x,y].toString())){
            results.push([x,y].toString())
            break
        }
        results.push([x,y].toString())
    }

results.pop()
    return results.includes([x,y].toString())

    //  const hash = Array.from(instructions).reduce((accum, val)=>{
    //     accum[val] = accum[val] ? accum[val]+1 : 1
    //     return accum
    //  }, {});
    // const value=hash[Object.keys(hash)[0]]
    // return Object.keys(hash).every(result => value==result)
};
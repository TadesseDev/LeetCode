function isRobotBounded(instructions: string): boolean {
   

    let x = 0, y = 0, alternate = 1, position = 'Y'
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

console.log(alternate, position, x, y)
    return alternate!==1 || position !== 'Y' || (x==0&&y==0)

};
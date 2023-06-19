/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let original=n
    const generator=(n)=>{
        if(n<=0)
            return [[0,1,")"]]
      let res=[...generator(n-1)]
      let ret=[]
      res.forEach((ele)=>{
          if(ele[0]<ele[1])
          ret.push([ele[0]+1,ele[1],"("+ele[2]])
          if(ele[1]<original)
          ret.push([ele[0],ele[1]+1,")"+ele[2]]) 
      })
        return ret
    }
  let result = generator(n*2-1).map(ele=>ele[2])
  return result
};
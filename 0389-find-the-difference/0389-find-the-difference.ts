function findTheDifference(s: string, t: string): string {
  const hash = {}
  Array.from(s).forEach(char=>{
    if(!hash[char])
        hash[char] = 1
    else
        hash[char] += 1
  })  

let res = ''
Array.from(t).forEach(char=>{
    if(!hash[char]){
        res = char
        return 
    }
    else{
        hash[char] -=1
    }
})

return res
};
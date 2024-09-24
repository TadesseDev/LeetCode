/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const hash= new Map()
    let commonStrings = []
    let listIndex = -1
    list1.forEach((val, index)=>{
        if(!hash.get(val) && hash.get(val)!=0)
            hash.set(val, index)
    })
    for(let index=0;index<list2.length;index++){
        let hashIndex = hash.get(list2[index]); 
        if(hashIndex || hashIndex===0){
            const indexsSum = index + hashIndex
                    // console.log(commonStrings, typeof listIndex, typeof index, typeof hashIndex )
            if(listIndex < 0 || indexsSum < listIndex){
                commonStrings = [list2[index]]
                listIndex = indexsSum
            }
            else if(indexsSum == listIndex)
                commonStrings.push(list2[index])
        }
            
    }
return commonStrings
};
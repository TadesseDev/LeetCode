/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let sortedHour=hours.sort((a,b)=>a-b)
    let i=0
    while(hours[i]<target)
        i++
    return hours.length-i
};
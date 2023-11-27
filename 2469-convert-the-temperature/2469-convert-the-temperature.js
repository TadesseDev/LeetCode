/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    // let ans=celsius+273.15
    // ans[1]=(ans[0]*1.80)+32.00
    // console.log()
    return [celsius+273.15, celsius*1.80+32.00]
};
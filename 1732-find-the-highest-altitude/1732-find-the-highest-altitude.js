/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let largestLat=0,sum=0;

    let latitude=0;
    while(latitude<gain.length){
        sum+=gain[latitude]
        if(sum>largestLat)
            largestLat = sum;
        latitude++
    }
return largestLat
};
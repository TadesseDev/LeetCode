
var TimeMap = function() {
    this.timeMap={};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(this.timeMap[key]){
        this.timeMap[key].push([timestamp,value])
    }else
        this.timeMap[key]=[[timestamp, value]]
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(this.timeMap[key]){
        let l=0,r=this.timeMap[key].length-1
        let mid=Math.floor((l+r)/2)
        while(l<=r){
            mid=Math.floor((l+r)/2)
            if(this.timeMap[key][mid][0]==timestamp)
                return this.timeMap[key][mid][1]
            else if(timestamp>this.timeMap[key][mid][0])
                l=mid+1
            else
                r=mid-1
        }
        if(r<0)
            return ""
        else if(timestamp>this.timeMap[key][mid][0])
            return this.timeMap[key][mid][1]
        else if(timestamp<this.timeMap[key][mid][0] && mid>0)
            return this.timeMap[key][mid-1][1]
        else 
            return ""

    }
    return ""
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
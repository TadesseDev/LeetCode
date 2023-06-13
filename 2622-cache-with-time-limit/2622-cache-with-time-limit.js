
var TimeLimitedCache = function() {
    this.number=0
    function timeBomb(key, startTime){
               // console.log("deleting", this, arguments)
            if(this[key]?.startTime==startTime){
               // console.log("deleting", this)
            delete this[key]
            this.number-=1
            }
        }
    this.terminator=(key, startTime, duration)=>{
        // console.log("starting to delete", this[key].startTime, key, startTime, duration)
        
        setTimeout(timeBomb.bind(this, key, startTime), duration);
    }
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let ret=!!this[key]
    if(!ret)
        this.number+=1
    this[key]={val: value, startTime: new Date()}
    this.terminator(key, this[key].startTime, duration)
    return ret
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
     return this[key]?.val??-1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.number
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
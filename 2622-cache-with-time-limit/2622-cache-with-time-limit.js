
var TimeLimitedCache = function() {
    this.number=0
    function timeBomb(key, startTime){
            if(this[key]?.startTime==startTime){
            delete this[key]
            this.number-=1
            }
        }
    this.terminator=(key, startTime, duration)=>{
        
        setTimeout(timeBomb.bind(this, key, startTime), duration);
    }
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let ret=!!this[key]
    if(!ret)
        this.number+=1
    this[key]={val: value, startTime: new Date()}
    this.terminator(key, this[key].startTime, duration)
    return ret
};


TimeLimitedCache.prototype.get = function(key) {
     return this[key]?.val??-1
};


TimeLimitedCache.prototype.count = function() {
    return this.number
};

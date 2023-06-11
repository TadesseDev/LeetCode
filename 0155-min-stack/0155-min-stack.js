
var MinStack = function() {
    this.arr = []
    this.minArr=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
   this.arr.push(val)
        let i=0
        while(i<this.minArr.length && val>this.minArr[i])
            i+=1;
        this.minArr.splice(i,0,val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   let val=this.arr[this.arr.length-1]
       this.arr.pop()
    let i=0
        while(val!=this.minArr[i])
            i+=1;
        this.minArr.splice(i,1)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minArr[0]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
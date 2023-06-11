/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.arr=new Array()
    // this.arr.fill(0)
    this.snapStore={}
    this.snap_id=0
    this.snapStore[this.snap_id]={}
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.arr[index]=val;
        this.snapStore[this.snap_id][index]=val
}

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snap_id+=1
    this.snapStore[this.snap_id]={}
    return this.snap_id-1
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    if(this.snapStore[snap_id]){
        while(snap_id>0 && typeof this.snapStore[snap_id][index]!= "number")
         snap_id-=1
        return this.snapStore[snap_id][index]||0
    }
   return 0
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
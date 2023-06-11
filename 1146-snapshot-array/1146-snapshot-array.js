/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.arr=new Array(length)
    this.arr.fill(0)
    this.snapStore={}
    this.snap_id=0
    this.arr.forEach((val,index)=>{
          this.snapStore[this.snap_id]={[index]: 0}
    })
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    // if(index==9430)
    //     console.log("snap id is", this.snap_id, val)
    this.arr[index]=val;
        this.snapStore[this.snap_id][index]=val

    // if(index==9430)
    //     console.log("snap id is", this.snap_id)
}

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    // if(this.snap_id>15000)
       // console.log(this.snap_id)
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
    // if(index==9430)
    //     console.log(this.snap_id, snap_id)
    if(this.snapStore[snap_id]){
        // console.log("snap found", snap_id,this.snapStore[snap_id][index])
        while(snap_id>0 && typeof this.snapStore[snap_id][index]!= "number"){
         snap_id-=1
        }
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
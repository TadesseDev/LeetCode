/**
 * @param {number} capacity
 */
class  Node{
    constructor(val, key, next=null, prev=null){
        this.val=val
        this.key=key
        this.next=next
        this.prev=prev
    }
}
var LRUCache = function(capacity) {
    this.limit = capacity
    this.hash = {}
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    
    if(this.hash[key]){
        let val=this.hash[key].val
        this.remove(key)
        this.insertNode(key, val)
        
    // console.log("get ", key, this.head, this.end.val)
    // console.log("--------------------------------------------------")
        return val
    }
    
    // console.log("get ", key, this.head, this.end.val)
    // console.log("--------------------------------------------------")
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.remove = function(key) {
            let node=this.hash[key]
            // let rem=this.head
        if(node==this.head){
            // console.log("removing")
            this.head=this.head.next
            if(this.head)
            this.head.prev=null
        }
        else if(node==this.end){
            this.end=this.end.prev
            if(this.end)
                this.end.next=null
        }
        else{
            node.prev.next=node.next
            node.next.prev=node.prev
        }
    delete this.hash[key]
}
LRUCache.prototype.insertNode = function(key, value) {
    let node=new Node(value, key)
    if(!this.head){
        this.head = node
        this.end=this.head 
    }else{
        this.end.next=node
        node.prev=this.end
        this.end=this.end.next
    }
    this.hash[key]=node
}
LRUCache.prototype.put = function(key, value) {
    //  old-key and limit is full/not
    // new-key add it to the end
        // if limit: update head and delete head hash
        // ele do noting 
        // update limit count
    if(this.hash[key]){
        this.remove(key)
    }else{
        if(this.limit<1){
            // console.log("hitting limit", key)
            this.remove(this.head.key)
        }
        // insert it to the end
        this.limit-=1
    }
        this.insertNode(key, value)
    // console.log("Insert ", key, this.head)
    // console.log("--------------------------------------------------")
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var Trie = function() {
    this.tree={val: null, child: [], valid: false}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.print= function(root){
    if(!root.child.length)
        return
    // console.log("parent", root.val, root.child)
    for(let node of root.child)
        this.print(node)
}
Trie.prototype.insert = function(word) {
    let insertion=word.split("")
    function insertIn(root){
        if(!insertion.length){
            root.valid=true
            return null;
        }
        let parent=null;
        let val=insertion.shift()
        
        for(let node of root.child){
            if(node.val==val){
                // console.log("finding", val)
                parent=node;
                break;
            }
        }
        
        if(!parent){
            parent={val: val, child: [], valid: false}
            // console.log(root.val, parent)
            root.child.push(parent)
        }
         insertIn(parent)
        // console.log(root)
    }
    // console.log("after inserting :",word)
    insertIn(this.tree)
    // this.print(this.tree)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let search=word.split("")
    function searchIn(root){
        if(!search.length){
            if(root.valid)
                return true
            return false
        }
        let val=search.shift()
        for(let node of root.child){
    // 
            if(node.val==val){
                return searchIn(node)
            }
        }
        return false
    }
    // console.log(this.tree)
    
    return searchIn(this.tree)
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
        let search=prefix.split("")
        
    // console.log("prifix in", prefix, search)
    function searchIn(root){
        if(!search.length){
            return true
        }
        let val=search.shift()
        for(let node of root.child){
            if(node.val==val){
                return searchIn(node)
            }
        }
        return false
    }
    return searchIn(this.tree)
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
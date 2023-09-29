
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
                parent=node;
                break;
            }
        }
        if(!parent){
            parent={val: val, child: [], valid: false}
            root.child.push(parent)
        }
         insertIn(parent)
    }
    insertIn(this.tree)
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
            if(node.val==val){
                return searchIn(node)
            }
        }
        return false
    }
    return searchIn(this.tree)
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
        let search=prefix.split("")
        
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
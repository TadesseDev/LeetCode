
var WordDictionary = function() {
    this.tree={val: '', child: [], valid: false}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.print = function(pre, root){
    if(root.valid)
        console.log(pre)
    root.child.forEach(node=>{
        this.print(pre+node.val, node)
    })
}

WordDictionary.prototype.addWord = function(word) {
    let myWords=word.split("")
    function insert(root){
        if(!myWords.length){
            root.valid=true
            return 
        }
        let newParent=null
        let val=myWords.shift()
        for(let node of root.child){
            if(node.val==val){
                newParent=node;
                break;
            }
        }
        if(!newParent){
        newParent = {val: val, child: [], valid: false}
        root.child.push(newParent)
        }
        insert(newParent)
    }
    insert(this.tree)
    // console.log("printing", word)
    // this.print("", this.tree)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let searchWord=word.split("")
    let found=false
    
    function matchChar(root, words){
        if(found)
            return
        else if(!words.length){
            if(root.valid)
                found=true
            return
        }
        let val=words.shift()
        for(let node of root.child){
            if(val==node.val||val=='.')
              matchChar(node, [...words]) 
            } 
    }
    matchChar(this.tree, searchWord)
    return found
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
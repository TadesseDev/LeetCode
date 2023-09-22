var serialize = function(root) {
    if (!root) {
        return "[]"; // Return an empty array for null root
    }
    
    let result = [];
    let queue = [root];
    let index = 0;
    
    while (index < queue.length) {
        let node = queue[index];
        
        if (node) {
            result.push(node.val); // Push the value of the node to the result array
            
            // Enqueue left child
            queue.push(node.left);
            
            // Enqueue right child
            queue.push(node.right);
        } else {
            result.push(null); // Push null for null nodes
        }
        
        index++;
    }
    
    // Remove trailing null values from the result
    while (result[result.length - 1] === null) {
        result.pop();
    }
    
    return JSON.stringify(result);
};

var deserialize = function(data) {
    if (data === "[]") {
        return null; // Return null for empty array
    }
    
    let arr = JSON.parse(data);
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let index = 0;
    
    index++;
    
    while (index < arr.length) {
        let node = queue.shift();
        
        if (arr[index] !== null) {
            node.left = new TreeNode(arr[index]);
            queue.push(node.left);
        }
        index++;
        
        if (index < arr.length && arr[index] !== null) {
            node.right = new TreeNode(arr[index]);
            queue.push(node.right);
        }
        index++;
    }
    
    return root;
};

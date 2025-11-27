/**
 * @param {string} senate
 * @return {string}
 */
 class Node {
    constructor(val, next){
        this.val=val;
        this.next=next||null;
    }
 }
var predictPartyVictory = function(senate) {
    const head = new Node(senate[0]);
    let tail = head;
    // const map = new Map([["R", 0],[ "D", 0]])
    // map.set(head.val, 1);
    for(let i=1; i<senate.length;i++){
        let node = new Node(senate[i]);
        tail.next=node;
        tail=tail.next;
        // map.set(node.val, map.get(node.val)+1)
    }
    tail.next=head;
    tail=head;

    do{
        current = tail;
        if(tail.val=="R"){
            while(current.next.val == "R" && current.next!=tail){
                current=current.next;
            }
            if(current.next==tail)
                return "Radiant"
                // map.set("D", map.get("D")-1)
        }if(tail.val=="D"){
            while(current.next.val == "D" && current.next!=tail){
                current=current.next;
            }
            if(current.next==tail)
                return "Dire"
                // map.set("D", map.get("D")-1)
        }

        current.next=current.next.next;
        tail=tail.next;
        // console.log(map, map.get("D"), map.get("R"), tail.val, "\n")
    }while(true)

    return map.get("D") ? "Dire":"Radiant"
};

// R
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
   
    
    for(let i=1; i<senate.length;i++){
        let node = new Node(senate[i]);
        tail.next=node;
        tail=tail.next;
       
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
                
        }else if(tail.val=="D"){
            while(current.next.val == "D" && current.next!=tail){
                current=current.next;
            }
            if(current.next==tail)
                return "Dire"
        }

        current.next=current.next.next;
        tail=tail.next;
        // console.log(map, map.get("D"), map.get("R"), tail.val, "\n")
    }while(true)

    return map.get("D") ? "Dire":"Radiant"
};

// R
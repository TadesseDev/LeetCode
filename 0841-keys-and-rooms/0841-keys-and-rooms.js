/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    /**
    * coutn to count the number of visists'
    * hash to keep track for the visited cells
    * do recursion.
        - start from 0, pass all the keys from cell 0,
        - on each step,
            - if cell was never visisted(hash), 
                - update count 
                - update hash
                - collect the keys from a cell
                - call recursion for each 
            - else 
                return 

    */

    const hash= new Set([0]);
    let count=0;
    function visit(rooms, cells){
        
        for(let i=0;i<cells.length;i++){
            if(!hash.has(cells[i])){
                count++;
                hash.add(cells[i])
                visit(rooms, rooms[cells[i]])
            }
        }
    }

    visit(rooms, rooms[0])
    return count==rooms.length-1
};
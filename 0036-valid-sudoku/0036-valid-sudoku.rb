# @param {Character[][]} board
# @return {Boolean}
def is_valid_sudoku(board)
    def check_sub_box(cel, arr)
        x,y=*cel
        square_hash={}
        for j in x..x+2
            for k in y..y+2
                return false if square_hash[arr[j][k]] 
                square_hash[arr[j][k]]=true if arr[j][k] !='.'
            end
        end
        true
    end
    def taceCell(cel, arr)
        left_hash={}
        right_hash={}
        for k in 0..8 do 
            return false if left_hash[arr[cel][k]] || right_hash[arr[k][cel]]
            left_hash[arr[cel][k]] = true if arr[cel][k] !='.'
            right_hash[arr[k][cel]] = true if arr[k][cel] !='.'
        end
         true
    end
    
    j=0
    while j<9
        k=0
        while k<9
            # p m
            return false unless check_sub_box([j,k], board)

            k+=3
        end
        j+=3
    end
    for m in 0..8 do
        return false if !taceCell(m, board)
    end
    return true
end
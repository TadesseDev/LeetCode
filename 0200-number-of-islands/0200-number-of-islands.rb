# @param {Character[][]} grid
# @return {Integer}

def replace_grid(grid, start)
    # p grid
    q0=start[0]
    q1=start[1]
    grid[q0][q1] = nil
    replace_grid(grid,[q0-1, q1]) if q0>0 && grid[q0-1][q1] == "1"
    replace_grid(grid,[q0+1, q1]) if q0+1<grid.length && grid[q0+1][q1] == "1"
    replace_grid(grid,[q0, q1-1]) if q1>0 && grid[q0][q1-1] == "1"
    replace_grid(grid,[q0, q1+1]) if q1+1 < grid[q0].length && grid[q0][q1+1] == "1"
end

def num_islands(grid)
    r=0
    sum=0
    while r<grid.length
        c=0
        while c<grid[r].length
             if grid[r][c] == "1"
                 replace_grid(grid, [r,c])
                sum+=1
             end
            c+=1
        end
        r+=1
    end
    # breadth first search
    sum
end
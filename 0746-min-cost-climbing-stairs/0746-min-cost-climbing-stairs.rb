# @param {Integer[]} cost
# @return {Integer}
def min_cost_climbing_stairs(cost)
    @cost=cost
    @costs_hash={}
@costs_hash[(cost.length-2).to_s]=cost[cost.length-2]
@costs_hash[(cost.length-1).to_s]=cost[cost.length-1]


    def set_costs len
        cost1=@cost[len] + @costs_hash[(len+1).to_s] if @costs_hash.include?((len+1).to_s)
        cost1=@cost[len] + set_costs(len+1) unless @costs_hash.include?((len+1).to_s)
        cost2=@cost[len] + @costs_hash[(len+2).to_s] if @costs_hash.include?((len+2).to_s)
        cost1=@cost[len] + set_costs(len+2) unless @costs_hash.include?((len+2).to_s)
        
        min=[cost1, cost2].min
        @costs_hash[len.to_s]=min
        return min
    end
    set_costs(0) if cost.length>2
    p @costs_hash
    return [@costs_hash[0.to_s], @costs_hash[1.to_s]].min
end
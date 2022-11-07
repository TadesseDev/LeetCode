# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    min=0
    max=0
    profit=0
    for i in 1..prices.length-1
        if prices[i]>prices[max]
            max=i
            new_profit=prices[max]-prices[min]
           profit=new_profit if new_profit>profit
         elsif prices[i]<prices[min]
             min=i
             max=i
        end
    end
    profit
end
# @param {Integer[]} customers
# @param {Integer[]} grumpy
# @param {Integer} minutes
# @return {Integer}
def max_satisfied(customers, grumpy, minutes)
    i=j=gc=index=max=0
    while i<customers.length
        gc+=customers[i] if grumpy[i]==1
        if i>=minutes
            gc-=customers[j] if grumpy[j]==1
            j+=1
             index=j if gc>max
        end
         max=gc if gc>max
        i+=1
    end
    i=0
    max_customer=0
    while i<customers.length
        max_customer+=customers[i] if grumpy[i]==0 || (i>=index && i<minutes+index)
        i+=1
    end
    max_customer
end
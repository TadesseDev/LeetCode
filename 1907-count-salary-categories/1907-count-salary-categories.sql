with grouped as (
    select 
case
when income<20000 then 'Low Salary' 
when income <= 50000 then 'Average Salary'
else 'High Salary'
end as category, 
income
from accounts
), 
place_holder AS (
    SELECT 'High Salary' AS category
    UNION ALL
    SELECT 'Low Salary'
    UNION ALL
    SELECT 'Average Salary'
)
select 
place_holder.category, COALESCE(count(income), 0) as accounts_count 
from grouped 
right join place_holder 
on place_holder.category = grouped.category
group by place_holder.category 
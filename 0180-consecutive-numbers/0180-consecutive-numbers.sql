-- Write your PostgreSQL query statement below
select distinct first.num as ConsecutiveNums from logs as first
join 
logs as second 
on first.id+1 = second.id 
and first.num = second.num
join 
logs as thired 
on second.id+1 = thired.id 
and second.num = thired.num

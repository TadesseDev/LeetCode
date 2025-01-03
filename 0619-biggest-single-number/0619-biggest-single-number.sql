-- Write your PostgreSQL query statement below
select max(num) as num from (
    select num from mynumbers group by num having count(num) < 2
)
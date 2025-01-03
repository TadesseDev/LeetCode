-- Write your PostgreSQL query statement below
with odd as (
    select id, student from seat where id%2!=0
), even as (
    select id, student from seat where id%2=0
)
select COALESCE(odd.id, even.id) as id, COALESCE(even.student, odd.student) as student
from odd
left join even
on odd.id+1 = even.id
union all
select even.id, odd.student 
from even
left join odd
on even.id-1 = odd.id
order by id
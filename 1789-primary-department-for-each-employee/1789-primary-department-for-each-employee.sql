-- Write your PostgreSQL query statement below
-- select * from employee where primary_flag like 'Y'
-- union 
with singular_dpt as (
    select employee_id 
    from employee 
    group by employee_id 
    having count(department_id) = 1
)
select employee_id, department_id 
from employee 
where primary_flag = 'Y' 
or 
employee_id 
in (
    select employee_id 
    from singular_dpt
)

-- select employee_id, department_id from employee 
-- where primary_flag = 'Y' 
-- or 
-- employee_id in (
--     select employee_id from employee group by employee_id having count(department_id) = 1
-- )

-- WITH singular_dpt AS (
--     SELECT employee_id 
--     FROM employee 
--     GROUP BY employee_id 
--     HAVING COUNT(department_id) = 1
-- )
-- SELECT e.employee_id, e.department_id
-- FROM employee e
-- LEFT JOIN singular_dpt s ON e.employee_id = s.employee_id
-- WHERE e.primary_flag = 'Y' OR s.employee_id IS NOT NULL;
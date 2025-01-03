-- Write your PostgreSQL query statement below
select managers.employee_id, managers.name, count(employee.employee_id) as reports_count, ROUND(avg(employee.age)) 
as average_age from
(
    select distinct m.reports_to as employee_id, e.name from employees as e 
    join employees as m on m.reports_to = e.employee_id 
    where m.reports_to is not null
) as managers
left join employees as employee 
on managers.employee_id = employee.reports_to 
group by managers.employee_id, managers.name

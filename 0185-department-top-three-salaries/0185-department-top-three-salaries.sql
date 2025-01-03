-- Write your PostgreSQL query statement below
-- find the to 3 distinct salary for each department
-- select the minimum of each salary in each department 
-- find employees in each department having a salary more than or equal to the minimum sallary 
select dept.name as Department, em.name as Employee, em.salary as Salary from
(
    select name, min(salary) as min_sallary from (
        select name, salary, ROW_NUMBER() over(partition by name order by salary DESC) as row_number from (
            select distinct department.name, salary
            from department 
            join employee 
            on department.id = employee.departmentId 
            order by salary DESC 
        )
    ) 
    where row_number<=3
    group by name
) as dept 
join Department 
on dept.name = Department.name
join employee as em 
on Department.id = em.departmentId
where em.salary >= dept.min_sallary 


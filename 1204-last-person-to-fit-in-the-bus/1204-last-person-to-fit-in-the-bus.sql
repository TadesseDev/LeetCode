-- Write your PostgreSQL query statement below
select person_name from (
    select person_id, person_name, weight, turn, sum(weight) over (order by turn) as run_sum from queue order by turn DESC
) where run_sum <= 1000 LIMIT 1; 
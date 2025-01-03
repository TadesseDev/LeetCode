-- Write your PostgreSQL query statement below
select primary_results.product_id, primary_results.first_year, secondary_results.quantity, secondary_results.price 
from 
(select  product_id, min(year) as first_year from sales group by product_id ) as primary_results
join
(select quantity, price, product_id, year from sales) as secondary_results 
on
primary_results.product_id = secondary_results.product_id and 
primary_results.first_year = secondary_results.year

-- Write your PostgreSQL query statement below
select customer_id from customer group by customer_id having count(distinct product_key) =
(select count(distinct product_key) from product)
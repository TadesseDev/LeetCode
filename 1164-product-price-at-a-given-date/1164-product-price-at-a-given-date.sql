-- Write your PostgreSQL query statement below

-- with product_ids as (select distinct product_id from products)
-- select prs.product_id, COALESCE(agr.new_price, 10) as price from product_ids as prs
-- left join (
--     select sub.product_id, sub.change_date , sub2.new_price from (select product_id, max(change_date) as change_date from products where change_date <= '2019-08-16' group by product_id) as sub join products as sub2 on sub.product_id =  sub2.product_id and sub.change_date = sub2.change_date 
-- ) as agr
-- on prs.product_id = agr.product_id


select prod.product_id, prod.new_price as price from
(select product_id, max(change_date) as change_date from products where change_date <= '2019-08-16' group by product_id) as agre 
join products as prod on agre.product_id = prod.product_id and agre.change_date = prod.change_date
union
select prod.product_id, 10 as price from
(select product_id, min(change_date) as change_date from products group by product_id having min(change_date) > '2019-08-16') as agre
join products as prod on agre.product_id = prod.product_id and agre.change_date = prod.change_date
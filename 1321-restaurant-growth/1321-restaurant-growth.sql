
select visited_on, amount, average_amount from (
    select 
    running.visited_on, 
    ROUND(sum(customer.amount) over (partition by  running.visited_on), 2) as amount, 
    ROUND((sum(customer.amount) over (partition by  running.visited_on))::DECIMAL/7, 2) as average_amount
    from ( 
        select DISTINCT visited_on
        from Customer 
        where visited_on - interval '6 day' >= (select min(visited_on) from customer)
    ) as running 
    join customer
    on running.visited_on - interval '6 day' <= customer.visited_on and  running.visited_on >= customer.visited_on
)
group by visited_on, amount, average_amount
order by visited_on

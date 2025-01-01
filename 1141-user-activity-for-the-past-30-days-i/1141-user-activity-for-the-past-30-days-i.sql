-- Write your PostgreSQL query statement below
select activity_date as day, count(DISTINCT user_id) as active_users from activity 
where
activity_date > (date('2019-07-27') - interval '30 day')
and
activity_date <= date('2019-07-27')
group by 
activity_date
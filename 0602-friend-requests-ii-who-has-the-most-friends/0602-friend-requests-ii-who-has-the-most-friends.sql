-- Write your PostgreSQL query statement below
select COALESCE(req.requester_id, acep.accepter_id) as id, COALESCE(req.request_sum, 0) + COALESCE(acep.accepter_sum, 0) as num
from (
    select requester_id, 
    count(requester_id) request_sum
    from  RequestAccepted group by requester_id
) as req 
full join (
    select accepter_id, 
    count(accepter_id) as accepter_sum 
    from  RequestAccepted group by accepter_id
) as acep 
on 
req.requester_id = acep.accepter_id
order by num DESC, id
limit 1
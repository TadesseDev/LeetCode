-- Write your PostgreSQL query statement below
select ROUND(sum(same_2015.tiv_2016)::DECIMAL, 2) as tiv_2016 from (
    select pid, tiv_2016, lat, lon, 
    count(tiv_2015) over(partition by tiv_2015) as tiv_2015_count
    from Insurance
) 
as same_2015 
join (select lat, lon, 
      count(lat) as cordinate_count 
      from Insurance group by  lat, lon having count(lat) = 1
     ) as unique_lat_long
on same_2015.lat = unique_lat_long.lat and same_2015.lon = unique_lat_long.lon
where same_2015.tiv_2015_count>1
-- Write your PostgreSQL query statement below

select * from (
    select users.name as results from users 
    join MovieRating
    on users.user_id = MovieRating.user_id
    group by users.user_id, users.name
    having count(MovieRating.movie_id) =  (
    select max(rating) from (
        select users.name, count(MovieRating.movie_id) as rating from users 
        join MovieRating
        on users.user_id = MovieRating.user_id
        group by users.user_id, users.name
    )
    ) order by name ASC limit 1
)
union all
select * from (select subq.title as results from (
    select movies.movie_id, movies.title, avg(MovieRating.rating) as average
    from movies
    join MovieRating 
    on movies.movie_id = MovieRating.movie_id
    where MovieRating.created_at >= '2020-02-01' and  MovieRating.created_at <= '2020-02-29'
    group by movies.movie_id, movies.title
) as subq
group by subq.movie_id, subq.title, subq.average
having subq.average = (
    select max(average) from (
    select avg(MovieRating.rating) as average
    from movies
    join MovieRating 
    on movies.movie_id = MovieRating.movie_id
    where MovieRating.created_at >= '2020-02-01' and  MovieRating.created_at <= '2020-02-29'
    group by movies.movie_id
    )
)order by subq.title ASC LIMIT 1)

-- select subq.title, average as results from (
--     select movies.movie_id, movies.title, avg(MovieRating.rating) as average
--     from movies
--     join MovieRating 
--     on movies.movie_id = MovieRating.movie_id
--     where MovieRating.created_at >= '2020-02-01' and  MovieRating.created_at <= '2020-02-29'
--     group by movies.movie_id, movies.title
-- ) as subq
-- group by subq.movie_id, subq.title, subq.average
-- having subq.average = (
    -- select max(average) from (
    -- select avg(MovieRating.rating) as average
    -- from movies
    -- join MovieRating 
    -- on movies.movie_id = MovieRating.movie_id
    -- where MovieRating.created_at >= '2020-02-01' and  MovieRating.created_at <= '2020-02-29'
    -- group by movies.movie_id
    -- )
-- )
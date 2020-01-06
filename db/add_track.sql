insert into track
( users_id, blood_sugar, insulin_units, time, date)
values
( $1,$2 ,$3 , $4, $5)
returning track_id;

-- select 
-- from track
-- where users_id = $1
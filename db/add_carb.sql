insert into carb
(food_name, carbs, track_id)
values
($1, $2, $3);

select *
from track t
join carb c on c.track_id = t.track_id
where t.users_id = $4

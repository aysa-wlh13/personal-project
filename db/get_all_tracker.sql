select *
from track t
join carb c on c.track_id = t.track_id
where t.track_id = $1 and t.users_id = $2
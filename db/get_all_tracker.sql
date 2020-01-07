select *
from track t
join carb c on c.track_id = t.track_id
where t.users_id = $1
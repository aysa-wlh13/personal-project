select distinct room_id
from chats 
where (room_id ilike ${room1} or room_id ilike ${room2}) and users_id in (
    select users_id
    from users
    where users_id = ${users_id}
    order by users_id asc
)
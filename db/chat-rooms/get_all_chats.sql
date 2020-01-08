select firstName,lastName,users_id
from users
where users.users_id in (
    select users_id 
    from chats
    where room_id ilike ${room1} or room_id ilike ${room2}
) and users_id != ${users_id}
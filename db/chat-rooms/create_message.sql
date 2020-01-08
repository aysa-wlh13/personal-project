insert into chats (message, users_id, room_id)
values (${message}, ${users_id}, ${room});

select message, chat_id, chats.users_id, firstName,lastName
from chatss
join users on users.users_id = chats.users_id
where room_id = ${room};
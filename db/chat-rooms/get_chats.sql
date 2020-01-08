select message, chat_id, chats.users_id, firstName,lastName
from chats
join users on users.users_id = chats.users_id
where room_id = ${room}
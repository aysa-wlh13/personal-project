-- users table
create table users (
    users_id serial primary key,
    is_admin boolean default false,
    username varchar(250) unique,
    password varchar(250),
    doctor varchar(250),
    firstName varchar(250),
    lastName varchar(250)
)

insert into users 
(is_admin, username, password, doctor, firstName, lastName)
values
(true, 'tucker@gmail', '1111', null, 'Ben', 'Tucker'),
(false, 'wyatt@gmail', '2222', 'Ben Tucker', 'Wyatt', 'Mata')

-- select *
-- from users


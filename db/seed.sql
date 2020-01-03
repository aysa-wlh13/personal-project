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

--track
create table track (
    track_id serial primary key,
    users_id int references users(users_id),
    blood_sugar int,
    insulin_units numeric,
    time varchar,
    date varchar
)

insert into track
( users_id, blood_sugar, insulin_units, time, date)
values
( 4, 100, 2.7, '9:00 am', '1/2/20'),
( 4, 150, 8.3, '12:00 pm', '1/2/20'),
( 4, 111, 10.9, '6:00 pm', '1/2/20')

-- select *
-- from track

--carb
create table carb (
    carb_id serial primary key,
    food_name varchar,
    carbs int,
    track_id int references track(track_id)
)

insert into carb
(food_name, carbs, track_id)
values
('banana', 10, 1),
('bread', 32, 2),
('cheese', 6, 2),
('ham', 6, 2),
('tortia', 22, 3),
('tomato sauce', 14, 3),
('shredded cheese', 6, 3)

-- select *
-- from carb


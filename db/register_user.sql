insert into users(
    is_admin, 
    username, 
    password,
    doctor,
    firstName,
    lastName
) values(
    $1,
    $2,
    $3,
    $4,
    $5,
    $6
)
returning *;
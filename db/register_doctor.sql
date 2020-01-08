insert into doctor( 
    username, 
    password,
    firstName,
    lastName
) values(
    $1,
    $2,
    $3,
    $4
)
returning *;
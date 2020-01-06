update track
set blood_sugar = $2, insulin_units = $3, time = $4, date = $5
where track_id = $1;

update carb 
set food_name = $6, carbs = $7
where track_id = $1;

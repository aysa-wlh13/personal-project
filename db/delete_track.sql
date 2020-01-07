delete from carb 
where track_id = $1;

delete from track
where track_id = $1;


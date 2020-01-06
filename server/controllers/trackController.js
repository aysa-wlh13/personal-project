module.exports = {
    //get
    getTracker: async(req, res) => {
        console.log(req.session.user)
        console.log(req.params)

        const {track_id} = req.params

        const db = req.app.get ('db')

        const userTracker = await db.get_all_tracker([track_id, req.session.user.users_id])

        res.status(200).send(userTracker);
    },

    //post
    addTracker: async(req, res) => {
        const db = req.app.get('db');

        const {user_id, blood_sugar, insulin_units, time, date, food_name, carbs} = req.body;


        let newTrack = await db.add_track([req.session.user.users_id, blood_sugar, insulin_units, time, date])

        console.log(newTrack)

        res.status(200).send(newTrack)
    },

    //put
    editTracker: async(req, res) => {
        const { track_id, blood_sugar, insulin_units, time, date, food_name, carbs} = req.body

        const db = req.app.get('db');

        db.update_track([track_id, blood_sugar, insulin_units, time, date, food_name, carbs])

        let updateUser = await db.check_user(track_id);

        updateUser = updateUser[0];
    },  

    //delete
    deleteTracker: async(req, res) => {

    }


};
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

        const {blood_sugar, insulin_units, time, date, food_name, carbs} = req.body;

        const {users_id} = req.session.user
         let newTrack = await db.add_track([users_id, blood_sugar, insulin_units, time, date]) 

         let track_id = newTrack [0].track_id
         let newCarb = await db.add_carb([food_name, carbs, track_id, users_id])

        // console.log(newTrack)
        
        res.status(200).send(newCarb)
    },

    //put
    editTracker: (req, res) => {
        const {blood_sugar, insulin_units, time, date, food_name, carbs} = req.body

        const {track_id} = req.params

        const db = req.app.get('db');

        db.update_track([track_id, blood_sugar, insulin_units, time, date, food_name, carbs]).then(result => {
            return res.sendStatus(200)
        })

    },  

    //delete
    deleteTracker: async(req, res) => {
        // const db = req.app.get('db');

        // const {users_id} = req.session;
        // const {track_id} = 

        
    }


};
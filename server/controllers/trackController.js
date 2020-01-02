module.exports = {
    //get
    getTracker: async(req, res) => {
       const db = await req.app.get('db')
       const {id} = req.params
       db.get_all_tracker(+id).then(allTracker => {

           return res.status(200).send(allTracker);
       })

    //    const userTreasure = await req.app.get('db')       .get_user_treasure([req.session.user.id]);
    //    return res.status(200).send(userTreasure);
    },

    //post
    addTracker: async(req, res) => {

    },

    //delete
    deleteTracker: async(req, res) => {

    },

    //put
    editTracker: async(req, res) => {

    }  

};
module.exports = {
    getPatient: (req, res) => {
        const db = req.app.get('db');
        const {firstname, lastname} = req.session.user
        let name = `${firstname} ${lastname}`
        console.log(typeof name)
        db.get_patient(name).then(result => {
            res.status(200).send(result)
        }).catch(err => {
            res.sendStatus(500)
            })
    },

    getPatientTracker: (req, res) => {
        console.log(req.params)
        const db = req.app.get ('db')

        const {users_id} = req.params

        db.get_all_tracker(users_id).then(result => {
            res.status(200).send(result)
        }).catch(err => {
            res.sendStatus(500)
            })
    }
}

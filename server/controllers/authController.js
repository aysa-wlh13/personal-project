const bcrypt = require('bcryptjs');

module.exports = {
    doctorRegister: async(req, res) => {
        const{username, password, firstName, lastName} = req.body;
        const db = req.app.get('db');
        const{session} = req;
        // console.log(req.body)
        let user = await db.check_user(username);
        user = user[0];

        if(user){
            return res.status(400).send('User is already exists')        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_doctor([ username, hash, firstName, lastName]);
        newUser = newUser[0];

        session.user = newUser;
        console.log(req.session.user)
        res.status(201).send(session.user)
    },

    patientRegister: async(req, res) => {
        const{username, password, doctor, firstName, lastName} = req.body;
        const db = req.app.get('db');
        const{session} = req;

        let user = await db.check_user(username);
        user = user[0];

        if(user){
            return res.status(400).send('User is already exists')        
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user(false, username, hash, doctor, firstName, lastName);
        newUser = newUser[0];

        

        session.user = newUser;
        console.log(req.session.user)
        res.status(201).send(session.user)
    },

    login: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        const{session} = req;

        let user = await db.check_user(username);

        user = user [0];
        if(!user){
            return req.status(400).send('User not found');
        }else {
            let foundUser = bcrypt.compareSync(password, user.password);

            if(foundUser){
                delete user.password;
                session.user = user;
                console.log(session.user)
                return res.status(202).send(session.user);
            }else{
                return res.status(400).send('Incorrect Password');
            }
        }
    },

    logout: (req,res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUser: (req, res) => {
        const {user} = req.session;
        if(user){
            res.status(200).send(user)
        }else{
            res.status(500).send('user not on session')
        }
    }
}
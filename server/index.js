require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const authCtrl = require('./controllers/authController');
const trackCtrl = require('./controllers/trackController');
// const auth = require('./controllers/middleware/authMiddleware');



const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET}=process.env;

const app = express();

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))



//Endpoints
//authController endpoints
app.post('/auth/doctorRegister', authCtrl.doctorRegister);

app.post('/auth/patientRegister', authCtrl.patientRegister);

app.post('/auth/login', authCtrl.login);

app.post('/auth/logout', authCtrl.logout);

app.post('/auth/user', authCtrl.getUser);

//trackerController
//get
app.get('/api/allTracker/:id', trackCtrl.getTracker);

//post


//put

    
//delete


//chatRoomController


const port = SERVER_PORT;
app.listen(port, () => console.log(`${port} is Haunted!`))
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const authCtrl = require('./controllers/authController');
const trackCtrl = require('./controllers/trackController');
const pCtrl = require('./controllers/patientController');
//sockets
const socket = require("socket.io");
const sockCtrl = require('./controllers/SocketsController');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET}=process.env;

const app = express();


app.use(express.json())

//

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

//////////////////////////////////////////////////

const port = SERVER_PORT;
const io = socket(
    app.listen(port, () => console.log(`${port} is Haunted!`))
);

//////////////////////////////////////////////////////
//Endpoints
//authController endpoints
app.post('/auth/doctorRegister', authCtrl.doctorRegister);

app.post('/auth/patientRegister', authCtrl.patientRegister);

app.post('/auth/login', authCtrl.login);

app.post('/auth/logout', authCtrl.logout);

app.post('/auth/user', authCtrl.getUser);

//////////////////////////////////////////////////////
//trackerController
//get
app.get('/api/getTracker', trackCtrl.getTracker);

//post
app.post('/api/addTracker', trackCtrl.addTracker)

//put
app.put('/api/editTracker/:track_id', trackCtrl.editTracker)
    
//delete
app.delete('/api/deleteTracker/:track_id',trackCtrl.deleteTracker);

//////////////////////////////////////////////////////
//patientsTracker
//get
app.get('/api/getPatient', pCtrl.getPatient);

app.get('/api/getPatientTracker/:users_id', pCtrl.getPatientTracker);

//////////////////////////////////////////////////////
//chatRoomController
//get
app.get(`/api/chats`, sockCtrl.getChats);

//get
app.get('/api/getChat/:users_id',sockCtrl.getChat)


//////////////////////////////////////////////////////
//Sockets

    


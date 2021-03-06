import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing';
import DoctorRegistration from './Components/DoctorRegistration/DoctorRegistration';
import PatientRegistration from './Components/PatientRegistration/PatientRegistration';
import Tracker from './Components/Tracker/Tracker';
import ChatRoom from './Components/ChatRoom/ChatRoom';
import Patients from './Components/Patients/Patients';
import DoctorTracker from './Components/Patients/DoctorTracker';
import Stripe from './Components/Stripe/Stripe';

export default (
    <Switch>
        <Route path='/stripe' component={Stripe}/>
        <Route path='/login' component={Landing}/>
        <Route path='/doctor-registration' component={DoctorRegistration}/>
        <Route path='/patient-registration' component={PatientRegistration}/>
        <Route path='/dashboard/tracker' component={Tracker}/>
        <Route path='/dashboard/ChatRoom' component={ChatRoom}/>
        <Route path='/patients/:users_id' component={DoctorTracker}/>
        <Route path='/patients' component={Patients}/>

    </Switch>
)

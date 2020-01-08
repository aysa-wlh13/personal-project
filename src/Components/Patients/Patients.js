import React, {Component} from 'react';
import DoctorHeader from '../DoctorHeader/DoctorHeader'

class Patients extends Component {
    constructor(){
        super()

        this.state = {

        }
    }

    //get users where admin is false

    render(){
        return(
            <div>
               Patients
               <DoctorHeader/>
            </div>
        )
    }
}

export default Patients;
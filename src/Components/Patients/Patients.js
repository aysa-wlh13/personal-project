import React, {Component} from 'react';
import DoctorHeader from '../DoctorHeader/DoctorHeader'
import axios from "axios";
import {Link} from 'react-router-dom'



class Patients extends Component {
    constructor(){
        super()

        this.state = {
            patient:[]
        }
    }

    componentDidMount(){
        this.getPatient();
    }

    //get
    getPatient = () => {
        axios.get("/api/getPatient").then(res => {
            this.setState({
                patient: res.data
            })
            console.log(res.data)
        })
    }

    //get
    getPatientTracker = () => {
        axios.get("").then(res => {
        
        });
      };

    doctorView = (id) => {
        this.props.history.push(`/patients/${id}`)  
     };

    render(){
        console.log(this.state.patient)
        let patient = this.state.patient.map(
            (el,i) => (
            <div>
                <h1>{el.firstname}</h1>
                <button onClick={() => this.doctorView(el.users_id)}>Tracker</button>
            </div>
        ))

        return(
            <div>
                {/* <button>Chat Room</button> */}
               <DoctorHeader/>
               {patient}
            </div>
        )
    }
}

export default Patients;
import React, {Component} from 'react';
import DoctorHeader from '../DoctorHeader/DoctorHeader'
import axios from "axios";
import './Patients.css';

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



    doctorView = (id) => {
        this.props.history.push(`/patients/${id}`)  
     };

    render(){
        console.log(this.state.patient)
        let patient = this.state.patient.map(
            (el,i) => (
            <section className='p-back'>
                <div className='name-track-box'>
                    <h1 className='name-box'>{el.firstname}</h1>

                    <button className='track
                    ' onClick={() => this.doctorView(el.users_id)}>Tracker</button>
                </div>
            </section>
        ))

        return(
            <div className='patent-back'>
                {/* <button>Chat Room</button> */}
               <DoctorHeader/>
               {patient}
            </div>
        )
    }
}

export default Patients;
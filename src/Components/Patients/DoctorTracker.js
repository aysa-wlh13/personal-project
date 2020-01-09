import React, {Component} from 'react';
import axios from "axios";
import DoctorHeader from '../DoctorHeader/DoctorHeader'
import { Link } from 'react-router-dom';
import './DoctorTracker.css';


class DoctorTracker extends Component {
    constructor(){
        super()

        this.state = {
            tracks:[]
        }
    }

    componentDidMount() {
        this.getPatientTracker()
    }
 

    //get
    getPatientTracker = () => {
        axios.get(`/api/getPatientTracker/${this.props.match.params.users_id}`).then(res => {
            this.setState({
                tracks: res.data
            })
        });
      };



    render(){
        console.log(this.props)
        console.log(this.state.tracks)
        let tracks = this.state.tracks.map((el, i) => (
            <div className="doctor-tracks">
            <h3>{el.blood_sugar} bg</h3>
            <h3>{el.food_name}</h3>
            <h3>{el.carbs} grams</h3>
            <h3>{el.insulin_units} units</h3>
            <h3>{el.time}</h3>
            <h3>{el.date}</h3>
            </div>
        ))
        return(

            <div>
                <DoctorHeader/>

                {tracks}

            </div>
        )
    }
}

export default DoctorTracker;
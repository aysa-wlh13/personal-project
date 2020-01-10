import React, {Component} from 'react';
import axios from "axios";
import DoctorHeaderTracks from '../DoctorHeaderTracks/DoctorHeaderTracks'
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
            <article className='doctor-track-behind'>
                <div className="doctor-tracks">
                <h3 className='doctor-track-box'>{el.blood_sugar} bg</h3>
                <h3 className='doctor-track-box'>{el.food_name}</h3>
                <h3 className='doctor-track-box'>{el.carbs} grams</h3>
                <h3 className='doctor-track-box'>{el.insulin_units} units</h3>
                <h3 className='doctor-track-box'>{el.time}</h3>
                <h3 className='doctor-track-box'>{el.date}</h3> 
                </div>
            </article>
        ))
        return(

            <div>
                <DoctorHeaderTracks/>
                {tracks}

            </div>
        )
    }
}

export default DoctorTracker;
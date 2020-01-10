import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import newLogoSmall from './newLogoSmall.png'




class DoctorHeaderTracks extends Component {

    render(){
        return(
            <div className='doctor-top'>
                <img
                    className='logo'
                    src={newLogoSmall} 
                    alt='logo' 
                    height='50'/>

            <section className='move-buttons'>
                <Link to='/patients'>
                    <button className='doctor-move-buttons-style'>
                        Back to Patients
                    </button>
                </Link>

                <Link to='/login'>
                    <button className='doctor-move-buttons-style'>
                        Logout
                    </button>
                </Link>
            </section> 
            </div>
        )
    }
}

export default DoctorHeaderTracks;
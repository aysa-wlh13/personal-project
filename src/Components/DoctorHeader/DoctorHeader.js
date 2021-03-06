import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import newLogoSmall from './newLogoSmall.png'
import './DoctorHeader.css'



class DoctorHeader extends Component {

    render(){
        return(
            <div className='doctor-top'>
                <img
                    className='logo'
                    src={newLogoSmall} 
                    alt='logo' 
                    height='50'/>



                <Link to='/login'>
                    <button className='doctor-move-buttons-style'>
                        Logout
                    </button>
                </Link>
            </div>
        )
    }
}

export default DoctorHeader;
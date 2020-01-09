import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import newLogoSmall from './newLogoSmall.png'

class Header extends Component {

    render(){
        return(
            <div className='top'>
                <img
                    className='logo'
                    src={newLogoSmall} 
                    alt='logo' 
                    height='50'/>

            <article className='move-buttons'>

                <Link to='/dashboard/tracker'>
                    <button className='move-buttons-style'>
                    Tracker
                    </button>
                </Link>

                {/* <Link to='/dashboard/ChatRoom'>
                    <button className='move-buttons-style'>
                        Chat Room
                    </button>
                </Link> */}

                {/* <button className='move-buttons-style'>Find your food</button> */}

                <Link to='/login'>
                    <button className='move-buttons-style'>
                        Logout
                    </button>
                </Link>
            </article>
            </div>
        )
    }
}

export default Header;
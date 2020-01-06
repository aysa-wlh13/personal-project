import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import newLogoSmall from './newLogoSmall.png'

class Header extends Component {

    render(){
        return(
            <div className='top'>
                Header
                <img
                    className='logo'
                    src={newLogoSmall} 
                    alt='logo' 
                    height='50'/>

                <Link to='/dashboard/tracker'><button>Tracker</button></Link>

                <Link to='/dashboard/ChatRoom'><button>Chat Room</button></Link>

                <button>Find your food</button>

                <Link to='/login'><button>Logout</button></Link>
            </div>
        )
    }
}

export default Header;
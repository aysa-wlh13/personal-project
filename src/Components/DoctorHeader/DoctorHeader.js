import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class DoctorHeader extends Component {

    render(){
        return(
            <div>
                DoctorHeader
                {/* <Link to='/dashboard/tracker'><button>Tracker</button></Link>

                <Link to='/dashboard/ChatRoom'><button>Chat Room</button></Link> */}


                <Link to='/login'><button>Logout</button></Link>
            </div>
        )
    }
}

export default DoctorHeader;
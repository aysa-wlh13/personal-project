import React, {Component} from 'react';
import Header from '../Header/Header';
import {connect} from 'react-redux';

class Tracker extends Component {

    render(){
    console.log(this.props)
        return(
            <div>
                <Header />
                Tracker
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(Tracker);
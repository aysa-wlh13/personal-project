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
                <br/>
                {/* add */}
                ADD
                <p>bg</p>
                <input/>

                <p>food</p>
                <input/>

                <p>g</p>
                <input/>

                <p>insulin units</p>
                <input/>

                <p>time</p>
                <input/>

                <p>date</p>
                <input/>
              
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(Tracker);
import React, {Component} from 'react';
import Header from '../Header/Header';
import {connect} from 'react-redux';

class Tracker extends Component {
    constructor(){
        super();

        this.state = {
            blood_sugar: '',
            food: '',
            carbs: '',
            insulin_units: '',
            time: '',
            date: ''

        }
    }

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

                {/* track */}

              
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(Tracker);
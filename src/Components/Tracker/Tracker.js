import React, {Component} from 'react';
import Header from '../Header/Header';
import {connect} from 'react-redux';
import axios from 'axios';

import './Tracker.css';
import add from './add.png';
import trashcan2 from './trashcan2.png';
import edit2 from './edit2.jpg';
import squareSave from './squareSave.jpg';

class Tracker extends Component {
    constructor(){
        super();

        this.state = {
            tracks: [],
            blood_sugar: 0,
            food_name: '',
            carbs: 0,
            insulin_units: 0,
            time: '',
            date: ''

        }
    }

    handleInput(prop,value){
        this.setState({
            [prop]:value
        })
    }

    componentDidMount(){
        this.getTracker()
    }

    //get
    getTracker = () => {
        axios.get('/api/getTracker').then(res => {
            this.setState({
                tracks: res.data
            })
        })
    }

    //add
    addTracker = () => {
        const {blood_sugar, insulin_units, time, date, food_name, carbs} = this.state
        axios.post('/api/addTracker', {blood_sugar, insulin_units, time, date, food_name, carbs}).then(res => {
            this.getTracker()
        })
    }

    //update


    //delete
    

    render(){
        console.log(this.state.tracks)
    let tracks = this.state.tracks.map((el, i) => (
        <div key = {i} className='tracks'>
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
                <Header />
                Tracker
                <br/>
                {/* add */}
                ADD
                <section className='add-box'>
                    <p>blood sugar:</p>
                    <input 
                    onChange={e=>this.handleInput('blood_sugar',e.target.value)}/>

                    <p>food:</p>
                    <input                     onChange={e=>this.handleInput('food_name',e.target.value)}/>

                    <p>carbs:</p>
                    <input                    
                    onChange={e=>this.handleInput('carbs',e.target.value)}/>

                    <p>insulin units:</p>
                    <input                    
                    onChange={e=>this.handleInput('insulin_units',e.target.value)}/>

                    <p>time:</p>
                    <input                    
                    onChange={e=>this.handleInput('time',e.target.value)}/>

                    <p>date:</p>
                    <input                    
                    onChange={e=>this.handleInput('date',e.target.value)}/>

                    <button onClick={this.addTracker}>
                        <img
                        src={add} 
                        alt='add' 
                        height='35'/>
                    </button>
                </section>

                {/* track */}
                <article className='tracks-box'>
                    {tracks}
                    <button>
                        <img
                        src={edit2} 
                        alt='edit' 
                        height='30'/>
                    </button>

                    <button>
                        <img
                        src={trashcan2} 
                        alt='trashcan' 
                        height='35'/>
                    </button>
                </article>

              
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(Tracker);
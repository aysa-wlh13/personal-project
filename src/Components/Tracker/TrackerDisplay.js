import React, { Component } from "react";
import trashcan2 from "./trashcan2.png";
import edit2 from "./edit2.jpg";
import axios from 'axios';
import "./TrackerDisplay.css";


import squareSave from "./squareSave.jpg";
import cancel from './cancel.png';


class TrackerDisplay extends Component {
    state = {
        blood_sugar: 0,
        food_name: "",
        carbs: 0,
        insulin_units: 0,
        time: "",
        date: "",
        editTracker: false
    }

    handleInput(prop, value) {
        this.setState({
          [prop]: value
        });
      }

//update
  editTracker = id => {
    const {
      blood_sugar,
      insulin_units,
      time,
      date,
      food_name,
      carbs
    } = this.state;
    axios
      .put(`/api/editTracker/${id}`, {
        blood_sugar,
        insulin_units,
        time,
        date,
        food_name,
        carbs
      })
      .then(res => {
        this.props.getTracker();
      });
  };

    //delete
    deleteTracker = id => {
        axios.delete(`/api/deleteTracker/${id}`).then(res => {
          this.props.getTracker();
        });
      };

  toggleEdit = () =>{
    this.setState({
        editTracker: !this.state.editTracker
    })
}

    render(){
    return(
        <div>
        {!this.state.editTracker ? (
          <div className="tracks">
            <h3 className='hold-box'>{this.props.el.blood_sugar} bg</h3>
            <h3 className='hold-box'>{this.props.el.food_name}</h3>
            <h3 className='hold-box'>{this.props.el.carbs} grams</h3>
            <h3 className='hold-box'>{this.props.el.insulin_units} units</h3>
            <h3 className='hold-box'>{this.props.el.time}</h3>
            <h3 className='hold-box'>{this.props.el.date}</h3>

          <div className='but-hold-box'>
            <button 
            className='add-but'
            onClick={this.toggleEdit}>
              <img 
                className='pencil-but'

              src={edit2} alt="edit" height="38" />
            </button>

            <button 
              className='add-but'

            onClick={() => this.deleteTracker(this.props.el.track_id)}>
              <img 
                className='trash-but'

              src={trashcan2} alt="trashcan" height="48" />
            </button>
            </div>
          </div>
        ) : (
          <div className="edit-tracks">
            <div className="edit-style">

              <div className='edit-hold-box'>
              <h3>blood sugar:</h3>
              <input
                className='edit-input'
                onChange={e => this.handleInput("blood_sugar", e.target.value)}
              />
              </div>

            <div className='edit-hold-box'>
              <h3>food:</h3>
              <input
                className='edit-input'
                onChange={e => this.handleInput("food_name", e.target.value)}
              />
              </div>

            <div className='edit-hold-box'>
              <h3>carbs:</h3>
              <input 
                className='edit-input'
              onChange={e => this.handleInput("carbs", e.target.value)} />
              </div>

            <div className='edit-hold-box'>
              <h3>insulin units:</h3>
              <input
                className='edit-input'
                onChange={e => this.handleInput("insulin_units", e.target.value)}
              />
              </div>

            <div className='edit-hold-box'>
              <h3>time:</h3>
              <input 
              className='edit-input'
              onChange={e => this.handleInput("time", e.target.value)} />
              </div>

            <div className='edit-hold-box'>
              <h3>date:</h3>
              <input 
              className='edit-input'
              onChange={e => this.handleInput("date", e.target.value)} />
              </div>

            <div className='but-hold-box'>
              <button
              className='save-but' 
              onClick={() => {
                  this.editTracker(this.props.el.track_id)
                  this.toggleEdit()
              }}>
                <img 
                className='check-but'
                src={squareSave} alt="check mark" height="30" />
              </button>

              <button 
              className='cancel-buttons-style'
              onClick={this.toggleEdit}>
              <img 
              className='x-but'
              src={cancel} alt='cancel' height='40'/>
              </button>
            </div>
          </div>
          </div>
        )}
      </div>
    )
}
}

export default TrackerDisplay;
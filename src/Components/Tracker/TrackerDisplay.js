import React, { Component } from "react";
import trashcan2 from "./trashcan2.png";
import edit2 from "./edit2.jpg";
import axios from 'axios';

import squareSave from "./squareSave.jpg";


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
        <div className="tracks">
        {!this.state.editTracker ? (
          <div>
            <h3>{this.props.el.blood_sugar} bg</h3>
            <h3>{this.props.el.food_name}</h3>
            <h3>{this.props.el.carbs} grams</h3>
            <h3>{this.props.el.insulin_units} units</h3>
            <h3>{this.props.el.time}</h3>
            <h3>{this.props.el.date}</h3>

            <button onClick={this.toggleEdit}>
              <img src={edit2} alt="edit" height="30" />
            </button>

            <button onClick={() => this.deleteTracker(this.props.el.track_id)}>
              <img src={trashcan2} alt="trashcan" height="35" />
            </button>
          </div>
        ) : (
          <div className="edit-style">
            <p>blood sugar:</p>
            <input
              onChange={e => this.handleInput("blood_sugar", e.target.value)}
            />

            <p>food:</p>
            <input
              onChange={e => this.handleInput("food_name", e.target.value)}
            />

            <p>carbs:</p>
            <input onChange={e => this.handleInput("carbs", e.target.value)} />

            <p>insulin units:</p>
            <input
              onChange={e => this.handleInput("insulin_units", e.target.value)}
            />

            <p>time:</p>
            <input onChange={e => this.handleInput("time", e.target.value)} />

            <p>date:</p>
            <input onChange={e => this.handleInput("date", e.target.value)} />

            <button onClick={() => {
                this.editTracker(this.props.el.track_id)
                this.toggleEdit()
            }}>
              <img src={squareSave} alt="check mark" height="30" />
            </button>
            <button onClick={this.toggleEdit}>cancel</button>
          </div>
        )}
      </div>
    )
}
}

export default TrackerDisplay;
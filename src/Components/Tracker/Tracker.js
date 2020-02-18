import React, { Component } from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";
import axios from "axios";
import { setTracks } from "../../redux/reducer2";
import TrackerDisplay from './TrackerDisplay'

import "./Tracker.css";
import add from "./add.png";

class Tracker extends Component {
  constructor() {
    super();

    this.state = {
      tracks: [],
      blood_sugar: 0,
      food_name: "",
      carbs: 0,
      insulin_units: 0,
      time: "",
      date: ""
    };
  }

  handleInput(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  componentDidMount() {
    this.getTracker();
  }

  //get
  getTracker = () => {
    axios.get("/api/getTracker").then(res => {
      this.props.setTracks(res.data);
    });
  };

  //add
  addTracker = () => {
    const {
      blood_sugar,
      insulin_units,
      time,
      date,
      food_name,
      carbs
    } = this.state;
    axios
      .post("/api/addTracker", {
        blood_sugar,
        insulin_units,
        time,
        date,
        food_name,
        carbs
      })
      .then(res => {
        this.getTracker();
      });
  };

  render() {
    console.log(this.props);
    let tracks = this.props.reducer2.tracks.map((el, i) => (
      <TrackerDisplay
      el = {el}
      key = {i}
      getTracker = {this.getTracker}/>
    ));
    return (
      <div className='behind'>
        <Header />
        <br />
        {/* add */}
        <section className="add-box">
        <div className='add-hold-box'>
          <h3>blood sugar:</h3>
          <input
            className='add-input'
            onChange={e => this.handleInput("blood_sugar", e.target.value)}
          />
        </div>

        <div className='add-hold-box'>
          <h3>food:</h3>
          <input
          className='add-input'
            onChange={e => this.handleInput("food_name", e.target.value)}
          />
        </div>

        <div className='add-hold-box'>
          <h3>carbs:</h3>
          <input 
          className='add-input'
          onChange={e => this.handleInput("carbs", e.target.value)} />
          </div>

          <div className='add-hold-box'>
          <h3>insulin units:</h3>
          <input
          className='add-input'
            onChange={e => this.handleInput("insulin_units", e.target.value)}
          />
          </div>
      

        <div className='add-hold-box'>
          <h3>time:</h3>
          <input
          className='add-input' 
          onChange={e => this.handleInput("time", e.target.value)} />
          </div>

          <div className='add-hold-box'>
          <h3>date:</h3>
          <input 
          className='add-input'
          onChange={e => this.handleInput("date", e.target.value)} />
        </div>

          <div className='add-but-hold-box'>
          <button 
          className='add-but'
          onClick={this.addTracker}>
            <img 
            className='plus-but'
            src={add} alt="add" height="40" />
          </button>
          </div>
        </section>
        {/* track */}
        <article className="tracks-box">{tracks}</article>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapStateToProps, { setTracks })(Tracker);

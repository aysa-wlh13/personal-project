import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './PatientRegistration.css';


class PatientRegistration extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            doctor: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount(){
    }

    handlePatientRegister = () => {
        axios.post('/auth/patientRegister', {username: this.state.username, password: this.state.password, firstName:this.state.firstName, lastName:this.state.lastName, doctor:this.state.doctor}).then(res => {
            this.state = {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                doctor: ''
            }
            //redux
            // this.props.updateUser(res.data)
            this.props.history.push('/dashboard/tracker')

        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div className='patient-registration-behind'>
                <section className='patient-registration-container'>
                 <div className='patient-registration-small-container'>  
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=PT+Serif&display=swap');
                    </style>
                Patient Registration
                    <article className='patient-username-input'>
                        <p>Username:</p>
                        <input
                            value={this.state.username}
                            name='username'
                            onChange={(e) => this.handleInput(e)}/>
                    </article>    

                    <section className= 'patient-password-input'>
                        <p>Password:</p>

                        <input 
                            type='password'
                            value={this.state.password}
                            name='password'
                            onChange={(e) => this.handleInput(e)}/>
                    </section>    

                    <div className='first-name-input'>
                        <p>First Name:</p>    

                        <input 
                            value={this.state.firstName}
                            name='firstName'
                            onChange={(e) => this.handleInput(e)}
                            />
                    </div>

                    <article className= 'last-name-input'>
                        <p>Last Name:</p>    

                        <input 
                            value={this.state.lastName}
                            name='lastName'
                            onChange={(e) => this.handleInput(e)}
                            />  
                    </article>

                    <section className='doctor-input'>
                        <p>Doctor:</p>    

                        <input 
                            value={this.state.doctor}
                            name='doctor'
                            onChange={(e) => this.handleInput(e)}/>
                    </section>

                    <article className='register-button-container'>
                        <Link to='/doctor-registration'><button className='registerButtons'>Doctor Registration</button></Link>
                        <button onClick={this.handlePatientRegister}
                        className='registerButtons'>
                            Register</button>
                        
                        <Link to='/login'><button className='registerButtons'>Sign In</button></Link>
                    </article>
                    </div> 
                </section>     

            </div>
        )
    }
}

export default PatientRegistration;
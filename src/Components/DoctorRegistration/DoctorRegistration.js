import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './DoctorRegistration.css';

//redux
import {updateUser} from '../../redux/reducer';
import {connect} from 'react-redux';



class DoctorRegistration extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }
    componentDidMount(){
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDoctorRegistration = () => {
        axios.post('/auth/doctorRegister', {username: this.state.username, password: this.state.password, firstName:this.state.firstName, lastName:this.state.lastName}).then(res => {
            this.setState ({
                username: '',
                password: '',
                firstName: '',
                lastName: ''
            })
            //redux
            this.props.updateUser(res.data)
            this.props.history.push('/patients')

        })
        .catch(err => console.log(err))
    }
//component did mount axios reqest

    render(){
        return(
            <div className='doctor-registration-behind'>
                <section className='doctor-registration-container'>
                    <article className='doctor-registration-small-container'>
                    DoctorRegistration
                    <div className='dr-username-input'>
                        <p>Username:</p>    
                        <input 
                            value={this.state.username}
                            name='username'
                            onChange={(e) => this.handleInput(e)}/>
                    </div>  

                    <article className='dr-password-input'>
                        <p>Password:</p>
                        <input
                            type='password'
                            value={this.state.password}
                            name='password'
                            onChange={(e) => this.handleInput(e)}/>
                    </article>    

                    <section className='dr-firstName-input'>
                        <p>First Name:</p>    
                        <input
                            value={this.state.firstName}
                            name='firstName'
                            onChange={(e) => this.handleInput(e)}
                            />
                    </section>    

                    <article className='dr-lastName-input'>
                    <p>Last Name:</p>    
                    <input
                        value={this.state.lastName}
                        name='lastName'
                        onChange={(e) => this.handleInput(e)}
                        /> 
                    </article>    
 
                    <div className='dr-register-button-container'>
                        <button onClick={this.handleDoctorRegistration}
                        className='registerButtons'>Register</button>

                        <Link to='/login'><button className='registerButtons'>Sign In</button></Link>
                    </div>
                </article>

                </section>
            </div>
        )
    }
}

//redux

export default connect(null, {updateUser})(DoctorRegistration);
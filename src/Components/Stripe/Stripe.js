import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import stripeHeader from '../stripeHeader/stripeHeader';


class Stripe extends Component {
    constructor(){
        super();
        this.state = {
            amount: 0
        }
    }

    render(){
        return(
            <div>
                <stripeHeader/>
                stripe
            </div>
        )
    }
 

}

export default Stripe;


 
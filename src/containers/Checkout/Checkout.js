import React, { Component } from 'react';
import CheckoutSummary from '../../components/Oder/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    checkoutCanceledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.props.ings}
                    checkoutCanceled={this.checkoutCanceledHandler}  
                    checkoutContinued={this.checkoutContinuedHandler}  
                />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData}
                />
            </div>
        )
    }
}

const mapStateTopProps = state => {
    return {
        ings: state.ingredients
    }
}

export default connect(mapStateTopProps)(Checkout);
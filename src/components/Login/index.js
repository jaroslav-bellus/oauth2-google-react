import React, { Component } from 'react';
import {
    Redirect
} from 'react-router-dom';
import {authenticationService} from './../../services/authenticationService.js';

export class Login extends Component {
    state = {
        redirectToReferrer: false
    }

    login = () => {
        authenticationService.authenticate(() => {
            this.setState({redirectToReferrer: true})
        })
    }

    render() {
        const { from } = this.props.location.state || {from: {pathname: '/'}}
        const { redirectToReferrer } = this.state

        if (redirectToReferrer) {
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

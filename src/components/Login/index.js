import React, { Component } from 'react';
import {Config} from './../../constants/config.js';

export class Login extends Component {
    render() {
        return (
            <div>
                <p>You must log in</p>
                <a href={Config.loginUrl}>Log in via Google</a>
            </div>
        )
    }
}

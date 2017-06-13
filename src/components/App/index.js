import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import {Login} from '../Login/index.js';
import {authenticationService} from './../../services/authenticationService.js';

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

export class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <Router>
                    <div className="App-intro">
                        <AuthButton/>
                        <ul>
                            <li><Link to="/public">Public Page</Link></li>
                            <li><Link to="/protected">Protected Page</Link></li>
                        </ul>
                        <Route path="/public" component={Public}/>
                        <Route path="/login" component={Login}/>
                        <PrivateRoute path="/protected" component={Protected}/>
                    </div>
                </Router>
            </div>
        );
    }
}

const AuthButton = withRouter(({ history }) => (
    authenticationService.isAuthenticated ? (
        <p>
            Welcome!
            <button
                onClick={() => {
                    authenticationService.signout(() => history.push('/'))
                }}
            >Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
))

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (authenticationService.isAuthenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect
                to={{
                        pathname: '/login',
                        state: { from: props.location }
                   }}
           />
    )
  )}/>
)

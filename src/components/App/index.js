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
import {dummyService} from './../../services/dummyService.js';
import {Config} from './../../constants/config.js';

export class Home extends Component {
    render() {
        return (
            <div>
                <h3>Main Page</h3>
                <a href={Config.logoutUrl}>Logout</a>
                <Router>
                    <ul>
                        <li><Link to="/home/page-1">Page 1</Link></li>
                        <li><Link to="/home/page-2">Page 2</Link></li>
                        <Route path="/home/page-1" component={Page1}/>
                        <Route path="/home/page-2" component={Page2}/>
                    </ul>
                </Router>
            </div>
        );
    }
}

class Page1 extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentWillMount() {
        dummyService.list()
            .then(response => {
                this.setState({
                    data: response.data || [],
                });
            })
    }

    render() {
        const items = this.state.data
            .map((post) =>
                <div>{post.name}</div>
            );

        return (
            <div>
                <h4>Dummy Data</h4>
                { items }
            </div>
        );
    }
}
const Page2 = () => <h3>Page 2</h3>

export class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome</h2>
                </div>
                <Router>
                    <div className="App-intro">
                        <Route path="/home" component={Home}/>
                        <Route path="/login" component={Login}/>
                    </div>
                </Router>
            </div>
        );
    }
}


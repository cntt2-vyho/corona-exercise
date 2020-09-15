import React, { Component } from 'react'

import List from './redux/List';
import Login from './login/Login';


    import {
        BrowserRouter as Router,
        Switch,
        Route,
        NavLink
      } from "react-router-dom";
   
import Register from './register/Register';
import Post from './post/Post';
import User from './user/User';

export default class App extends Component {
    render() {
        const styleNav = {
            textAlign: 'center',
        }
        return (
            <div><Router>
                <div className="nav" style={styleNav}>
                    <NavLink className="nav-item" to="/posts" >Posts</NavLink>
                    <NavLink className="nav-item" to="/users" >Users</NavLink>
                    <NavLink className="nav-item" to="/login" >Login</NavLink>
                    <NavLink className="nav-item" to="/register" >Register</NavLink>
                </div>
                
                    <Switch>
                        <Route path="/posts" exact component={Post} />
                        <Route path="/users" exact component={User} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                    </Switch>


                </Router>
            </div>
        )
    }
}

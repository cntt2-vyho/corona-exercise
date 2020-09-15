import React, { Component } from 'react'
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    isChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    login = (username, password) => {

        if(username !== "" && password!=="") {
            this.props.login({username, password})
        }
        else {
            console.log('Điền dô đã');
        }

    }

    render() {
        const {username, password} = this.state;
        return (
            <div style={{textAlign: 'center'}}>
                <h1>login</h1>
                
                <input placeholder="username" type="text" name="username" value={username}  required onChange={(event => this.isChange(event))} />
                <input placeholder="password" type="password" name="password" value={password}  required onChange={(event => this.isChange(event))} />
                <input type="button" value="Login" onClick={() => this.login(username, password)} />
                
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (user) => {
            dispatch({type:"LOGIN", payload: user})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
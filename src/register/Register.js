import React, { Component } from 'react'
import { connect } from 'react-redux';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            description: '',
            email: '',
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

    register = (fullName, description, email, username, password) => {
        if(fullName!==''&& description!=='' && email!=='' && username!==''&& password!=='') {
            this.props.register({fullName, description, email, username, password})
        }
        else {
            console.log('Điền dô đã');
        }
    }
    render() {
        const {fullName, description, email, username, password} = this.state;
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>register</h1>

                <input placeholder="fullName" type="text" name="fullName" value={fullName} required onChange={(event => this.isChange(event))} />
                <input placeholder="description" type="text" name="description" value={description} required onChange={(event => this.isChange(event))} />
                <input placeholder="email" type="email" name="email" value={email} required onChange={(event => this.isChange(event))} />
                <input placeholder="username" type="text" name="username" value={username} required onChange={(event => this.isChange(event))} />
                <input placeholder="password" type="password" name="password" value={password} required onChange={(event => this.isChange(event))} />

                <input type="button" value="Register" onClick={() => this.register(fullName, description, email, username, password)} />

            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        register: (user) => {
            dispatch({type:"REGISTER", payload: user})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
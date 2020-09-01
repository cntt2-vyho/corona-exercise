import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import './Form.css'

import { uuid } from 'uuidv4';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            first_name: '',
            last_name: '',
            avatar: '',
            email: '',
        }

    }

    componentDidMount() {
        if (this.props.isAdd === true) {
            this.setState({
                id: uuid()
            })
        }
        else {
            this.setState({
                id: this.props.editItem.id,
                first_name: this.props.editItem.first_name,
                last_name: this.props.editItem.last_name,
                avatar: this.props.editItem.avatar,
                email: this.props.editItem.email
            })
        }
    }



    isChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    save() {
        let data = {
            id: this.state.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            avatar: this.state.avatar,
            email: this.state.email,
        }
        this.props.updateUser(data);
        this.props.close();

        console.log(data);
    }

    close() {
        this.props.close();
    }
    render() {
        const { id, first_name, last_name, email, avatar } = this.state;
        // console.log("here", this.state);
        // console.log("there", this.props.editItem);

        return (
            <div className="background">
                <div className="form-container">
                    <button className="btn-close" onClick={() => this.close()}>
                        <i>đóng ở đây</i>
                    </button>
                    <h1>Edit</h1>
                    <div className="form-edittext">
                        <div className="formcontai">
                            <div className="form-group">
                                <label>Avatar: </label>
                                <input name="avatar" value={avatar} onChange={(event => this.isChange(event))} />
                            </div>
                            <div className="form-group">
                                <label>Firstname: </label>
                                <input name="first_name" value={first_name} onChange={(event => this.isChange(event))} />
                            </div>
                            <div className="form-group">
                                <label>Lastname: </label>
                                <input name="last_name" value={last_name} onChange={(event => this.isChange(event))} />
                            </div>
                            <div className="form-group">
                                <label>Email: </label>
                                <input name="email" value={email} onChange={(event => this.isChange(event))} />
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-save" onClick={() => this.save()}>Save</button>
                                <button type="button" className="btn btn-cancel" onClick={() => this.close()} >Cancel</button>

                            </div>
                        </div>
                    </div>


                    <div className="form-overview">
                        <div className="formcontai">
                            <div className="div-img">
                                <img src={avatar} width="200px" height="200px" alt="Ảnh đang load, nếu không load được tức là hông có" />
                            </div>
                            <p>ID: <i> {id}</i> </p>
                            <p>FIRSTNAME:  <i>{first_name}</i> </p>
                            <p>LASTNAME:  <i>{last_name}</i> </p>
                            <p>EMAIL:  <i>{email}</i> </p>
                        </div>

                    </div>
                </div>
            </div>


        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        isAdd: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateUser: (updateUser) => {
            dispatch({ type: "UPDATE_USER", updateUser })
        },
        close: () => {
            dispatch({ type: "CLOSE" })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)
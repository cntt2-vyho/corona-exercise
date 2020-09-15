import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUser } from '../redux/action';
import Form from './../form/Form';
import FormDetails from './../form-detail/FormDetails';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            editFormUser: this.props.editFormUser
        }
    }
    componentDidMount() {
        //console.log(this.props.listData);
        this.props.getData();


    }

    getDetailUser(value) {
        this.props.getUser(value);
        this.props.open();

    }
    show() {
        if (this.props.editFormUser === true) {
            return (
                <FormDetails />
            )
        }
    }

    // addUser() {
    //     this.props.open();
    //     this.props.isAdd();
    // }

    render() {
        const list = this.props.users.map((value) => {
            return (
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 list-item" key={value.id}>
                    <div className="div-option">
                        <button onClick={() => this.getDetailUser(value)} className="btn-option btn-edit" >Details</button>
                    </div>
                    <div className="div-img-list">
                        <img src={value.avatar} alt="notfound" />
                    </div>
                    <p>{value.fullName} </p>
                    <p>{value.username}</p>
                    <p>email: <i> {value.email} </i></p>

                </div>
            )
        })
        return (
            <div className="list-container">
                <h1>USERS</h1>
                {/* <button onClick={() => this.addUser()} className="btn btn-add">Add Post</button> */}
                <div className="row">
                    {list}{
                        this.show()

                    }
                </div>



            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users,
        editFormUser: state.editFormUser
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getData: () => {
            dispatch(getUser())
        },
        getUser: (user) => {
            dispatch({type:"GET_USER_DETAILS", payload: user})
        } ,
        open: () => {
            dispatch({ type: "OPEN_USER" })
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps )(User)
import React, { Component } from 'react'
import { connect } from 'react-redux';

class FormDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            object: this.props.userDetail
        }

    }


    close() {
        this.props.close();
    }
    render() {
        console.log(this.props.userDetail);
        const { object } = this.state;

        return (
            <div className="background">
                <div className="form-container">
                    <button className="btn-close" onClick={() => this.close()}>
                        <i>đóng ở đây</i>
                    </button>
                    <h1 className="col-lg-12 col-md-12 col-sm-12 col-12">{object.fullName} </h1>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <p>Fullname: <i> {object.fullName} </i></p>
                        <p>Description: <i> {object.description} </i></p>
                        <p>Email: <i> {object.email} </i></p>
                        <p>Username: <i> {object.username} </i></p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <img src={object.avatar} style={{width:'80%'}} />
                    </div>
                </div>
            </div>


        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        userDetail: state.userDetail,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        close: () => {
            dispatch({ type: "CLOSE_USER" })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormDetails)
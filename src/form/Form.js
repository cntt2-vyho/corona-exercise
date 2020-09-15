import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Form.css'

import { uuid } from 'uuidv4';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            object: {}
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
               object: this.props.editItem
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
            name: "hihi"
        }
        // this.props.updateUser(data);
        // this.props.close();

        console.log(data);
    }

    close() {
        this.props.close();
    }
    render() {
        const { object } = this.state;
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
                                <label>Title: </label>
                                <input name="title" value={object.title} required onChange={(event => this.isChange(event))} />
                            </div>
                            <div className="form-group">
                                <label>Description : </label>
                                <input name="description" value={object.description}  required onChange={(event => this.isChange(event))} />
                            </div>
                            <div className="form-group">
                                <label>Content: </label>
                                <input name="content" value={object.content}  required onChange={(event => this.isChange(event))} />
                            </div>
                            <div className="form-group">
                                <p><i class="fa fa-eye" aria-hidden="true"></i> {object.view} </p>
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
                                <img src={object.image} width="200px" height="200px" alt='notfound' />
                            </div>
                            <p>Title:  <i>{object.title}</i> </p>
                            <p>Description:  <i>{object.description}</i> </p>
                            <div>Content:  <div className="scroll-bar" ><i>{object.content}</i></div> </div>
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
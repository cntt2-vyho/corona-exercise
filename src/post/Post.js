import React, { Component } from 'react'
import { getData } from '../redux/action';
import Form from './../form/Form';
import { connect } from 'react-redux';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            editForm: this.props.editForm
        }
    }
    componentDidMount() {
        //console.log(this.props.listData);
        this.props.getData();


    }

    editItem(value) {
        this.props.editItem(value);
        this.props.open();

    }
    show() {
        if (this.props.editForm === true) {
            return (
                <Form />
            )
        }
    }

    addUser() {
        this.props.open();
        this.props.isAdd();
    }

    render() {
        const list = this.props.posts.map((value) => {
            return (
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 list-item" key={value.id}>
                    <div className="div-option">
                        <button onClick={() => this.editItem(value)} className="btn-option btn-edit" >Edit</button>
                        <button onClick={() => this.props.deleteItem(value.id)} className="btn-option btn-delete"  >Del</button>
                    </div>
                    <div className="div-img-list">
                        <img src={value.image} alt="Hông tìm thấy ảnh của anh nàii" />
                    </div>
                    <p>{value.title} </p>
                    <p><i> {value.description} </i></p>
                    <p><b><i class="fa fa-eye" aria-hidden="true"></i> {value.view} </b></p>

                </div>
            )
        })
        return (
            <div className="list-container">
                <h1>POSTS</h1>
                <button onClick={() => this.addUser()} className="btn btn-add">Add Post</button>
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
        posts: state.posts,
        editForm: state.editForm
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getData: () => {
            dispatch(getData())
        },
        editItem: (editItem) => {
            dispatch({ type: "EDIT_ITEM", editItem })
        },
        deleteItem: (id) => {
            dispatch({ type: "DELETE_ITEM", id })
        },
        open: () => {
            dispatch({ type: "OPEN" })
        },
        isAdd: () => {
            dispatch({ type: "IS_ADD" })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)
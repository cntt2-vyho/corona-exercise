import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './action';
import Form from './../form/Form';


class List extends Component {
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
        if (this.props.editForm == true) {
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
        const list = this.props.listData.map((value) => {
            return (
                <div className="col-lg-4 col-md-4 col-sm-4 col-4 list-item" key={value.id}>
                    <div className="div-option">
                        <button onClick={() => this.editItem(value)} className="btn-option btn-edit" >Edit</button>
                        <button onClick={() => this.props.deleteItem(value.id)} className="btn-option btn-delete"  >Del</button>
                    </div>
                    <div className="div-img-list">
                        <img src={value.avatar} alt="Hông tìm thấy ảnh của anh nàii" />
                    </div>
                    <p>{value.first_name} {value.last_name}</p>
                    <p>{value.email}</p>

                </div>
            )
        })
        return (
            <div className="list-container">
                <h1>LIST USER</h1>
                <button onClick={() => this.addUser()} className="btn btn-add">Add user</button>
                {/* <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>IMAGE</th>
                            <th>FULLNAME</th>
                            <th>EMAIL</th>
                            <th>OPTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.listData.length === 0 && <p>Nothing here ??!!!</p>}
                        
                    </tbody>
                </table> */}
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
        listData: state.listData,
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
export default connect(mapStateToProps, mapDispatchToProps)(List)
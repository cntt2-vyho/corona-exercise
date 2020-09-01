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
                <tr key={value.id}>
                    <td>{value.id} </td>
                    <td><img src={value.avatar} alt="Hông tìm thấy ảnh của anh nàii" /></td>
                    <td>{value.first_name} {value.last_name} </td>
                    <td>{value.email} </td>
                    <td>
                        <button onClick={() => this.editItem(value)} className="btn-option btn-edit" >Edit</button>
                        <button onClick={() => this.props.deleteItem(value.id)}  className="btn-option btn-delete"  >Del</button>
                    </td>
                </tr>

            )
        })
        return (
            <div className="list-container">
                <h1>LIST USER</h1>
                <button onClick={() => this.addUser()} className="btn btn-add">Add user</button>
                <table>
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
                        {list}
                    </tbody>
                </table>
                {
                    this.show()

                }

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
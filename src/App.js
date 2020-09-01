import React, { Component } from 'react'
import List from './redux/List'
import Form from './form/Form'


export default class App extends Component {
  render() {
    return (
      <div>
        <List />
        {/* <Form /> */}
      </div>
    )
  }
}

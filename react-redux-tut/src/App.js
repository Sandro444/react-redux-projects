import React from 'react';
import './App.css';
import { Component } from 'react';
import {connect } from "react-redux";
import {updateUser, apiRequest} from './actions/user-actions'
import {bindActionCreators} from "redux"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
    }
  }
  componentDidMount(){
    this.apiReq()
  }

  apiReq = () => {
    this.props.onApiRequest(this.state.count)
    this.setState({count:this.state.count+1})
  }

  onUpdateUser = (e) => {
    this.props.onUpdateUser(e.target.value)
  }

  render(){
    return (
      <div className="App">
        <div>
          USER: {this.props.user} 
          <input onChange={this.onUpdateUser} ></input>
          <button onClick={this.apiReq}>next user</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user
  }
}

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
}

/* const mapActionsToProps = (dispatch, props) => {
  console.log(props)
  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch)
  
} */

/* const mergeProps = (propsFromState, propsFromDispatch, ownProps) =>{
  console.log(propsFromDispatch, propsFromState, ownProps)
  return {

  }
} */

export default connect(mapStateToProps,
  mapActionsToProps, /* mergeProps */)(App);

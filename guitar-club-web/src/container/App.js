import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header isSigned = {isSigned} page={page} onSignIn={onSignIn} onSignOut={onSignOut}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.PropTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
  isSigned: PropTypes.bool,
  page:PropTypes.oneOf(['HOME, SIGN_IN', 'SIGN_UP']).isRequired
}

const mapStateToProps = (state)=>{
  return{
    PropTypes
  }
}

export default App;

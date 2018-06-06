import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionSimple } from './actions/action.simple';

import logo from './logo.svg';
import './App.css';

class App extends Component {


  buttonClicked = (event) => {
    this.props.actionSimple();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.buttonClicked}>Test redux action</button>
        </p>

        <p>{JSON.stringify(this.props)}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchtoProps = dispatch => ({
  actionSimple: () => dispatch(actionSimple())
})

export default connect(mapStateToProps, mapDispatchtoProps)(App);

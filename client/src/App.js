import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { actionSimple } from './actions/action.simple';

import { PrivacyView }  from './components/PrivacyView.js';
import { Header }  from './components/Header.js';


import './App.css';

class App extends Component {

  buttonClicked = (event) => {
    this.props.actionSimple();
  }

  render() {
    return (
      <div>
        
      <Helmet>
        <title>React App in Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="App">
        <Header />
        <PrivacyView onClick={this.buttonClicked}/>
      </div>

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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { actionSimple } from './actions/action.simple';

/* Router components for views */
//import { PrivacyView }  from './components/PrivacyView.js';
import { Onboarding }  from './components/Onboarding.js';
import { Signup }  from './components/Signup.js';
import { Account }  from './components/Account.js';
import { Digest }  from './components/Digest.js';

/* page components */
import { Header }  from './components/Header.js';


import './App.css';

class App extends Component {

  buttonClicked = (event) => {
    this.props.actionSimple();
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Header />
          <Switch>
            <Route exact path="/" component={Onboarding}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/account" component={Account}/>
            <Route path="/digest" component={Digest}/>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>

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

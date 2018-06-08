import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

/* Redux props and dispatches go here */
import { actionSimple } from './actions/actions';

/* Router containers for views */
import Digest from './containers/Digest.js';
import Onboarding  from './containers/Onboarding.js';

  import { DigestPostSolo } from './components/Digest/DigestPostSolo';

import { Account }  from './components/Account.js';

/* page components */
import { Header }  from './components/Header/Header.js';


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
            <Route path="/account" component={Account}/>
            <Route path="/digest/:tag/:title/:id" component={DigestPostSolo}/>
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

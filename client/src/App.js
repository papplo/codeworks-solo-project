import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

/* Redux props and dispatches go here */
import { actionSimple } from './actions/actions';

/* Router containers for views */
import Digest from './containers/Digest.js';
import Onboarding  from './containers/Onboarding.js';
import LoginSignup from './containers/LoginSignup.js';
import NodeCreate from './containers/NodeCreate.js';

  import { DigestPostSolo } from './components/Digest/DigestPostSolo';


/* page components */
import { Header }  from './components/Header/Header.js';


import './App.css';

class App extends Component {

  constructor() {
    super();
    this.getUser();
    this.state = {
      TellusUser : JSON.parse(localStorage.getItem('TellusUser')) || '',
      position: null,
      latitude: '',
      longitude: '',
      latlong: ''
    }
  }

  getUser() {
    const checkUserValid = JSON.parse(localStorage.getItem('TellusUser'));
    if (checkUserValid ) {
      console.log('valid user');
    } else {
      console.log('no user');
    }
  }
  buttonClicked = (event) => {
    this.props.actionSimple();
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Header
            TellusUser={this.state.TellusUser}/>
          <Switch>
            <Route exact path="/" TellusUser={this.state.TellusUser} component={Onboarding}/>
            <Route path="/account"
            component={LoginSignup}/>
            <Route path="/digest/:tag/:title/:id" component={DigestPostSolo}/>
            <Route path="/digest"
            component={Digest}/>
            <Redirect to="/" />
          </Switch>
          <NodeCreate />
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

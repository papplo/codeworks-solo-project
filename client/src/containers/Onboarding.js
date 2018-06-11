import React from 'react';
import Geolocation from './Geolocation';
import { Link } from 'react-router-dom';
import '../components/Onboarding/style.css';

import { OnboardingForm } from '../components/Onboarding/OnboardingForm';
import LoginSignup from './LoginSignup';

export default class Onboarding extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      position: [0,0],
      signing_in : false,
      TellusUser : JSON.parse(localStorage.getItem('TellusUser')) || '',
    }
  }
  signupHandler(data) {
    console.log('Storing passed props from form: ', data)
    localStorage.setItem('TellusUser', JSON.stringify(data));
  };

  render() {
    return (

    <div>
      <section className="onboarding is-centered">
        <h1><span role="img" aria-label="logo">🌎</span></h1>
        <h2>Welcome to Tellus</h2>
        <p>
          Tellus crawls the net to discover events and happenings that are based on your location. Events can be added by anyone; users, companies and organisations.
        </p>
      </section>

      <section className="login-form is-centered">
        {!this.state.TellusUser.username?
            <LoginSignup in_view='signup' onComplete={(data) => this.signupHandler(data)}/>
            :
            <OnboardingForm user={this.state.TellusUser}/>
          }

      </section>

    </div>
    );
  }
}

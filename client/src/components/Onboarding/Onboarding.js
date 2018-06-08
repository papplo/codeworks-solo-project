import React from 'react';
import { Link } from 'react-router-dom';

import Geolocation from '../../containers/Geolocation';
import {OnboardingForm} from './OnboardingForm';

export const Onboarding = (props) => {
  console.log('Onboarding Props: ', this.props);
  return (

  <div>
    <section>
      <h1>Welcome to Tellus <span role="img" aria-label="logo">🌎</span></h1>
      <p>
        Tellus crawls the net to discover events and happenings that are based on your location. Events can be added by anyone; users, companies and organisations.
      </p>

      <Geolocation />
      <OnboardingForm position={props.position}/>
      <p>
        <Link to="/signup">Create an Account and get started!</Link>
      </p>
    </section>
  </div>
  );
}

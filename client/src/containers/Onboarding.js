import React from 'react';
import Geolocation from './Geolocation';

import { OnboardingForm } from '../components/Onboarding/OnboardingForm';


const onboardingStyle = {

}

const Onboarding = (props) => {




  return (

  <div>
    <section>
      <h1>Welcome to Tellus <span role="img" aria-label="logo">🌎</span></h1>
      <p>
        Tellus crawls the net to discover events and happenings that are based on your location. Events can be added by anyone; users, companies and organisations.
      </p>
      <div style={{ textAlign: 'center', margin: 20}} >
        <Geolocation value="Get Going Today" cta="Sign up to create and share"/>
      </div>
      <OnboardingForm position={props.position}/>

    </section>
  </div>
  );
}

export default Onboarding

import React from 'react';
import Geolocation from './Geolocation';
import { Link } from 'react-router-dom';
import '../components/Onboarding/style.css';
import Button from '../components-styled/buttons/Button';
import { OnboardingForm } from '../components/Onboarding/OnboardingForm';
import LoginSignup from './LoginSignup';

export default class Onboarding extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      position: false,
      latitude: '',
      longitude: '',
      latlong: '',
      signing_in : false,
      TellusUser : JSON.parse(localStorage.getItem('TellusNodes')) || '',
    }
  }

  positionReturn (value) {
    this.setState(value);
    localStorage.setItem('TellusGeo', JSON.stringify(value));
  }

  render() {
    return (

    <div>
      <section className="onboarding">
        <h5>{this.state.position && 'We have position'}</h5>
        { /*<p>
          Tellus crawls the net to discover events and happenings that are based on your location. Events can be added by anyone; users, companies and organisations.
        </p> */}
        <Link to="/account" in_view="signup">
          <img alt="" height="303px" width="185px" src="/tellusLogo@2x.png" />
        {/* <Button round="true" color="black" size="true">signup</Button> */}
      </Link>
      <Geolocation
        value="Around the world you go!"
        cta="Tellus will take you!"
        onReturn={(value) => this.positionReturn(value)} props={this.props}/>
      </section>


    </div>
    );
  }
}

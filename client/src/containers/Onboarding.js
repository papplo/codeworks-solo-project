import React from 'react';
import Geolocation from './Geolocation';
import { Link } from 'react-router-dom';
import '../components/Onboarding/style.css';
import Button from '../components-styled/buttons/Button';
import { OnboardingForm } from '../components/Onboarding/OnboardingForm';
import LoginSignup from './LoginSignup';
import "../../node_modules/confetti-js/dist/index.min.js";

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

componentDidMount() {
  const confettiSettings = {
    target: 'confetti',
    props: ['circle', 'square', 'triangle'],
    colors: [[132, 176, 185]],
    size: 1.2
   };
  const confetti = new window.ConfettiGenerator(confettiSettings);
  confetti.render();
}

  positionReturn (value) {
    this.setState(value);
    localStorage.setItem('TellusGeo', JSON.stringify(value));
  }

  render() {
    return (
    <div>
      <section className="onboarding">
        <img alt="" height="303px" width="185px" src="/tellusLogo@2x.png" />
        <h5>{this.state.position && 'We have position'}</h5>
        { /*<p>
          Tellus crawls the net to discover events and happenings that are based on your location. Events can be added by anyone; users, companies and organisations.
        </p> */}
        <Link to="/account" in_view="signup">
        {/* <Button round="true" color="black" size="true">signup</Button> */}
      </Link>
      <Geolocation
        value="Around the world you go!"
        onReturn={(value) => this.positionReturn(value)} props={this.props}/>
      </section>
      <canvas id="confetti"></canvas>
      <OnboardingForm />

    </div>
    );
  }
}

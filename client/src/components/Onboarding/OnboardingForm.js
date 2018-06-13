import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components-styled/buttons/Button';

import {TagCloud, Tag} from "../../components-styled/lists/TagCloud";

export const OnboardingForm = (props) => {

console.log(props);
  return (
    <section className="onboarding onboardingform">
      <div className="heading is-centered">
        <h5>Tell us about yourself </h5>
        <h2>What are you looking to discover?</h2>
      </div>
        <TagCloud size="1">
          <Tag>Art</Tag>
          <Tag>Music</Tag>
          <Tag>Kids</Tag>
          <Tag>History</Tag>
          <Tag>Food</Tag>
          <Tag>Expeditions</Tag>
          <Tag>Clubs</Tag>
          <Tag>Family</Tag>
          <Tag>Politics</Tag>
          <Tag>Meetups</Tag>
          <Tag>Local events</Tag>
          <Tag>Exhibitions</Tag>
        </TagCloud>


      <Link to="/Digest" className="button button--confirm">
      <Button
        id='login'
        onClick={props.onSubmit}
        round="true"
        color="var(--theme-primary-color)"
        size="true">Done for now</Button>
      </Link>
    </section>
  );
}

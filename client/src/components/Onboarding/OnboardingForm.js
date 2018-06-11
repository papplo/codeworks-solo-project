import React from 'react';
import { Link } from 'react-router-dom';

import {TagCloud, Tag} from "../../components-styled/lists/TagCloud";

export const OnboardingForm = (props) => {

console.log(props);
  return (
    <section>
        <h5>Tell us about yourself {props.user.username}</h5>
        <h3>What are you looking to discover?</h3>
        <TagCloud>
          <Tag>Art</Tag>
          <Tag>Music</Tag>
          <Tag>Sports</Tag>
          <Tag>History</Tag>
          <Tag>Food</Tag>
          <Tag>Clubs</Tag>
          <Tag>Family</Tag>
          <Tag>Politics</Tag>
        </TagCloud>


      <Link to="/Digest" className="button button--confirm">Done for Now</Link>
    </section>
  );
}

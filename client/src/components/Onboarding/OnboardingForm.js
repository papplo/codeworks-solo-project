import React from 'react';
import { Link } from 'react-router-dom';

import {TagCloud, Tag} from "../../components-styled/lists/TagCloud";

export const OnboardingForm = (props) => {
  const { position } = props;

  const random = () => {
    const minmax = (min,max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return `rgb(${minmax(70,250)},${minmax(20,150)},${minmax(100,200)})`;
  }

  return (
    <section>
      <h1>What floats your boat?</h1>
      <TagCloud>
        <Tag bgColor={{backgroundColor: random()}}>Art</Tag>
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

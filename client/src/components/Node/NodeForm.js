import React from 'react';
import { Link } from 'react-router-dom';

import Input  from '../../components-styled/forms/Input';
import Button from '../../components-styled/buttons/Button';
import {TagCloud, Tag} from "../../components-styled/lists/TagCloud";

import './style.css';

export const NodeForm = (props) => {
return (
  <div id="nodeForm">
    <section className="node-form is-centered">
      <form
      onChange = {(e,value) => props.onChange(e, value)}>
        <label><span>Share something!</span></label>
        <Input id="node-title" placeholder="Whats up?" />
        <Input id="node-oveeview" placeholder="Write something..." />

          <Button size='true' color="var(--theme-primary-color)">Add Photo</Button>
          <div>
            <h4>What categories does this fit in?</h4>
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
        </div>
      </form>
      </section>
      <section className="node-form is-centered">
        <Button size="true" color="black">Post your news!</Button>
    </section>
  </div>
  );
}

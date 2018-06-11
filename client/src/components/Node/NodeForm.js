import React from 'react';

import {Input, Textarea } from '../../components-styled/forms/Input';
import Button from '../../components-styled/buttons/Button';
import { TagCloud, Tag } from "../../components-styled/lists/TagCloud";

import './style.css';

export const NodeForm = (props) => {
return (
  <div id="nodeForm">
    <section className="node-form is-centered">
      <form
      // onChange = {(e,value) => props.onChange(e, value)}
      >
        <label><span>Share something!</span></label>
        <Input
          id="node-title"
          placeholder="Whats up?" />
        <Textarea
          id="node-overview"
          placeholder="Write something..."
          rows="6">
        </Textarea>

          <Button
            size="true" round="true" color="var(--theme-primary-color)"
            >Add Photo</Button>
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

  </div>
  );
}

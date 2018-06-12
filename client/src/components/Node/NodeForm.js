import React from 'react';

import {Input, Textarea } from '../../components-styled/forms/Input';
import Button from '../../components-styled/buttons/Button';
import { TagCloud, Tag } from "../../components-styled/lists/TagCloud";
import ImageUploader from 'react-images-upload';

import './style.css';

export default class NodeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    }
  }

render() {
return (
  <div id="nodeForm">
    <section className="node-form is-centered">
      <form
       onChange = {(e,value) => this.props.onChange(e, value)}
      >
        <label><span>Share something!</span></label>
        <Input
          id="node_title"
          placeholder="Whats up?" />
        <Textarea
          id="node_overview"
          placeholder="Write something..."
          rows="6">
        </Textarea>

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
      <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.props.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
                withIcon={false}
                singleImage={true}

            />
      </section>

  </div>
  );
}
}

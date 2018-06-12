import React from 'react';
import {DigestPostSingle} from './DigestPostSingle';

import './style.css';

const DigestPostList = (props) => {
  const { nodes } = props.nodes;
  console.log('Display nodelist:', nodes);

  return (
    <div>
      <section className="digest-posts">
        <h3> - {nodes.length} posts</h3>
          <ul className="music">
            {nodes.filter((el, index) => (index < 10))
            .map(
              (el) => (
                <DigestPostSingle
                  key={el._id}
                  node={el}
                  />
              )
            )}</ul>

      </section>
    </div>

  );
}

export default DigestPostList

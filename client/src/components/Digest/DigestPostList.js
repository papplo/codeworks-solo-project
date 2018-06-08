import React from 'react';
import {DigestPostSingle} from './DigestPostSingle';

import './style.css';

const DigestPostList = (props) => {
  const { nodes } = props.nodes;
  console.log('Display nodelist:', nodes);

  return (
    <div>
        <h2>Happening in Barcelona</h2>
      <section className="digest-posts">
        <ul className="music">{nodes.filter((el, index) => (index < 10))
            .map(
              (el) => (
                <DigestPostSingle
                  key={el.id}
                  node={el}
                  />
              )
            )}</ul>

      </section>
    </div>

  );
}

export default DigestPostList

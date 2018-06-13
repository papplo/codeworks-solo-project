import React from 'react';
import {DigestPostSingle} from './DigestPostSingle';

import './style.css';

const DigestPostList = (props) => {
  const { nodes } = props.nodes;

  console.log('Category for list', props.category);
  console.log('Nodes for list: ', nodes );

  return (
    <div>
      <section className="digest-posts">
        <h3>{props.category}</h3>
          <ul className="music">
            {nodes.filter((el, index) => (el.node_type === props.category))
            .map(
              (el) => (
                <DigestPostSingle
                  key={el._id}
                  node={el}
                  />
              )
            )}
          </ul>

      </section>
    </div>

  );
}

export default DigestPostList

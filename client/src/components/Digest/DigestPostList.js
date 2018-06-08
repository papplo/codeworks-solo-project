import React from 'react';
import {DigestPostSingle} from './DigestPostSingle';

import './style.css';


const DigestPostList = (props) => {
  const { posts } = props;

  const someposts = (query) => {
    return posts
      .filter((el, index) => (index < 10))
      .map(
        (el) => (
          <DigestPostSingle
            key={el.id}
            post={el}
            query={query} />
        )
      )
  }

  return (
    <div>
        <h2>Happening in Barcelona</h2>
      <section className="digest-posts">
        <ul className="music">{ someposts('true') }</ul>
        <ul className="party">{ someposts('true') }</ul>
        <ul className="beers">{ someposts('true') }</ul>
      </section>
    </div>

  );
}

export default DigestPostList

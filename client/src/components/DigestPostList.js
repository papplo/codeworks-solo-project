import React from 'react';
import {DigestPostSingle} from './DigestPostSingle';


const DigestPostList = (props) => {
  const { posts } = props;
  console.log('Posts here: ', posts);

  const someposts = (query) => {
    return posts
      .filter((el, index) => (index < 10))
      .map(
        (el) => (
          <DigestPostSingle
            key={el.ID}
            post={el}
            query={query} />
        )
      )
  }

  return (
    <section>
      <ul className="">{someposts('true')}</ul>
      {someposts('false')}
    </section>
  );
}

export default DigestPostList

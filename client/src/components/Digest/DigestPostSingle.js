import React from 'react';
import { Link } from 'react-router-dom';

export const DigestPostSingle = (props) => {
  const { post } = props;

  const assetsRoute = 'https://image.tmdb.org/t/p/w500/';
  const staticRoute = assetsRoute + post.poster_path;

  return (
    <li className="single" data-tag={post.tag.map(el => (el.name))} >

      <Link to={{
        pathname: `/digest/${post.type.name_url}/${post.title_url}/${post.id}`,
        state: {
          data: {post},
        }
      }}>



        <div className="heading">
          <p className="small">{post.id} by {post.user_nick} - {post.user_id}</p>
          <img src={staticRoute} alt={post.title} className="single thumb"/>
          <h4>{post.title}</h4>
          <pre>{post.created_at.slice(0, 10)}</pre>
        </div>
      </Link>
    </li>
  );
}

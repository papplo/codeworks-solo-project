import React from 'react';


export const DigestPostSingle = (props) => {
  const { post } = props;

  const assetsRoute = 'https://image.tmdb.org/t/p/w500/';
  const staticRoute = assetsRoute + post.poster_path;

  return (
    <li className="single" data-tag={post.tag.map(el => (el.name))} >
      <div className="heading">
        <p className="small">{post.id} by {post.user_nick} - {post.user_id}</p>
        <img src={staticRoute} alt={post.title} className="single thumb"/>
        <h4>{post.title}</h4>
        <pre>{post.created_at.slice(0, 10)}</pre>
      </div>
    </li>
  );
}

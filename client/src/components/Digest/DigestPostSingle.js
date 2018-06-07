import React from 'react';

export const DigestPostSingle = (props) => {
  const { post } = props;
  return (
    <li className="single">
      <span>{post.ID}</span>
      <h3>{post.Title}</h3>
      <pre>{post.DueDate.slice(0, 10)}</pre>
    </li>
  );
}

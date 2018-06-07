import React from 'react';
import './style.css';

export const DigestPostSingle = (props) => {
  const { post } = props;
  return (
    <li className="single">
      {post.ID}
      {post.Title}
      {post.DueDate}
    </li>
  );
}

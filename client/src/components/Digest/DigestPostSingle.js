import React from 'react';
import { Link } from 'react-router-dom';

export const DigestPostSingle = (props) => {
  console.log(props);
  const { node } = props;
  // const assetsRoute = 'https://image.tmdb.org/t/p/w500/';
  // const staticRoute = assetsRoute + node.poster_path;



  return (
    <li className="single" data-tag={node.title_url} >

      <Link to={{
        pathname: `/digest/${node.node_type.name_url}/${node.title_url}/${node._id}`,
        state: {
          data: {node},
        }
      }}>
        <div className="heading">
          <img src={node.poster_path} alt={node.title} className="single thumb"/>
          <p className="small">by {node.created_by} - {node.user_id} <span>{node.created_at.slice(0, 10)}</span></p>
          <h4>{node.title}</h4>

        </div>
      </Link>
    </li>
  );
}

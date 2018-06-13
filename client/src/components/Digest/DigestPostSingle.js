import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from "../../components-styled/avatar/Avatar"

export const DigestPostSingle = (props) => {
  const { node } = props;
  // const assetsRoute = 'https://image.tmdb.org/t/p/w500/';
  // const staticRoute = assetsRoute + node.poster_path;
  const short = node.short_description.slice(0,120);

  return (
    <li className="single">
    <Link to={{
      pathname: `/digest/${node.node_type_name}/${node.title_url}/${node._id}`,
      state: {
        data: {node},
      }
    }}
      className="card-link">
      <article className="blog-card">
        <div className="post-meta">
            <Avatar className="avatar card-avatar" color="#60da6c">
              <img alt="" height="30px" width="30px" src="./avatar_placeholder_64x64.png" />
              <span>{!props.TellusUser? 'Ashley King' : 'logged'}</span></Avatar>
              <span className="node-type">{node.node_type}</span>
        </div>
        {node.poster_path && <img className="post-image" src={node.poster_path} />}
        <div className="article-details">
          <h4 className="post-category">{ node.node_type }</h4>
          <h3 className="post-title">{ node.title }</h3>
          <p className="post-description">{ short }...</p>
          <p className="post-author">By { node.created_by }</p>
        </div>
      </article>

    </Link>
</li>
    //
    // <li className="single" data-tag={node.title_url} >
    //
    //   <Link to={{
    //     pathname: `/digest/${node.node_type_name}/${node.title_url}/${node._id}`,
    //     state: {
    //       data: {node},
    //     }
    //   }}>
    //     <div className="heading">
    //       <img src={node.poster_path} alt={node.title} className="single thumb"/>
    //       <p className="small">by {node.created_by} - {node.user_id} <span>{node.created_at.slice(0, 10)}</span></p>
    //       <h4>{node.title}</h4>
    //
    //     </div>
    //   </Link>
    // </li>
  );
}

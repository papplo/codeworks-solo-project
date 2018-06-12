import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from "../../components-styled/avatar/Avatar"

export const DigestPostSingle = (props) => {
  console.log(props);
  const { node } = props;
  // const assetsRoute = 'https://image.tmdb.org/t/p/w500/';
  // const staticRoute = assetsRoute + node.poster_path;


  return (
    <li className="single">
    <Link to={{
      pathname: `/digest/${node.node_type_name}/${node.title_url}/${node._id}`,
      state: {
        data: {node},
      }
    }}
      className="card-link">
      <article class="blog-card">
        <div class="post-meta">
            <Avatar className="avatar card-avatar" color="#60da6c">
              <img alt="" height="30px" width="30px" src="./avatar_placeholder_64x64.png" />
              <span>{!props.TellusUser? 'Ashley King' : 'logged'}</span></Avatar>
              <span className="node-type">{node.node_type}</span>
        </div>
        <img class="post-image" src={node.poster_path} />
        <div class="article-details">
          <h4 class="post-category">{ node.node_type }</h4>
          <h3 class="post-title">{ node.title }</h3>
          <p class="post-description">{ node.short_description }</p>
          <p class="post-author">By { node.created_by }</p>
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

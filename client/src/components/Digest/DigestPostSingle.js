import React from 'react';
import { Link } from 'react-router-dom';

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
      <article class="blog-card" data-tag={node.title_url}>
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

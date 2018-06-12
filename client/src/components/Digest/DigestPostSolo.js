import React from 'react';
import Avatar from "../../components-styled/avatar/Avatar"
import {Input} from "../../components-styled/forms/Input"


export const DigestPostSolo = (props) => {
  this.state = props.history.location.state || {};
  const node = props.history.location.state.data.node;

  return (
    <section className="digest-single">
      {
        !props.history.location.state ?
          'Error: direct link to this url does not have object data in state - business logics for this single view will evolve...'
          :
          <article className="blog-card" data-tag={node.node_type_name + '/'
          + node.title_url + '/' + node._id}>
            <div className="post-meta">
                <Avatar className="avatar card-avatar" color="#60da6c">
                  <img alt="" height="45px" width="45px" src="./public/avatar_placeholder_64x64.png" />
                  <span>{!props.TellusUser? 'Ashley King' : node.created_by}</span></Avatar>
                  <span className="node-type">{node.node_type}</span>
            </div>
            <div className="article-details">
              <h1 className="post-title">{ node.title }</h1>
              <h3>{ node.short_description }</h3>
              <img className="post-image" src={node.poster_path} />
              <p className="post-description">{ node.overview }</p>
            </div>

            <div className="article-comments">
              <span>12 upvotes 💙</span>
              <Input color="white" size="true" bg="rgb(230, 228, 228)" placeholder="Comment"/>
            </div>
          </article>
      }



    </section>

  );
}

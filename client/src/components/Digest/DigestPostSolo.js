import React from 'react';

export const DigestPostSolo = (props) => {
  this.state = props.history.location.state || {};
  const node = props.history.location.state.data.node;
  console.log(node);
  return (
    <section className="digest-single">
      {
        !props.history.location.state ?
          'Error: direct link to this url does not have object data in state - business logics for this single view will evolve...'
          :
          <article class="blog-card" data-tag={node.title_url}>
            <img class="post-image" src={node.poster_path} />
            <div class="article-details">
              <h4 class="post-category">{ node.node_type }</h4>
              <h3 class="post-title">{ node.title }</h3>
              <p class="post-description">{ node.overview }</p>
              <p class="post-author">By { node.created_by }</p>
            </div>
          </article>
      }



    </section>

  );
}

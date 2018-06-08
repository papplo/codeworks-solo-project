import React from 'react';
import { Link } from 'react-router-dom';

export const DigestPostSolo = (props) => {
  this.state = props.history.location.state || {};

  if (this.state) {
    this.assetsRoute = 'https://image.tmdb.org/t/p/w500/';
    // this.staticRoute = this.assetsRoute + props.history.location.state.data.post.poster_path;
  }

  return (
    <section>

      {console.log(this.state)}

      {
        props.history.location.state ?
          this.state.data.post.short_description :
          'Error: direct link to this url does not have object data in state - business logics for this single view will evolve...'

      }



      <img src={this.staticRoute}  className="single thumb"/>
    </section>
    // <li className="single" data-tag={post.tag.map(el => (el.name))} >
    //   <Link to={`/digest/${post.type.name_url}/${post.title_url}`}>
    //     <div className="heading">
    //       <p className="small">{post.id} by {post.user_nick} - {post.user_id}</p>
    //       <img src={staticRoute} alt={post.title} className="single thumb"/>
    //       <h4>{post.title}</h4>
    //       <pre>{post.created_at.slice(0, 10)}</pre>
    //     </div>
    //   </Link>
    // </li>
  );
}

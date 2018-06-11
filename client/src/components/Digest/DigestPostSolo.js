import React from 'react';

export const DigestPostSolo = (props) => {
  this.state = props.history.location.state || {};

  return (
    <section>
      {
        props.history.location.state ?
          this.state.data.node.short_description :
          'Error: direct link to this url does not have object data in state - business logics for this single view will evolve...'

      }



      <img
        src={this.staticRoute}
        alt=""
        className="single thumb"/>
    </section>

  );
}

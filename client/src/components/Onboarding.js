import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const Onboarding = () => {
  return (

  <div>

      <Helmet>
        <title>***</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    <section>
      <h1>Welcome to Tellus <span role="img" aria-label="logo">🌎</span></h1>
      <p>
        Tellus crawls the net to discover events and happenings that are based on your location. Events can be added by anyone; users, companies and organisations.
      </p>

      <p>
        <Link to="/signup">Create an Account and get started!</Link>
      </p>
    </section>
  </div>
  );
}

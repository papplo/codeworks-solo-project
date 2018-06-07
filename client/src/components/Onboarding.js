import React from 'react';
import { Link } from 'react-router-dom';

export const Onboarding = () => {
  return (

  <div>
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

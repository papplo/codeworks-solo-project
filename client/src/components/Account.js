import React from 'react';
import { Link } from 'react-router-dom';

export const Account = () => {
  return (
  <div>
    <section>
      <h1>Hello, friend</h1>
      <p>What's your name buddy?</p>
      <input type="text" placeholder="First name"></input>
    </section>

    <section>
      <Link to="/Digest" className="button button--confirm">Signup!</Link>
    </section>
  </div>
  );
}

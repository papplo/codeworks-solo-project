import React from 'react';
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
  <div>
    <section>
      <h1>What floats your boat?</h1>
      <ul className="pills tag-cloud">
        <li>Art</li>
        <li>Music</li>
        <li>Sports</li>
        <li>History</li>
        <li>Food</li>
        <li>Clubs</li>
        <li>Family</li>
        <li>Politics</li>
      </ul>
    </section>

    <section>
      <Link to="/Digest" className="button button--confirm">Done for Now</Link>
    </section>
  </div>
  );
}

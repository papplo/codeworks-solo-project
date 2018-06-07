import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export const Header = (props) => {
  return (
    <header className="App-header menu">
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/digest">Explore</Link> </li>
        <li> <Link to="/account">Login</Link> </li>
      </ul>
    </header>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

/* Styled Components from our evergrowing library*/
import Button from "../../components-styled/buttons/Button";

import './style.css';

export const Header = (props) => {
  return (
    <header className="App-header menu">
      <ul>
        <li> <Link to="/">Tellus</Link></li>
        <li> <Link to="/digest"><span role="img" aria-label="logo">🌎</span> Barcelona</Link></li>
        <li>
          <Link to="/account">
            <Button>Login</Button>
          </Link>
        </li>


      </ul>

    </header>
  );
}

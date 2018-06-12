import React from 'react';
import { Link } from 'react-router-dom';

/* Styled Components from our evergrowing library*/
import Button from "../../components-styled/buttons/Button";
import Avatar from "../../components-styled/avatar/Avatar"
import './style.css';

export const Header = (props) => {
  if (localStorage.getItem('TellusUser')) {
    const user = JSON.parse(localStorage.getItem('TellusUser'));
    console.log('Welcome ' +user.username);
  }
  console.log('header props: ', props);
  return (
    <header className="App-header menu">
      <ul>
        {/* {this.state.history ===} */}
        <li>
          <Link to="/digest">
            <img alt="" height="30px" width="25px" src="/iconStarredPin@2x.png" />
            <span>Barcelona</span>
          </Link>
        </li>
        <li>
          <Link to="/digest">
            <img alt="" height="25px" width="25px" src="/iconSearch@2x.png" />
          </Link>
        </li>
      </ul>

    </header>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

/* Styled Components from our evergrowing library*/
import Button from "../../components-styled/buttons/Button";
import Avatar from "../../components-styled/avatar/Avatar"
import './style.css';

export const Header = (props) => {
  console.log('header: ', props);
  return (
    <header className="App-header menu">
      <ul>
        <li> <Link to="/">Tellus</Link></li>
        <li> <Link to="/digest"><span role="img" aria-label="logo">🌎</span> Barcelona</Link></li>
        <li>

          {!props.TellusUser.username?
            <Link to="/account">
              <Button color="#8BB48F">Login</Button>
            </Link>
            :
            <Avatar className="avatar" color="#60da6c">
              <img alt="" height="25px" width="25px" src="./avatar_placeholder_64x64.png" />
              <span>{props.TellusUser.username}</span></Avatar>
          }

        </li>


      </ul>

    </header>
  );
}

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

const renderHeader = function () {
  const loading = <div class="spinner"></div>;

  let geolocation = false;

  if (JSON.parse(localStorage.getItem('TellusGeo'))) {
    geolocation = JSON.parse(localStorage.getItem('TellusGeo'));
    console.log(!geolocation.position);
  }

  const pathName = window.location.pathname;
  if (pathName == '/' || pathName.slice(0, 8) == '/digest/') {
    console.log(pathName, 'No Header here!');
  }
  else {
    return (
    <header className="App-header menu">
      <ul>
        <li>
          <Link to="/digest">
            <img alt="" height="30px" width="25px" src="/iconStarredPin@2x.png" />
            <span>{!geolocation? <div class="spinner"></div> : 'Barcelona'}</span>
          </Link>
        </li>
        <li>
          <Link to="/digest">
            <img alt="" height="25px" width="25px" src="/iconSearch@2x.png" />
          </Link>
        </li>
      </ul>
    </header>
  )
  }
}


  return (
    <div>
    {renderHeader()}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export const PrivacyView = (props) => {
  return (
  <div>
    <section>
      <h1>About privacy and Location Services in iOS 8 and later</h1>
      <p>
        Learn about services in iOS 8 and later that protect your private information, including your location on your iPhone, iPad, and iPod touch.
      </p>
      <Link to="/signup" onClick={props.onClick}>I Agree!</Link>
    </section>
    <section>
      <h2>Privacy controls</h2>
      <p>Privacy controls in iOS 8 and later give you control over which apps have access to information stored on your iOS device. For example, you can allow a social-networking app to use your camera, allowing you to take and upload pictures. You can also grant access to your contacts, so a messaging app can find any friends that are already using the same app.</p>
      <img src="https://placeimg.com/640/350/tech" alt=""/>

      <p>You can modify privacy settings in Settings > Privacy. You can select a type of data from this list to see which apps have asked for permission to use that data. An app won't appear on the list until it asks permission to use your data. You can add or remove permission from any app that has asked for access to data. An app can use your data only if you have given it your permission.</p>

      <p>If you allow third-party apps or websites to use your data or your current location, you're subject to their terms, privacy policies, and practices. You should review the terms, privacy policies, and practices of the apps and websites to understand how they use your location and other information. Information Apple collects will be treated in accordance with Apple's Privacy Policy.</p>
      <img src="https://placeimg.com/640/380/tech" alt="" />

    </section>
  </div>
  );
}

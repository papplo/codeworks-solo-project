import React from 'react';

import DigestPostList from '../components/Digest/DigestPostList';

import {mockdata} from './DigestMockData';

class Digest extends React.Component {
  constructor (props) {
    super(props)
    this.posts = [];
    this.callApi();
  }

  componentDidMount() {
    console.log('DigestContainer did mount.');
  }

  callApi() {
    console.log('fetching');
    // fetch('https://fakerestapi.azurewebsites.net/api/Activities')
    // .then(res => res.json())
    // .then(res => this.setState(this.posts = res))

    this.setState(this.posts = mockdata);
  }

  render() {
    return (
      <DigestPostList
        posts={this.posts}
      />
    );
  }
}

export default Digest

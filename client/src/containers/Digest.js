import React from 'react';

import DigestPostList from '../components/Digest/DigestPostList';

class Digest extends React.Component {
  constructor (props) {
    super(props)
    this.posts = [];
    this.callApi();
  }

  componentDidMount() {
    console.log(this ,' did mount.');
  }

  callApi() {
    console.log('fetching');
    fetch('https://fakerestapi.azurewebsites.net/api/Activities')
    .then(res => res.json())
    .then(res => this.setState(this.posts = res))
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

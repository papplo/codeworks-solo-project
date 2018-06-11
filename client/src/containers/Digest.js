import React from 'react';

import DigestPostList from '../components/Digest/DigestPostList';

//import {mockdata} from './DigestMockData';

const apiRouteNodes = 'http://Pablos-MacBook-Pro.local:4000/nodes/'

class Digest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nodes : []
    }
  }

  componentDidMount() {
    console.log('DigestContainer did mount, fetching: ', apiRouteNodes);
    fetch(apiRouteNodes, {
      method: 'GET',
      authorization : 'Bearer-Token : 1111'
    })
    .then(res => res.json())
    .then(res => this.setState({nodes : res}))
  }


  render() {
    return (
      <div>
      <DigestPostList nodes={this.state} />
      <DigestPostList nodes={this.state} />
      <DigestPostList nodes={this.state} />
      </div>
    );
  }
}

export default Digest

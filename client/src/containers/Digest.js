import React from 'react';
import DigestPostList from '../components/Digest/DigestPostList';

const moment = require('moment');

//import {mockdata} from './DigestMockData';

const apiRouteNodes = 'http://Pablos-MacBook-Pro.local:4000/nodes/'

class Digest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nodes : JSON.parse(localStorage.getItem('TellusNodes')) || [],
      nodeTime : '',
    }

  }


  /* Business Logic here */
  componentDidMount () {
    console.log('Component did Mount: ', moment().toISOString());
    this.compareNodeTimes();
  }

  compareNodeTimes () {
    const latest = localStorage.getItem('NodeTime');
    const now = moment().toISOString();
    const compare = moment(latest).diff(now);
    console.log(compare);
    if (compare < -120000) {
      console.log('Refreshing nodes: ', apiRouteNodes);
      fetch(apiRouteNodes, {method: 'GET'})
      .then(res => res.json())
      .then(nodes => {
        localStorage.setItem('TellusNodes', JSON.stringify(nodes))
        this.setState({nodes: nodes})
      })

      const now = moment().toISOString();;
      localStorage.setItem('NodeTime', new Date())
    } else {
      console.log('Nodes were recently updated');
    }
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

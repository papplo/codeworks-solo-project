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
    window.scrollTo(0,0);
    console.log('Component did Mount: ', moment().toISOString());
    // this.compareNodeTimes();

    //SAFARI IOS DOES NOT COMPUTE LOCALSTORAGE AS EXPECTED
    this.refreshNodes();
  }

  compareNodeTimes () {
    const latest = localStorage.getItem('NodeTime');
    const now = moment().toISOString();
    const compare = moment(latest).diff(now);
    alert(compare);
    if (compare < -10000) {
      console.log('Refreshing nodes: ', apiRouteNodes);
      fetch(apiRouteNodes, {method: 'GET'})
      .then(res => res.json())
      .then(nodes => {
        localStorage.setItem('TellusNodes', JSON.stringify(nodes))
        this.setState({nodes: nodes})
      })

      const now = moment().toISOString();;
      localStorage.setItem('NodeTime', now)
    } else {
      alert('Nodes were recently updated');
    }
  }

  refreshNodes(){
    console.log('Refreshing nodes: ', apiRouteNodes);
    fetch(apiRouteNodes, {method: 'GET'})
    .then(res => res.json())
    .then(nodes => {
      localStorage.setItem('TellusNodes', JSON.stringify(nodes))
      this.setState({nodes: nodes})
    })
  }

  render() {
    return (
      <div>
        <DigestPostList nodes={this.state} category='Locality'/>
        <DigestPostList nodes={this.state} category='Exposition'/>
        <DigestPostList nodes={this.state} category='Meetup'/>
        <DigestPostList nodes={this.state} category='Expedition'/>
        <DigestPostList nodes={this.state} category='General'/>
      </div>
    );
  }
}

export default Digest

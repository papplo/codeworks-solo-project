import React from 'react';
import NodeButton from '../components-styled/buttons/NodeButton';
import {NodeForm} from '../components/Node/NodeForm';


export default class NodeCreate extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      formVisible : '',
      buttonExpand: '',

      form_title: '',
      form_overview: '',
      node_type: '',

    }
  this.apiNodeAuth = 'http://localhost:4000/nodes';
  this.apiNodeNew = 'http://localhost:4000/nodes';
  }

  toggleForm() {
    console.log('Toggling form Visibility')
    this.setState({
      'formVisible': this.state.formVisible? '' : true,
      'buttonExpand': this.state.buttonExpand? '' : true
    })
  }

  handleSubmit(event) {
    //event.preventDefault();
    let ApiRoute = this.apiNodeNew;

    fetch(ApiRoute, {
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.form_title,
        overview: this.state.form_overview,
        node_type: this.state.node_type,
        geolocation: [41.402451, 2.188092],
        // created_by: this.props.logged_in;
      })
    })
      .then(res => res.json())
      .then(res => console.log(res))
      // .then(res => this.setState(
      //   {'server_message' : res.message, 'server_error': res.error, 'logged_in' : res.username}
      // ))
  }


  render() {
    return (
      <div>
      {this.state.formVisible && <NodeForm />}
        <NodeButton
          animated='true'
          className= {this.state.buttonExpand && 'is-expanded'}
          color="var(--theme-primary-color)"
          onClick={() => this.toggleForm()}
          size="true">+ {this.state.buttonExpand &&
            <span
              onClick={() => this.handleSubmit()}>Submit your post</span>}</NodeButton>
      </div>
    );
  }
}

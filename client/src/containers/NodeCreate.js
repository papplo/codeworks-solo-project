import React from 'react';
import NodeButton from '../components-styled/buttons/NodeButton';
import {NodeForm} from '../components/Node/NodeForm';
import { Link } from 'react-router-dom';


export default class NodeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible : ''
    }
  }

  toggleForm() {
    console.log('Toggling form Visibility')
    this.setState({
      'formVisible': this.state.formVisible? '' : true
    })
    }


  render() {
    return (
      <div>
      {this.state.formVisible && <NodeForm />}
        <NodeButton
          onClick={() => this.toggleForm()}
          color="blue"
          size="true">+</NodeButton>
      </div>
    );
  }
}

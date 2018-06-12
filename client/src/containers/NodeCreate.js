import React from 'react';
import NodeButton from '../components-styled/buttons/NodeButton';
import NodeForm from '../components/Node/NodeForm';


export default class NodeCreate extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      formVisible : '',
      buttonExpand: '',

      form_title: '',
      form_overview: '',
      node_type: 'General',
      pictures: [],
      file: '',
      imagePreviewUrl: '',
    }
  this.onDrop = this.onDrop.bind(this);
  this.apiNodeAuth = 'http://localhost:4000/nodes';
  this.apiNodeNew = 'http://localhost:4000/nodes';
  }

  onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
    // let reader = new FileReader();
    // let file = picture;
    // reader.onloadend = () => {
    //   this.setState({
    //     file: file,
    //     imagePreviewUrl: reader.result
    //   });
    // }
    // reader.readAsDataURL(file)
  }



  toggleForm() {
    console.log('Toggling form Visibility')
    this.setState({
      'formVisible': this.state.formVisible? '' : true,
      'buttonExpand': this.state.buttonExpand? '' : true
    })
    console.log(this.props);
  }

  handleTyping(event) {
    console.log(event.target.value);
    if (event.target.id === 'node_title') {
      this.setState({'form_title' : event.target.value});
      console.log(this.state);
    } else if (event.target.id === 'node_overview'){
      this.setState({'form_overview' : event.target.value});
    } else {
      this.setState({'node_type': event.target.value})
    }
  }
  handleSubmit(event) {
    console.log(event.target);
    console.log(this.state.pictures[0]);
    let ApiRoute = this.apiNodeNew;

    fetch(ApiRoute, {
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        poster_path: this.state.pictures[0].name,
        title: this.state.form_title,
        overview: this.state.form_overview,
        node_type: this.state.node_type,
        geolocation: [41.402451, 2.188092],
        created_by: this.props.TellusUser._id? this.props.TellusUser._id : '5b1edf8c46283e9b01ccf583',
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
      {this.state.formVisible &&
        <div>
        <NodeForm
          onDrop={(picture) => this.onDrop(picture)}
          onChange={(e) => this.handleTyping(e)}
        />
        </div>}
        <NodeButton
          animated='true'
          className= {this.state.buttonExpand && 'is-expanded'}
          color="var(--theme-primary-color)"
          onClick={() => this.toggleForm()}
          size="true">+ {this.state.buttonExpand &&
            <span
              onClick={(e) => this.handleSubmit(e)}>Submit your post</span>}</NodeButton>
      </div>
    );
  }
}

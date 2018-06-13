import styled from "styled-components";
import '../globalVars.css';
const Button = styled.button`

  /* Adapt the colours based on color prop */
  background: ${
    props => props.bgcolor ?
    'transparent' : 'white'};

  color: ${
    props => props.color ?
    props.color : 'white'};

  border: 2px solid ${
    props => props.color ?
    props.color : 'white'};

  font-size: ${
    props => props.size ?
    '1.15em' : '.9em'};

  border-radius: ${
    props => props.round ?
    '25px' : '3px'};

  padding: .5em 1em;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  -webkit-tap-highlight-color: rgba(255,255,255,0.4);
  tap-highlight-color: rgba(255,255,255,0.4);
  outline: 0;

`;
export default Button

import styled from "styled-components";

const NodeButton = styled.button`

  /* Adapt the colours based on color prop */
  background: ${
    props => props.color ?
    props.color : 'white'};

  color: ${
    props => props.color ?
    'white': props.color};

  border: 2px solid ${
    props => props.color ?
    'white': props.color };

  transform: scale(${
    props => props.size ?
    '2' : '1'});

  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;
  box-shadow: 2px 2px 8px rgba(0,0,0,.3);
  border-radius: 50px;
  line-height: 100%;
  width: 25px;
  height: 25px;
  text-align: center;
  -webkit-tap-highlight-color: rgba(255,255,255,0.4);
  tap-highlight-color: rgba(255,255,255,0.4);
  outline: 0;

`;
export default NodeButton

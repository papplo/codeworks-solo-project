import styled from "styled-components";
import '../globalVars.css';
const NodeButton = styled.button`

  /* Adapt the colours based on color prop */
  background: ${
    props => props.color ?
    props.color : "var(--theme-primary-color)"};

  color: ${
    props => props.color ?
    "var(--theme-primary-bgcolor)": props.color};

  border: 2px solid ${
    props => props.color ?
    "var(--theme-primary-bgcolor)": props.color };

  transform: scale(${
    props => props.size ?
    '1.6' : '1'});


  /* Main button styles */
  position: fixed;
  overflow: hidden;
  bottom: 30px;
  right: 30px;
  z-index: 100;
  box-shadow: 2px 2px 8px rgba(0,0,0,.3);
  border-radius: 50px;
  line-height: 100%;
  width: 25px;
  height: 25px;
  text-align: center;
  font-size: .8em;
  -webkit-tap-highlight-color: rgba(255,255,255,0.4);
  tap-highlight-color: rgba(255,255,255,0.4);
  outline: 0;


/* Basic transition style */
transition: width 0.2s ease-out;


`;
export default NodeButton

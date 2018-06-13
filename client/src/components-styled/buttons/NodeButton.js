import styled from "styled-components";
import '../globalVars.css';
const NodeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* Adapt the colours based on color prop */
  background: ${
    props => props.color ?
    props.color : "var(--theme-primary-color)"};

  color: ${
    props => props.color ?
    "var(--theme-primary-bgcolor)": props.color};


  transform: scale(${
    props => props.size ?
    '1.9' : '1'});


  /* Main button styles */
  border: 0;
  position: fixed;
  overflow: hidden;
  bottom: 30px;
  right: 30px;
  z-index: 100;
  border-radius: 25px;
  width: 25px;
  height: 25px;
  font-size: .8em;
  -webkit-tap-highlight-color: rgba(255,255,255,0.4);
  tap-highlight-color: rgba(255,255,255,0.4);
  outline: 0;


/* Basic transition style */
transition: width 0.2s ease-out;


`;
export default NodeButton

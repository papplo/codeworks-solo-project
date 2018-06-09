import styled from 'styled-components';
import '../globalVars.css';
const Input = styled.input`

  color: ${
    props => props.color ?
    props.color : 'var(--theme-primary-color)'};

  border: 1px solid ${
    props => props.color ?
    props.color : 'var(--theme-primary-color)'};

  font-size: .9em;
  text-align: left;
  padding: .8em 1.5em;
  margin: 1em auto;
  width: 75vw;
  max-width: 450px;
  border-radius: 15px;
`;

export default Input;

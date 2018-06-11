import styled from 'styled-components';
import '../globalVars.css';

export const Input = styled.input`

  color: ${
    props => props.color ?
    props.color : 'var(--theme-primary-color)'};

  border: 1px solid ${
    props => props.color ?
    props.color : 'var(--theme-primary-color)'};

  font-size: 1.2em;
  text-align: left;
  padding: .8em 1em;
  margin: .5em auto;
  width: 75vw;
  max-width: 450px;
  border-radius: 15px;
`;

export const Textarea = Input.withComponent('textarea').extend`
  color: var(--theme-secondary-color);
`;

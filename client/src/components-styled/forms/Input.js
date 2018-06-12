import styled from 'styled-components';
import '../globalVars.css';

export const Input = styled.input`

  background-color: ${
    props => props.bg ?
    props.bg : 'var(--theme-primary-bgcolor)'};

  color: ${
    props => props.color ?
    props.color : 'var(--theme-primary-color)'};

  border: 1px solid ${
    props => props.color ?
    props.color : 'var(--theme-primary-color)'};

  font-size: ${
    props => props.size ?
    '16px' : '14px' };

  font-family: var(--theme-font-stack);
  text-align: left;
  padding: 10px 20px 12px;
  margin: .5em auto;
  width: 75vw;
  max-width: 450px;
  border-radius: 15px;
  -webkit-appearance: none;
`;

export const Textarea = Input.withComponent('textarea').extend`
  color: var(--theme-secondary-color);
`;

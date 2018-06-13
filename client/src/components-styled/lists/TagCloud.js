import styled from "styled-components";

export const Tag = styled.li`
  display: flex;
  justify-content: space-between;
  margin: .7em .5em;
  border-radius: 2rem;
  padding: .4rem 1.3rem;


  letter-spacing: .0225em;
  text-transform: uppercase;
  font-weight: 400;
  background-color: ${props => props.bgColor || '#ccc'};
  -webkit-tap-highlight-color: rgba(0,0,0,0.2);
  tap-highlight-color: rgba(0,0,0,0.2);
  outline: 0;
`;

export const TagCloud = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 90vw;
  max-width: 400px;
  font-size: ${
    props => props.size ?
    '1em' : '.7em'};

`;

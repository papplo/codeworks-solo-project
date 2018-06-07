import styled from "styled-components";

export const Tag = styled.li`
  display: inline-block;
  margin: 0 .7rem 0 0;
  height: 18px;
  border-radius: 2rem;
  padding: .4rem .6rem;
  font-size: .8rem;
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
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

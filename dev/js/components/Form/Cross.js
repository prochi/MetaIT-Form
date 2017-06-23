import styled from 'styled-components';

const Cross = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  float: right;

  &:before {
    content: 'x';
    font-weight: 300;
  }
`;

export default Cross;
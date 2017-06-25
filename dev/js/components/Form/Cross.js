import styled from 'styled-components';

const Cross = styled.button`
  animation: fadeIn 1s;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  float: right;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  &:before {
    content: 'x';
    font-weight: 300;
  }
`;

export default Cross;
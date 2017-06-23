import styled from 'styled-components';

const QuestWrap = styled.div`
  background-color: #fff;
  box-shadow: 2px 2px 2px 2px rgba(113,113,113,0.3);
  margin: 20px auto;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  width: 90%;

  @media (min-width: 700px) {
    margin-top: 50px ;
  }

  h1 {
    color: #283593;
    font-size: 18px;
  }

  form {
    margin: auto;
    margin-bottom: 50px;
    max-width: 450px;
    overflow: hidden;

    div {
      float: left;
      padding: 10px;
      text-align: left;
      width: 100%;

      span input{
        width: inherit;
      }

      @media (min-width: 450px) {
        width: 50%;

        &:last-of-type {
          width: 100%;
        }
      }
    }
    label {
      float: left;
      font-size: 12px;
      margin-bottom: 5px ;
      width: 100%;
      
      span {
        color: #ff0000;
      }
    }
    input, select {
      border: 1px solid #ebebeb;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 6px;
      width: 100%;
    }
  }
`;

export default QuestWrap;
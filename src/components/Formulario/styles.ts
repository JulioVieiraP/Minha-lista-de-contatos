import styled from "styled-components";

export const Form = styled.form`
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
  height: 80vh;

  span{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const DivForm = styled.div`
  margin: 32px 64px ;
  display: flex;
  flex-direction: column;
  align-items: center;

  label{
    margin-bottom: 16px;
    font-family: "Inter", sans-serif;
  }
`

export const InputForm = styled.input`
  padding: 10px;
  border-radius: 46px;
  width: 284px;
  height: 64px;
  border: none;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`

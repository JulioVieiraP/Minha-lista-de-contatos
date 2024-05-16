import styled from "styled-components"

export const Aside = styled.aside`
  padding: 16px;
  height: 100vh;
  background-color: #ccc;
`

export const PerfilDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Titulo = styled.h1`
  align-self: flex-start;
`

export const PerfilIcon = styled.img`
  margin-top: 32px;
  width: 90px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
`

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span{
    color: black;
    margin-top: 8px;
    font-size: 25px;
  }

  p{
    color: #7c7c7c;
    font-size: 18px;
  }
`

export const InfoPessoal= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  margin-top: 58px;
  div{
    padding: 12px;
  }

`


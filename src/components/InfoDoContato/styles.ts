import styled from "styled-components";

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InfoImg = styled.img`
  width: 90px;
  margin-top: 32px;
`

export const InfoDescricao = styled.div`
  margin-top: 6px;
  text-align: center;
  p{
    font-size: 18px;
  }

  span{
    font-size: 15px;
  }
`

export const InfoStatus = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  align-self: flex-start;
  max-width: 328px;
  width: 100%;
  margin-top: 16px;

  div{
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
`

export const Status = styled.div`
  display: flex;
  flex-direction: column;
`

export const linkSvg = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8pxpx;
  background-color: #00C938;
  width: 50px;
  cursor: pointer;

  &:hover{
    opacity: .7;
  }
`

export const Mensagem = styled.p`
  display: flex;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

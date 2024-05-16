import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "Jua", sans-serif;
  }
`

export const Container = styled.div`
  padding: 30px 55px;
`

export default EstiloGlobal

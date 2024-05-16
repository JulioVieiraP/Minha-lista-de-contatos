import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
`

export const Container = styled.div`
  padding: 0 55px;
`

export default EstiloGlobal

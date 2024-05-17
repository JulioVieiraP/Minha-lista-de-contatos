import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

type Props = {
  Navegar?: string | number
  confirmar?: string | number
  delete?: string | number | boolean
}

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
  display: grid;
  grid-template-columns: 378px auto;
`
export const ButtonLink = styled(Link)<Props>`
  background-color: ${props => (props.Navegar ? "#ccc" : "#55C875")};
  color: #303030;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const Button = styled.button<Props>`
  background-color: ${props => props.delete ? 'red' : (props.confirmar ? '#55C875' : '#ccc')};
  border-radius: 5px;
  color: #303030;
  padding: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`
export default EstiloGlobal

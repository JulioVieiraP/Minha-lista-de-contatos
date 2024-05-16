import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  flex-shrink: 0;
  height: 16vh;
`

export const Div = styled.div`
  display: flex;
`

export const Button = styled(Link)`
  background-color: #55C875;
  color: #303030;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  &:hover{
    opacity: .7;
  }
`

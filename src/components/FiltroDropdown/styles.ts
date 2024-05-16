import styled from "styled-components";

export const filterDropdown = styled.div`
  position: relative;
  display: inline-block;
`

export const dropdownToggle = styled.button`
  padding: 16px;
  margin-right: 48px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover{
    opacity: 0.7;
  }
`

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
  list-style: none;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover{
    background-color: #f1f1f1;
  }
`

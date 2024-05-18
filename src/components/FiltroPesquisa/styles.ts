import styled from 'styled-components';

type Props = {
  isOpen: boolean
}

export const FilterDropdown = styled.div`
  display: inline-block;
`;

export const ModalBackdrop = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const ModalContainer = styled.div<Props>`
  position: fixed;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 8px;
  z-index: 1100;
  width: 300px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const ModalContent = styled.div`
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding-top: 20px;
`;

export const DropdownToggle = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 16px;
  margin-right: 16px;
  cursor: pointer;
  border-radius: 4px;
`;

export const InputSearch = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ced4da;
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 0;
  &:focus {
    outline: none;
    border-bottom: 1px solid #007bff;
  }
`;

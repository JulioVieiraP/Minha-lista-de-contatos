import styled from "styled-components";

type Props = {
  show?: boolean
}

export const Modal = styled.div<Props>`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;

  label {
    margin-bottom: 8px;
    font-family: "Inter", sans-serif;
  }

  input {
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: "Inter", sans-serif;
  }

  button {
    margin-top: 16px;
  }
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
`;

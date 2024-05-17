import styled from "styled-components";

export const ContactDetails = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  div {
    margin-right: 20px;
    font-family: "Inter", sans-serif;
  }
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 748px 378px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px;
  height: 80vh;
  overflow-y: scroll;
`;

export const ContactItem = styled.li`
  align-items: center;
  margin-bottom: 22px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 16px;
  width: 760px;
`;

export const ContactImage = styled.img`
  width: 70px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const P = styled.p`
  font-family: "Inter", sans-serif;
`;

export const Descricao = styled(P)`
  color: #636363;
  font-size: 15px;
`;

export const Gmail = styled(P)`
  color: #696969;
`;

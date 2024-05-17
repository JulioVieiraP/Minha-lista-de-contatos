import { Button } from "../../styles"
import * as S from "./styles"

import Icon from "../../assets/Foto_Perfil2.png"

const ListaDeContatos = () => {
  return(
    <>
      <S.ContactContainer>
        <ul>
          <S.ContactItem>
            <S.ContactDetails>
              <S.ContactImage src={Icon} alt="test" />
              <div>
                <S.P>David John</S.P>
                <S.Descricao>Java Developer</S.Descricao>
              </div>
              <S.P>0706312495</S.P>
              <S.Gmail>jonhdavid@gmail.com</S.Gmail>
              <Button>Deletar</Button>
            </S.ContactDetails>
          </S.ContactItem>
        </ul>

        <div>
          <p>teste</p>
        </div>
      </S.ContactContainer>
    </>
  )
}

export default ListaDeContatos

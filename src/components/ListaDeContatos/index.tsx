import { Button } from "../../styles"
import * as S from "./styles"

import Icon from "../../assets/Foto_Perfil2.png"
import InfoDoContato from "../InfoDoContato"

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
              <Button>Ver</Button>
              <Button delete >Deletar</Button>
            </S.ContactDetails>
          </S.ContactItem>
        </ul>

        <InfoDoContato MostrarInfo />
      </S.ContactContainer>
    </>
  )
}

export default ListaDeContatos

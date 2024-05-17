import { CiCalendarDate, CiLocationOn } from "react-icons/ci"
import { MdOutlinePhone } from "react-icons/md"

import * as S from './styles'

const Perfil = () => {
  return(
    <S.Aside>
      <S.PerfilDiv>
        <S.Titulo>Meu Contato</S.Titulo>
        <S.InfoDiv>
          <S.PerfilIcon src='https://via.placeholder.com/150x150' alt="Foto de perfil" />
          <span>Julio</span>
          <p>JulioVieira@gmail.com</p>
        </S.InfoDiv>
        <S.InfoPessoal>
          <div><CiCalendarDate /> 28-09-2002</div>
          <div><MdOutlinePhone /> 98300766</div>
          <div><CiLocationOn /> Aracaju-SE</div>
        </S.InfoPessoal>
      </S.PerfilDiv>
    </S.Aside>
  )
}

export default Perfil

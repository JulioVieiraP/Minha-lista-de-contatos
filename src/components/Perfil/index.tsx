import { CiCalendarDate, CiLocationOn } from "react-icons/ci"
import { MdOutlinePhone } from "react-icons/md"
import Img from "../../Images/FotoPerfil1.jpg"

import * as S from './styles'

const Perfil = () => {
  return(
    <S.Aside>
      <S.PerfilDiv>
        <S.Titulo>Meu Contato</S.Titulo>
        <S.InfoDiv>
          <S.PerfilIcon src={Img} alt="Foto de perfil" />
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

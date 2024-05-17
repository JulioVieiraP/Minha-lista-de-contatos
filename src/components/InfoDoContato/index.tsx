import * as S from "./styles";
import Icon from '../../assets/Foto_Perfil2.png'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdOutlineChatBubble } from "react-icons/md";

type Props = {
  MostrarInfo?: boolean;
};

const InfoDoContato = ({ MostrarInfo }: Props) => {
  return (
    <>
      {MostrarInfo ? (
        <S.InfoDiv>
          <S.InfoImg src={Icon} alt="Imagem de placeholder" />
          <S.InfoDescricao>
            <p>Name</p>
            <span>descrição</span>
          </S.InfoDescricao>
          <S.InfoStatus>
            <div>
              <S.Status>
                <p>Phone number</p>
                <span>0902362954</span>
              </S.Status>
              <S.linkSvg><FaPhoneAlt /></S.linkSvg>
            </div>
            <div>
              <S.Status>
                <p>Email Address</p>
                <span>onichan@gmail.com</span>
              </S.Status>
              <S.linkSvg><MdEmail /></S.linkSvg>
            </div>
            <div>
              <S.Status>
                <p>Chat</p>
                <span>marichan</span>
              </S.Status>
              <S.linkSvg><MdOutlineChatBubble /></S.linkSvg>
            </div>
          </S.InfoStatus>
        </S.InfoDiv>
      ) : (
        <S.Mensagem>Nenhum contato selecionado</S.Mensagem>
      )}
    </>
  );
};

export default InfoDoContato;

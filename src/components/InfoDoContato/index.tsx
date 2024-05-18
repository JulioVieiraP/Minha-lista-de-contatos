import * as S from "./styles";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdOutlineChatBubble } from "react-icons/md";

import Img from "../../Images/FotoPerfil2.png"

interface ContactInfo {
  name: string;
  description: string;
  phoneNumber: string;
  emailAddress: string;
  chatInfo: string;
}

interface Props {
  showInfo?: boolean;
  contact?: ContactInfo;
}

const InfoDoContato = ({ showInfo = false, contact }: Props) => {
  if (!contact) return <S.Mensagem>Nenhum contato selecionado</S.Mensagem>;


  return (
    <>
      {showInfo && (
        <S.InfoDiv>
          <S.InfoImg src={Img} alt="Imagem do perfil" />
          <S.InfoDescricao>
            <p>{contact.name}</p>
            <span>{contact.description}</span>
          </S.InfoDescricao>
          <S.InfoStatus>
            <div>
              <S.Status>
                <p>Phone number</p>
                <span>{contact.phoneNumber}</span>
              </S.Status>
              <S.linkSvg><FaPhoneAlt /></S.linkSvg>
            </div>
            <div>
              <S.Status>
                <p>Email Address</p>
                <span>{contact.emailAddress}</span>
              </S.Status>
              <S.linkSvg><MdEmail /></S.linkSvg>
            </div>
            <div>
              <S.Status>
                <p>Chat</p>
                <span>{contact.chatInfo}</span>
              </S.Status>
              <S.linkSvg><MdOutlineChatBubble /></S.linkSvg>
            </div>
          </S.InfoStatus>
        </S.InfoDiv>
      )}
    </>
  );
};

export default InfoDoContato;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/store";
import { Delete } from "../../redux/reducers/Contatos";

import * as S from "./styles";
import { Button } from "../../styles";
import { Mensagem } from "../InfoDoContato/styles";

import InfoDoContato from "../InfoDoContato";
import Img from "../../Images/FotoPerfil2.png"

interface Contato {
  Name: string;
  descricao?: string;
  telefone: string;
  Gmail: string;
}

interface ContactInfo {
  name: string;
  description: string;
  phoneNumber: string;
  emailAddress: string;
  chatInfo: string;
}

const InfosDoContato = (contato: Contato): ContactInfo => ({
  name: contato.Name,
  description: contato.descricao ?? "Descrição não disponível",
  phoneNumber: contato.telefone,
  emailAddress: contato.Gmail,
  chatInfo: contato.descricao ?? "Chat não disponível",
});


const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.Contato);
  const dispatch = useDispatch();
  const [contatoSelecionado, setContatoSelecionado] = useState<Contato | null>(null);

  const handleClick = (contato: Contato) => {
    setContatoSelecionado(contato);
  };

  return (
    <>
      <S.ContactContainer>
        <ul>
          {itens.map((contato) => (
            <S.ContactItem key={contato.telefone}>
              <S.ContactDetails>
                <S.ContactImage src={Img} alt="Ícone do Contato" />
                <div>
                  <S.P>{contato.Name}</S.P>
                  <S.Descricao>{contato.descricao ?? "Descrição não disponível"}</S.Descricao>
                </div>
                <S.P>{contato.telefone}</S.P>
                <S.Gmail>{contato.Gmail}</S.Gmail>
                <Button onClick={() => handleClick(contato)}>Ver</Button>
                <Button delete="true" onClick={() => dispatch(Delete(contato.Name))}>Deletar</Button>
              </S.ContactDetails>
            </S.ContactItem>
          ))}
        </ul>

        {contatoSelecionado ? (
          <InfoDoContato
            showInfo={true}
            contact={InfosDoContato(contatoSelecionado)}
          />
        ): (
          <Mensagem>Nenhum contato selecionado</Mensagem>
        )}
      </S.ContactContainer>
    </>
  );
};

export default ListaDeContatos;

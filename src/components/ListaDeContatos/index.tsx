import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete, editar } from "../../redux/reducers/Contatos";

import * as S from "./styles";
import { Button } from "../../styles";
import { Mensagem } from "../InfoDoContato/styles";

import InfoDoContato from "../InfoDoContato";
import Img from "../../Images/FotoPerfil2.png";
import { RootReducer } from "../../redux/store";
import Modal from "../ModalEdit";

interface Contato {
  Name: string;
  descricao?: string;
  telefone: string;
  Gmail: string;
  Chat: string;
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
  chatInfo: contato.Chat,
});

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.Contato);
  const { termo } = useSelector((state: RootReducer) => state.Filtros);
  const dispatch = useDispatch();
  const [contatoSelecionado, setContatoSelecionado] = useState<Contato | null>(
    null
  );

  const handleClick = (contato: Contato) => {
    setContatoSelecionado(contato);
  };

  const [editando, setEditando] = useState(false);
  const [descricao, setDescricao] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gmail, setGmail] = useState('');

  useEffect(() => {
    if (contatoSelecionado) {
      setDescricao(contatoSelecionado.descricao ?? '');
      setPhoneNumber(contatoSelecionado.telefone);
      setGmail(contatoSelecionado.Gmail);
    }
  }, [contatoSelecionado]);

  const Editar = () => {
    if (contatoSelecionado) {
      dispatch(
        editar({
          ...contatoSelecionado,
          telefone: phoneNumber,
          Gmail: gmail,
          descricao: descricao,
        })
      );
      setEditando(false);
    }
  };

  const contatosFiltrados = termo
    ? itens.filter((contato: any) =>
        contato.Name.toLowerCase().includes(termo.toLowerCase())
      )
    : itens;

  return (
    <>
      <S.ContactContainer>
        <ul>
          {contatosFiltrados.map((contato: any) => (
            <S.ContactItem key={contato.telefone} onClick={() => handleClick(contato)}>
              <S.ContactDetails>
                <S.ContactImage src={Img} alt="Ícone do Contato" />
                <div>
                  <S.P>{contato.Name}</S.P>
                  <S.Descricao>{contato.descricao}</S.Descricao>
                </div>
                <S.P>{contato.telefone}</S.P>
                <S.Gmail>{contato.Gmail}</S.Gmail>
                <Button onClick={() => setEditando(true)}>Editar</Button>
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
        ) : (
          <Mensagem>Nenhum contato selecionado</Mensagem>
        )}

        <Modal
          editando={editando}
          descricao={descricao}
          phoneNumber={phoneNumber}
          gmail={gmail}
          setDescricao={setDescricao}
          setPhoneNumber={setPhoneNumber}
          setGmail={setGmail}
          setEditando={setEditando}
          Editar={Editar}
        />

      </S.ContactContainer>
    </>
  );
};

export default ListaDeContatos;

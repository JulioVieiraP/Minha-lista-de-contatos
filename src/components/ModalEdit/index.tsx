import { Button } from "../../styles"
import * as S from "./styles"

type Props = {
  editando: boolean;
  descricao: string;
  phoneNumber: string;
  gmail: string;
  setDescricao: (value: string) => void;
  setPhoneNumber: (value: string) => void;
  setGmail: (value: string) => void;
  setEditando: (value: boolean) => void;
  Editar: () => void;
}

const Modal = ({editando, descricao, phoneNumber, gmail, Editar, setDescricao, setPhoneNumber, setGmail, setEditando}: Props) => {
  return(
    <>
      <S.Modal show={editando}>
          <S.ModalContent>
            <S.EditForm>
              <label>Descrição</label>
              <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
              <label>Telefone</label>
              <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              <label>Email</label>
              <input type="text" value={gmail} onChange={(e) => setGmail(e.target.value)} />
              <Button onClick={Editar}>Salvar</Button>
              <Button onClick={() => setEditando(false)}>Cancelar</Button>
            </S.EditForm>
          </S.ModalContent>
        </S.Modal>
    </>
  )
}

export default Modal

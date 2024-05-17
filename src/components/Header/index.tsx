import * as S from './styles'
import FiltroDropdpwn from "../FiltroDropdown"
import { ButtonLink } from '../../styles'

const Header = () => {
  return (
    <>
      <S.Header>
        <h1>Lista de Contatos</h1>
        <S.Div>
          <FiltroDropdpwn />
          <ButtonLink to='/NovoContato'>Novo Contato</ButtonLink>
        </S.Div>
      </S.Header>
    </>
  )
}

export default Header

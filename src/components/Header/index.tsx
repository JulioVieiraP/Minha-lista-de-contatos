import * as S from './styles'
import FiltroDropdpwn from "../FiltroDropdown"

const Header = () => {
  return (
    <>
      <S.Header>
        <h1>Lista de Contatos</h1>
        <S.Div>
          <FiltroDropdpwn />
          <S.Button to='/NovoContato'>Novo Contato</S.Button>
        </S.Div>
      </S.Header>
    </>
  )
}

export default Header

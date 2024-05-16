import { Link } from "react-router-dom"

import * as S from './styles'

const Header = () => {
  return (
    <>
      <S.Header>
        <h1>Lista de Contatos</h1>
        <div>

          <Link to='/NovoContato'>Novo Contato</Link>
        </div>
      </S.Header>
    </>
  )
}

export default Header

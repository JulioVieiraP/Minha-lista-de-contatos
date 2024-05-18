import * as S from './styles'
import { ButtonLink } from '../../styles'
import FiltroPesquisa from '../FiltroPesquisa'

type Props = {
  Voltar?: boolean
}

const Header = ({ Voltar }: Props) => {

  return (
    <>
      {Voltar ? (
        <S.Header>
          <h1>Adicionar Contato</h1>
          <S.Div>
            <ButtonLink to='/'>Voltar</ButtonLink>
          </S.Div>
        </S.Header>
      ) : (
        <S.Header>
          <h1>Lista de Contatos</h1>
          <S.Div>
            <FiltroPesquisa />
            <ButtonLink to='/NovoContato'>Novo Contato</ButtonLink>
          </S.Div>
        </S.Header>
      )}
    </>
  )
}

export default Header

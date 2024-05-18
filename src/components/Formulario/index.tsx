import { useDispatch } from "react-redux"
import { FormEvent, useState } from "react"
import { Adicionar } from "../../redux/reducers/Contatos"
import { useNavigate } from "react-router-dom"

import { Button } from "../../styles"
import * as S from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [gmail, setGmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [descricao, setDescricao] = useState('')

  const HandleSubmit = (e: FormEvent) => {
    if (name == '' || gmail == '' || telefone == '' || descricao == ''){
      alert("Insira todos os campos")
    }else{
        e.preventDefault()
      dispatch(Adicionar({
        itens: [{
          Name: name,
          Gmail: gmail,
          telefone: telefone,
          descricao:  descricao,
          Chat: ''
        }]
      }))

      navigate('/')
    }
  }

  return (
    <>
      <S.Form onSubmit={HandleSubmit}>
        <S.DivForm>
          <label htmlFor="Name">Nome completo</label>
          <S.InputForm type="text" id="Name" placeholder="  Digite o nome do usuario" value={name} onChange={(e) => setName(e.target.value)}/>
        </S.DivForm>
        <S.DivForm>
          <label htmlFor="Gmail">Gmail</label>
          <S.InputForm type="text" id="Gmail" placeholder="  Digite o Gmail do usuario" value={gmail} onChange={(e) => setGmail(e.target.value)}/>
        </S.DivForm>
        <S.DivForm>
          <label htmlFor="Numero">Numero</label>
          <S.InputForm type="text" id="Numero" placeholder="  Digite o Numero do usuario" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
        </S.DivForm>
        <S.DivForm>
          <label htmlFor="Descrição">Descrição</label>
          <S.InputForm type="text" id="Descrição" placeholder=" Digite o Descrição do usuario" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </S.DivForm>
        <span><Button confirmar = 'true' type="submit">Adicionar</Button></span>
      </S.Form>
    </>
  )
}

export default Formulario

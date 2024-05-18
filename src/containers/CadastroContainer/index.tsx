import Formulario from "../../components/Formulario"
import Header from "../../components/Header"
import Perfil from "../../components/Perfil"

const CadastroContainer = () => {
  return(
    <>
      <Perfil />
      <main>
        <Header Voltar />
        <Formulario />
      </main>
    </>
  )
}

export default CadastroContainer

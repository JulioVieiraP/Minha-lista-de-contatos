import Header from "../../components/Header"
import ListaDeContatos from "../../components/ListaDeContatos"
import Perfil from "../../components/Perfil"

const HomeContainer = () => {
  return(
    <>
      <Perfil />
      <main>
        <Header />
        <ListaDeContatos />
      </main>
    </>
  )
}

export default HomeContainer

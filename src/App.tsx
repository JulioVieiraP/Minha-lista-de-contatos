import { BrowserRouter } from 'react-router-dom'

import Home from "./Pages/Home"
import RouterView from "./Routes/RouterView"
import EstiloGlobal, { Container } from "./styles"
import Cadastrar from './Pages/Cadastrar'


function App() {

  return (
    <>
      <EstiloGlobal />
      <BrowserRouter>
        <Container>
          <RouterView Home={<Home />} NovoContato={<Cadastrar />}/>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'

import Home from "./Pages/Home"
import RouterView from "./Routes/RouterView"
import EstiloGlobal, { Container } from "./styles"


function App() {

  return (
    <>
      <EstiloGlobal />
      <BrowserRouter>
        <Container>
          <RouterView Home={<Home />} NovoContato={<h1>Ola mundo</h1>}/>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App

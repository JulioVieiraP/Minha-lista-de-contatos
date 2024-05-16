import { Routes, Route } from 'react-router-dom'
import { ReactNode } from 'react'

type Props = {
  Home: ReactNode
  NovoContato: ReactNode
}

const RouterView = ({ Home, NovoContato }: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/NovoContato" element={NovoContato} />
      </Routes>
    </>
  )
}

export default RouterView

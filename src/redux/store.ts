import { configureStore } from '@reduxjs/toolkit'
import ContatosReducer from './reducers/Contatos'
import FiltrosReducer from './reducers/Filtros'


const store = configureStore({
  reducer: {
    Contato: ContatosReducer,
    Filtros: FiltrosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

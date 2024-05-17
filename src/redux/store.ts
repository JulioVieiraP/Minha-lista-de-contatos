import { configureStore } from '@reduxjs/toolkit'
import ContatosReducer from './reducers/Contatos'


const store = configureStore({
  reducer: {
    Contato: ContatosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Contato from '../../Model/Contato';



type Contact = {
  itens: Contato[];
};

const initialState: Contact = {
  itens: [
    {
      Name: 'David John',
      telefone: '0706312495',
      Gmail: 'jonhdavid@gmail.com',
      descricao: 'Java Developer',
    },
    {
      Name: 'Julio',
      telefone: '98300766',
      Gmail: 'Julio@gmail.com',
      descricao: 'Eu',
    },

  ],
};

const Contatos = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {
    Adicionar: (state, { payload }: PayloadAction<Contact>) => {
      state.itens.push(...payload.itens);
    },
    Delete: (state, { payload }: PayloadAction<string>) => {
      state.itens = state.itens.filter((Item) => Item.Name !== payload);
    },
  },
});

export const { Adicionar, Delete } = Contatos.actions;

export default Contatos.reducer;

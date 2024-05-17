import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Contato from '../../Model/Contato';
import Icon from '../../assets/Foto_Perfil2.png';

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
      icon: Icon,
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
  },
});

export const { Adicionar } = Contatos.actions;

export default Contatos.reducer;

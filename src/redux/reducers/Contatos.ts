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
      Chat: 'nenhum chat definido pelo usuario'
    },
    {
      Name: 'João',
      telefone: '987654321',
      Gmail: 'JoâoM@gmail.com',
      descricao: 'Amigo',
      Chat: 'nenhum chat definido pelo usuario'
    },
  ],
};

const Contatos = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {
    Adicionar: (state, { payload }: PayloadAction<Contato>) => {
      const contatoExiste = state.itens.find((contato) => contato.telefone === payload.telefone);

      if(contatoExiste){
        alert('Contato ja existente')
      }else{
        state.itens.push(payload)
      }
    },
    Delete: (state, { payload }: PayloadAction<string>) => {
      state.itens = state.itens.filter((Item) => Item.Name !== payload);
    },
    editar: (state, { payload }: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (item) => item.Name === payload.Name
      );

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = payload;
      }
    },
  },
});

export const { Adicionar, Delete, editar } = Contatos.actions;

export default Contatos.reducer;

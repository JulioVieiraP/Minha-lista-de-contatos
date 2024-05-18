import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Props = {
  termo: string
}

const initialState: Props = {
  termo: ''
}

const Filtros = createSlice({
  name: 'Filtros',
  initialState,
  reducers: {
    alteraTermoFiltro: (state, { payload }: PayloadAction<Props>) => {
      state.termo = payload.termo
    }
  }
});

export const {alteraTermoFiltro} = Filtros.actions

export default Filtros.reducer

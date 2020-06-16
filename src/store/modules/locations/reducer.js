import produce from 'immer';

import { LocationsActions } from './actions';

export const INITIAL_STATE = {
  dados: null,
  listaLocais: null,
};

export default function locations(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case LocationsActions.ADD_LISTA: {
        draft.dados = action.payload.locais;
        draft.listaLocais = action.payload.listaSelect;
        break;
      }
      default:
    }
  });
}

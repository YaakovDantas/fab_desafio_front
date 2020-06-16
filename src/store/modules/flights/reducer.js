import produce from 'immer';

import { FlightActions } from './actions';

export const INITIAL_STATE = {
  dados: null,
};

export default function flights(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case FlightActions.ADD_LISTA: {
        draft.dados = action.payload.voos;
        break;
      }
      default:
    }
  });
}

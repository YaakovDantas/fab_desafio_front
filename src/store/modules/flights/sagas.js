import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FlightActions, setVoos } from './actions';
import api from '../../../services/api';
import history from '../../../services/history';
import { addToast } from '../toast/actions';

export function* buscarVoos() {
  const resposta = yield call(api, 'get', 'flights');

  const { data, status } = resposta;
  yield put(setVoos(data.flights));
}

export function* criarVoo({ payload }) {
  const { data, origem_id, destino_id } = payload;
  const resposta = yield call(api, 'post', 'flights', {
    data,
    origem_id,
    destino_id,
  });

  const { status } = resposta;
  switch (status) {
    case 200:
      history.push('/');
      yield put(
        addToast({
          titulo: 'Voo cadastrado com sucesso',
          tipo: 'success',
          duracao: 3000,
        })
      );
      break;

    case 422:
      yield put(
        addToast({
          titulo: resposta.data.message,
          tipo: 'warning',
          duracao: 3000,
        })
      );
      break;

    default:
      yield put(
        addToast({
          titulo: 'Aconteceu algum problema no servidor.',
          texto: 'Tente novamente mais tarde',
          tipo: 'danger',
          duracao: 3000,
        })
      );
      break;
  }
}

export default all([
  takeLatest(FlightActions.BUSCAR_VOOS, buscarVoos),
  takeLatest(FlightActions.CRIAR_VOO, criarVoo),
]);

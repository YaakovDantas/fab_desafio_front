import { all, call, put, takeLatest } from 'redux-saga/effects';
import { LocationsActions, setLocais } from './actions';
import api from '../../../services/api';
import history from '../../../services/history';
import { addToast } from '../toast/actions';

export function* buscarLocais() {
  const resposta = yield call(api, 'get', 'locations');

  const { data, status } = resposta;

  let lista = [];
  data.locations.forEach(item => {
    lista.push({
      label: `Pais: ${item.pais.toUpperCase()}, Estado:  ${item.estado.toUpperCase()}, Cidade: ${item.cidade.toUpperCase()}`,
      value: item.id,
    });
  });

  yield put(setLocais(data.locations, lista));
}

export function* criarLocal({ payload }) {
  const { cep, pais, estado, cidade } = payload;
  const resposta = yield call(api, 'post', 'locations', {
    cep,
    pais,
    estado,
    cidade,
  });

  const { status } = resposta;
  switch (status) {
    case 200:
      history.push('/locations');
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
      break;
  }
}

export default all([
  takeLatest(LocationsActions.BUSCAR_LOCAIS, buscarLocais),
  takeLatest(LocationsActions.CRIAR_LOCAIS, criarLocal),
]);

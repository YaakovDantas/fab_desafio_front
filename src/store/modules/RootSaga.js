import { all } from 'redux-saga/effects';

import flights from './flights/sagas';
import locations from './locations/sagas';

export default function* rootSaga() {
  return yield all([flights, locations]);
}

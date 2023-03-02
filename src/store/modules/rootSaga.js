import { all } from 'redux-saga/effects';

import reserve from './reserve/sagas';
// aceitar mais modulos
export default function* rootSaga() {
  return yield all([reserve]);
}

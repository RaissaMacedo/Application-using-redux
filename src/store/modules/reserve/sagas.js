import { call, select, put, all, takeLatest } from 'redux-saga/effects'; // middleware
import {
  addReserveSuccess,
  updateAmountRequest,
  updateAmountSuccess,
} from './actions';
import api from '../../../services/api';
import history from '../../../services/history';
//generate
//yield igual o  await
function* addToReserve({ id }) {
  const tripExists = yield select((state) =>
    state.reserve.find((trip) => trip.id === id),
  );
  const myStock = yield call(api.get, `/stock/${id}`);

  const stockAmount = myStock.data.amount;

  const currentStock = tripExists ? tripExists.amount : 0;

  const amount = currentStock + 1;

  if (amount > stockAmount) {
    alert('Quantidade máxima atingida!');
    return;
  }

  if (tripExists) {
    yield put(updateAmountRequest(id, amount));
  } else {
    // fazendo a requisição
    const response = yield call(api.get, `trips/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };

    // disparando essa action e passando para o reducer
    yield put(addReserveSuccess(data));

    history.push('/reservas');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;
  const myStock = yield call(api.get, `stock/${id}`);

  const stockAmount = myStock.data.amount;

  if (amount > stockAmount) {
    alert('Quantidade máxima atingida');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}
// se cliclar 2 vezes e ainda não tiver terminando a primeira requisição
// ele só vai pegar a ultima requsição
export default all([
  takeLatest('ADD_RESERVE_REQUEST', addToReserve),
  takeLatest('UPDATE_RESERVE_REQUEST', updateAmount),
]);

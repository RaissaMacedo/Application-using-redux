import { combineReducers } from 'redux';

import reserve from './reserve/reducer';
// carregar mais de um module
export default combineReducers({
  reserve,
});

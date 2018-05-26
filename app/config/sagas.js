import { takeEvery } from 'redux-saga/effects';

// Make Remote Requests When:
// 1. Upon initial app load
// 2. Upon changing the base currency country
// 3. Upon swapping currencies
// ?? 4. Upon changing the quote currency country

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION } from '../actions/currencies';

// function* is a generator fxn.
function* fetchLatestConversionRates(action) {
  console.log('TODO: Update the stuff', action);
  yield;
}

export default function* rootSaga() {
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
}

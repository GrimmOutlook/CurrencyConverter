import { takeEvery, select, call, put } from 'redux-saga/effects';

// Make Remote Requests When:
// 1. Upon initial app load
// 2. Upon changing the base currency country
// 3. Upon swapping currencies
// ?? 4. Upon changing the quote currency country

import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies';

// const YOUR_ACCESS_KEY = '79a2cbe63320075f2ea5b4109ab7104e';

const getLatestRate = currency =>
  // fetch(`https://data.fixer.io/api/latest?access_key=${YOUR_ACCESS_KEY}?base=${currency}`);
  fetch(`https://fixer.handlebarlabs.com/latest?base=${currency}`);

// function* is a generator fxn.
function* fetchLatestConversionRates(action) {
  // with Redux Saga, you have access to the entire redux state
  try {
    let currency = action.currency;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
    console.log('currency boiiiii: ', currency);
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message });
  }
}

export default function* rootSaga() {
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
}

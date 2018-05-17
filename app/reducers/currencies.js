import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT } from './currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWAP_CURRENCY:
      return {
        ...state,
        amount: action.amount || 0,
      };
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      };
    default:
      return state;
  }
};

export default reducer;

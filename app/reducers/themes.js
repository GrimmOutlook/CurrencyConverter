import { CHANGE_PRIMARY_COLOR } from '../actions/themes';

const initialState = {
  primaryColor: '$primary-blue',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.color,
      };
    default:
      return state;
  }
};

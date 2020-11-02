import actions from '../actions';
import constants from '../constants';

const initial = {
  status: constants.DEFAULT_REQUEST_STATUS,
};

const requestStatusReducer = (state = initial, action) => {
  switch (action.type) {
    case actions.REQUEST_STATUS:
      return { ...state, status: action.value };
    default:
      return state;
  }
};

export default requestStatusReducer;

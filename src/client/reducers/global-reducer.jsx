import actions from '../actions';

const initial = {
  language: 'en',
};

const global = (state = initial, action) => {
  switch (action.type) {
    case actions.CHANGE_LANGUAGE:
      return { ...state, language: action.value };
    default:
      return state;
  }
};

export default global;

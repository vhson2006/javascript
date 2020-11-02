import actions from '../actions';

const initial = {
  name: '',
  email: '',
  phone: '',
  address: '',
  checkIn: '',
  checkOut: '',
  ipAddress: '',
  latitude: '',
  longitude: '',
  fixDevice: '',
  joinDate: '',
  dueDate: '',
};

const account = (state = initial, action) => {
  switch (action.type) {
    case actions.GET_ACCOUNT:
    case actions.UPDATE_ACCOUNT:
      return {
        ...state,
        name: action.value.name,
        email: action.value.email,
        phone: action.value.phone,
        address: action.value.address,
        checkIn: action.value.checkIn,
        checkOut: action.value.checkOut,
        ipAddress: action.value.ipAddress,
        latitude: action.value.latitude,
        longitude: action.value.longitude,
        fixDevice: action.value.fixDevice,
        joinDate: action.value.joinDate,
        dueDate: action.value.dueDate,
      };
    default:
      return state;
  }
};

export default account;

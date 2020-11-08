import Cookies from 'js-cookie';
import { getDetailAccountQuery, updateAccountMutation } from '../queries';

export const getDetailAccount = async () => {
  try {
    const token = await Cookies.get('token');
    const csrfToken = await Cookies.get('XSRF-TOKEN');
    const response = await fetch(`${process.env.URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'CSRF-Token': csrfToken,
      },
      body: JSON.stringify({ query: getDetailAccountQuery }),
    });
    const data = await response.json();

    return data.data;
  } catch (e) {
    Cookies.remove('token');
    return {};
  }
};

export const updateAccount = async (params) => {
  try {
    const token = await Cookies.get('token');
    const csrfToken = await Cookies.get('XSRF-TOKEN');
    const response = await fetch(`${process.env.URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'CSRF-Token': csrfToken,
      },
      body: JSON.stringify({
        query: updateAccountMutation
          .replace('%fullname', params.value.fullname)
          .replace('%email', params.value.email)
          .replace('%address', params.value.address)
          .replace('%phone', params.value.phone)
          .replace('%checkIn', params.value.checkIn)
          .replace('%checkOut', params.value.checkOut)
          .replace('%ipAddress', params.value.ipAddress)
          .replace('%latitude', params.value.latitude)
          .replace('%longitude', params.value.longitude)
          .replace('%fixDevice', params.value.fixDevice),
      }),
    });
    const data = await response.json();

    return data.data;
  } catch (e) {
    Cookies.remove('token');
    return {};
  }
};

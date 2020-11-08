import Cookies from 'js-cookie';
import { authenticateQuery, registerMutation } from '../queries';

export const authenticate = async (params) => {
  try {
    const csrfToken = await Cookies.get('XSRF-TOKEN');
    const response = await fetch(`${process.env.URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'No Auth',
        'CSRF-Token': csrfToken,
      },
      body: JSON.stringify({ query: authenticateQuery.replace('%username', params.username).replace('%password', params.password) }),
    });
    const data = await response.json();

    return data.data;
  } catch (e) {
    Cookies.remove('token');
    return {};
  }
};

export const register = async (params) => {
  try {
    const csrfToken = await Cookies.get('XSRF-TOKEN');
    const response = await fetch(`${process.env.URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'No Auth',
        'CSRF-Token': csrfToken,
      },
      body: JSON.stringify({
        query: registerMutation
          .replace('%fullname', params.fullname)
          .replace('%email', params.email)
          .replace('%password', params.password)
          .replace('%phone', params.phone)
          .replace('%address', params.address),
      }),
    });
    const data = await response.json();

    return data.data;
  } catch (e) {
    Cookies.remove('token');
    return {};
  }
};

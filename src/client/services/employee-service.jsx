import Cookies from 'js-cookie';
import { getEmployeesQuery } from '../queries';

export const getEmployees = async () => {
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
      body: JSON.stringify({ query: getEmployeesQuery }),
    });
    const data = await response.json();

    return data.data;
  } catch (e) {
    Cookies.remove('token');
    return {};
  }
};

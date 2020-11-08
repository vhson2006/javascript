import Cookies from 'js-cookie';
import { getDashboardQuery } from '../queries';

export const getDashboard = async (type) => {
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
      body: JSON.stringify({ query: getDashboardQuery.replace('%type', type) }),
    });
    const data = await response.json();

    return data.data;
  } catch (e) {
    Cookies.remove('token');
    return {};
  }
};

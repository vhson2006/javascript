import { profile } from './profile-action';
import { home } from './home-action';
import { dashboard } from './dashboard-action';

const actions = {
  REQUEST_STATUS: 'REQUEST_STATUS', ...home, ...profile, ...dashboard,
};

export default actions;

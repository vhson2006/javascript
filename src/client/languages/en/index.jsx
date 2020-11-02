import { dashboard } from './dashboard-language';
import { home } from './home-language';
import { menu } from './menu-language';
import { profile } from './profile-language';
import { employee } from './employee-language';

const languages = {
  ...dashboard, ...home, ...menu, ...profile, ...employee,
};

export default languages;

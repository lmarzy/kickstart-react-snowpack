import { HomePage, AboutPage } from '../components/views';

export const HOME = {
  key: 'home',
  component: HomePage,
  path: '/',
};

export const ABOUT = {
  key: 'about',
  component: AboutPage,
  path: '/about',
};

export default [HOME, ABOUT];

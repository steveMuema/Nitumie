// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  LandingPage,
  TestPage,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'home',
      name: 'Landing page',
      component: LandingPage,
      isIndex: true,
    },
    { path: 'test-page', name: 'Test page', component: TestPage },
    { path: '/home', name: 'Landing page', component: LandingPage },
  ],
};

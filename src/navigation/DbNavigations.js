import SignIn from '../views/auth/SignIn';
import SignupChoice from '../views/auth/SignupChoice';
import Home from '../views/home';
import LookUser from '../views/home/LookUser';

export const DataStack = [
  {
    name: 'SignupChoice',
    component: SignupChoice,
  },

  {
    name: 'SignIn',
    component: SignIn,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'LookUser',
    component: LookUser,
  },
];

import AddPosting from '../views/addPosting';

import SignIn from '../views/auth/SignIn';
import SignupChoice from '../views/auth/SignupChoice';
import Home from '../views/home';
import LookUser from '../views/home/LookUser';
import StatusFolowers from '../views/home/StatusFolowers';
import Profile from '../views/profile';
import Search from '../views/search';
import Streaming from '../views/streaming';
import TabNav from './TabNav';

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
    name: 'LookUser',
    component: LookUser,
  },
  {
    name: 'StatusFolowers',
    component: StatusFolowers,
  },
  {
    name: 'TabNav',
    component: TabNav,
  },
];

export const DataTab = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Search',
    component: Search,
  },
  {
    name: 'AddPosting',
    component: AddPosting,
  },
  {
    name: 'Streaming',
    component: Streaming,
  },
  {
    name: 'Profile',
    component: Profile,
  },
];

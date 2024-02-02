import { createBrowserRouter } from 'react-router-dom';
import { globalRoutes } from './global.routes';
import Login from '../paginas/Login/Login';
import SignUp from '../paginas/SignUp/SignUp';

const openRoutes = [
  ...globalRoutes,
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
];

export const openRouter = createBrowserRouter(openRoutes);

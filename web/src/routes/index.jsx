import { createBrowserRouter } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import { globalRouter, globalRoutes } from './global.routes';
import { openRouter } from './open.routes';
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';

export function Router() {
  const { signed } = useContext(AuthContext);
  const context = useContext(AuthContext);
  console.log(context);

  if (signed) {
    return <RouterProvider router={globalRouter} />;
  } else {
    return <RouterProvider router={openRouter} />;
  }
}

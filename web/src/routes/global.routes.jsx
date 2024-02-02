import { createBrowserRouter } from 'react-router-dom';
import Home from '../paginas/Home/Home';
import StartScreen from '../paginas/StartScreen/StartScreen';
import DetalhesEvento, { loader as eventLoader } from '../paginas/DetalhesEvento/DetalhesEvento';

export const globalRoutes = [
  {
    path: '/',
    element: <StartScreen />
  },
  {
    path: '/home',
    element: <Home />
  },

  {
    path: '/events',
    children: [
      {
        path: ':id',
        element: <DetalhesEvento />,
        loader: eventLoader
      }
    ]
  }
];

export const globalRouter = createBrowserRouter(globalRoutes);

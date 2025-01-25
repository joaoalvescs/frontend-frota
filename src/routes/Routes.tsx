import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

import Error404 from '../pages/error404'
import Carro from '../pages/carro'
import Moto from '../pages/moto'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: '/carro',
    element: <Carro />,
  },
  {
    path: '/moto',
    element: <Moto />,
  },
])

import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

import Dashboard from '../pages/dashboard'
import Error404 from '../pages/error404'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])

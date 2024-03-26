import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Provider } from 'react-redux'
import store from './redux/store.tsx'

import './main.css'

// Other Pages
import Page404 from './pages/404.tsx'

// Pages
import Page from './pages/Page/Page.tsx'
import Home from './pages/Home.tsx'
import FileViewer from './components/FileViewer/main.tsx'

const router = createBrowserRouter([
  {
    path: '*',
    element: <Page404></Page404>
  },
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/:id',
    element: <Page></Page>,
    children: [
      {
        path: '',
        element: <FileViewer></FileViewer>
      },
      {
        path: ':path',
        element: <FileViewer></FileViewer>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
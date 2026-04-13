import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { ResourceDirectoryLoader, AdminLoader } from './router/loaders';

import App from './App.jsx';
import ResourceDirectoryPage from './pages/ResourceDirectoryPage';
import AdminPage from './pages/AdminPage';

import './index.css';

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: App,
      children: [
        {
          index: true,
          Component: ResourceDirectoryPage,
          loader: ResourceDirectoryLoader,
        },
        {
          path: "admin",
          Component: AdminPage,
          loader: AdminLoader
        },
        {
          path: "admin/:resourceId",
          Component: AdminPage,
          loader: AdminLoader
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

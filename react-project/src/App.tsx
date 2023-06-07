import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Joke } from './joke/joke';
import { AlbumVoting } from './album-voting/AlbumVoting';
import { UserContextProvider } from './current-user/UserContextProvider';
import { UserInfoPane } from './current-user/user-info-pane';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Layout } from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'joke',
        element: <Joke />
      },
      {
        path: 'voting',
        element: <AlbumVoting />
      }
    ]
  }
])

function App() {
  return (<UserContextProvider>
    <RouterProvider router={router} />
  </UserContextProvider>);
}

export default App;

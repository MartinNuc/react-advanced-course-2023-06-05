import './App.css';
import { Joke } from './joke/joke';
import { AlbumVoting } from './album-voting/AlbumVoting';
import { UserContextProvider } from './current-user/UserContextProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { JokeCategories } from './joke/joke-categories';
import { ThrowPage } from './throw-page/throw-page';
import { GlobalErrorBoundary } from './error-boundary/global-error-boundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'joke',
        children: [
          {
            path: 'random',
            element: <Joke />
          },
          {
            path: 'categories',
            element: <JokeCategories />
          },
          {
            path: 'categories/:category',
            element: <Joke />
          }
        ]
      },
      {
        path: 'voting',
        element: <AlbumVoting />
      },
      {
        path: 'error',
        element: <GlobalErrorBoundary><ThrowPage /></GlobalErrorBoundary>
      }
    ]
  }
])

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;

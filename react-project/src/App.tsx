import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Joke } from './joke/joke';
import { AlbumVoting } from './album-voting/AlbumVoting';
import { UserContextProvider } from './current-user/UserContextProvider';
import { UserInfoPane } from './current-user/user-info-pane';

function App() {
  return (<UserContextProvider>
    <UserInfoPane />
    <Joke />
    <AlbumVoting />
  </UserContextProvider>);
}

export default App;

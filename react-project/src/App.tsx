import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Joke } from './joke/joke';
import { AlbumVoting } from './album-voting/AlbumVoting';

function App() {
  return (<>
    <Joke />
    <AlbumVoting />
  </>);
}

export default App;

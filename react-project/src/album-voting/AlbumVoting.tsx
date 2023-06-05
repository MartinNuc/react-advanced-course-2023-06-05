import { useCallback, useEffect, useState } from "react";
import { AlbumItem } from "./AlbumItem";
import React from "react";

export type Album = {
  id: number;
  title: string;
  rating: number;
}

export const AlbumVoting = React.memo(function AlbumVoting() {
  const [albums, setAlbums] = useState(new Array(15).fill({
    id: 0,
    title: '',
    rating: 0
  }).map((album, index) => ({ ...album, id: index })));

  const handleChange = useCallback(function (updatedAlbum: Album) {
    setAlbums(albums => albums.map(album => 
      album.id === updatedAlbum.id ? updatedAlbum : album
    ));
  }, []);

  return <div>
    {albums.map(album => 
      <AlbumItem key={album.id} album={album} onChange={handleChange} />
    )}
  </div>
});

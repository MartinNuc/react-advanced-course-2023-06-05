import React from "react";
import { Album } from "./AlbumVoting";

type Props = {
  album: Album,
  onChange: (updated: Album) => void
}

export const AlbumItem = React.memo(function AlbumItem({ album, onChange }: Props) {

  function handleChange(change: Partial<Album>) {
    onChange({
      ...album,
      ...change
    });
  }

  return <p>
    Title:
    <input value={album.title}
      onChange={(e) => handleChange({ title: e.target.value })}
    />

    Rating
    <input type='number'
      value={album.rating}
      onChange={(e) => handleChange({ rating: Number(e.target.value) })}
    />
  </p>
});
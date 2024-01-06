import React from "react";
import data from "./data.json";
import Album from "./Album";

export const App = () => {
  const arrayOfAlbums = data.albums.items;

  return (
    <>
      <div className="header-container">
        <h3 className="Header">New albums & singles</h3>
      </div>
      <div className="albums">
        {arrayOfAlbums.map((artist) => {
          return (
            <>
              <Album
                data={artist}
                image={artist.images[1].url}
                trackName={artist.name}
                artistName={artist.artists.map((artist) => artist.name)}
                albumHref={artist.external_urls.spotify}
                artistHref={artist.artists.map(
                  (item) => item.external_urls.spotify
                )}
                key={artist.id}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

// {album.artists.map((item) => <a>{item.name}</a>)}

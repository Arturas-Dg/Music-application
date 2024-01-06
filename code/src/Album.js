import React from "react";
// import Cover from "Cover";
// import Artist from "./assets/Artist";

import { ReactComponent as PlayButton } from "./assets/icons/play.svg";
import { ReactComponent as MoreInfo } from "./assets/icons/dots.svg";
import { ReactComponent as LikeSong } from "./assets/icons/heart.svg";

const Album = ({
  image,
  trackName,
  artistName,
  albumHref,
  artistHref,
  data,
}) => {
  return (
    <>
      {}
      <div className="music-album" key={data.id}>
        <div className="cover-container">
          <a href={albumHref} target="_blank" rel="noreferrer">
            <img src={image} key={data.id} className="album-cover" />
          </a>
          <PlayButton className="play-button" />
          <MoreInfo className="dots" />
          <LikeSong className="heart" />
        </div>
        <div>
          <div className="TrackName">{trackName}</div>
          <a
            href={artistHref}
            className="artist-name-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="ArtistName">{artistName}</h3>
          </a>
        </div>
      </div>
    </>
  );
};

export default Album;

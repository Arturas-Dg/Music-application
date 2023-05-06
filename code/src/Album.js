import React from "react";
// import Cover from "Cover";

import { ReactComponent as PlayButton } from "./assets/icons/play.svg";
import { ReactComponent as MoreInfo } from "./assets/icons/dots.svg";
import { ReactComponent as LikeSong } from "./assets/icons/heart.svg";

const Album = ({ image, trackName, artistName, data }) => {
  return (
    <>
      {console.log(artistName)}
      <div className="music-album" key={data.id}>
        <div className="cover-container">
          <img src={image} key={data.id} className="album-cover" />
          <PlayButton className="play-button" />
          <MoreInfo className="dots" />
          <LikeSong className="heart" />
          <div className="TrackName">{trackName}</div>
          <div className="ArtistName">{artistName}</div>
        </div>
      </div>
    </>
  );
};

export default Album;

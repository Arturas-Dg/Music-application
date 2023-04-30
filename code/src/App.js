import React from 'react';
import data from './data.json';
import Album from './Album'

import { ReactComponent as PlayButton } from './assets/icons/play.svg';
import { ReactComponent as MoreInfo } from './assets/icons/dots.svg';
import { ReactComponent as LikeSong } from './assets/icons/heart.svg';


export const App = () => {
  return (
      <Album
      musicData={data}
      playButton={PlayButton}
      moreInfo={MoreInfo}
      likeSong={LikeSong}
      
      />
    );
};

import React from 'react';
import data from './data.json';
import Album from './Album'

import { ReactComponent as PlayButton } from './assets/icons/play.svg';

export const App = () => {
  return (
      <Album
      musicData={data}
      playButton={PlayButton}
      />
    );
};

import React from 'react';
import data from './data.json';

import Album from './Album';
import button from './PlayButtonSvg';


export const App = () => {
  return (
      <Album 
      musicData={data}
      playButton={button}
       />
      
          );
}
 
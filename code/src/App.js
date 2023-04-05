import React from 'react';
import data from './data.json';

import Album from './Album';

export const App = () => {
  return (
      <Album musicData ={data}/>
  );
}

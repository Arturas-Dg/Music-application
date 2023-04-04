import React from 'react';
import data from './data.json';

import Album from './Album';

export const App = () => {
  return (
    <div>
      <Album musicData ={data}/>
    </div>
  );
}

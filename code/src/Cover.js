import React from "react";
const Cover = ({ image }) => (
  <>
    <img src={image} alt="Album cover" className="album-cover" />
    {console.log({ image })}
  </>
);

export default Cover;

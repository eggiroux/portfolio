import React from "react";

export const Icon = ({ size = "36px", src }) => {
  const style = { height: size, width: size };
  return <img src={src} style={style} />;
};

import React from "react";

import { ImageProps } from "../../types";

const Thumbnail = (props: ImageProps) => {
  const { src, alt } = props;

  return <img src={src} alt={alt} />;
};

export default Thumbnail;

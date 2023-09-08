import React, { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {}

const Text = (props: TextProps) => {
  const {} = props;
  return <p></p>;
};

export default Text;

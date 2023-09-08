import { InputHTMLAttributes } from "react";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {}

const Radio = (props: RadioProps) => {
  return (
    <div>
      <span>radio icon</span>
      <input type="radio" {...props} />
    </div>
  );
};

export default Radio;

import { InputHTMLAttributes } from 'react';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {}

const Radio = (props: RadioProps) => {
  return (
    <div>
      <input type="radio" {...props} />
    </div>
  );
};

export default Radio;

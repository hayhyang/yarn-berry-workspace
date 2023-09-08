import { LabelHTMLAttributes } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = (props: LabelProps) => {
  return <label {...props}></label>;
};

export default Label;

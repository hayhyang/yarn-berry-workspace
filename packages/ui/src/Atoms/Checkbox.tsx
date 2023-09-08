import React, { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = (props: CheckboxProps) => {
  return (
    <div>
      <input type="checkbox" {...props} />
    </div>
  );
};

export default Checkbox;

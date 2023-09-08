import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

type Option = {
  label: string;
  key: string;
};

const Select = ({ options }: SelectProps) => {
  return (
    <select>
      {options.map(({ key, label }) => (
        <option id={key}>{label}</option>
      ))}
    </select>
  );
};

export default Select;

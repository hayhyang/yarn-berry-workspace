interface Option {
  label: string;
  value: string | number | boolean;
  handler: (value: string | number | boolean) => null;
}

interface DropdownProps {
  value: string;
  options: Option[];
}

const Dropdown = (props: DropdownProps) => {
  const { value, options } = props;
  return (
    <div>
      <div>{value}</div>
      <ul>
        {options.map((option) => (
          <Option {...option} />
        ))}
      </ul>
    </div>
  );
};

const Option = ({ handler, label, value }: any) => {
  return <li onClick={() => handler(value)}>{label}</li>;
};

export default Dropdown;

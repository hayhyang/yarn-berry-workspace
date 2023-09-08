interface Option {
  label: string;
  handler: () => null;
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

const Option = ({ handler, label }: any) => {
  return <li onClick={handler}>{label}</li>;
};

export default Dropdown;

interface BadgeProps {
  label: string;
}

const Badge = (props: BadgeProps) => {
  const { label } = props;
  return <span>{label}</span>;
};

export default Badge;

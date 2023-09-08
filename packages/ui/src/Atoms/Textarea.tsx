import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = (props: TextareaProps) => {
  const { value } = props;
  return <textarea>{value}</textarea>;
};

export default Textarea;

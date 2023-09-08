import { InputHTMLAttributes } from "react";

interface FileProps extends InputHTMLAttributes<HTMLInputElement> {}

const File = (props: FileProps) => {
  return (
    <div>
      <input type="file" {...props} />
    </div>
  );
};

export default File;

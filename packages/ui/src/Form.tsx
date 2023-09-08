import { FormHTMLAttributes } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

const Form = (props: FormProps) => {
  return <form {...props}>{props.children}</form>;
};

export default Form;

interface ToastProps {
  message: string;
  variant: string; // default, primary, warning, danger
}

const Toast = ({ message, variant }: ToastProps) => {
  return <div>{message}</div>;
};

export default Toast;

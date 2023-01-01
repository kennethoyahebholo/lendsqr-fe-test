import { useToast } from 'react-toastify';

const useToasts = () => {
  const { playToast } = useToast();

  const error = (message) => {
    playToast(message, { appearance: 'error', autoDismiss: true });
  };

  const success = (message) => {
    playToast(message, { appearance: 'success', autoDismiss: true });
  };

  return { error, success, playToast };
};

export default useToasts;

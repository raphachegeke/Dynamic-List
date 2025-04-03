import { useEffect } from 'react';
import './ToastNotification.css';

function ToastNotification({ message, duration = 5000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="toast-notification">
      {message}
    </div>
  );
}

export default ToastNotification;

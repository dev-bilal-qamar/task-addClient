import { useState } from "react";

type ToastProps = {
  id?: string;
  title: string;
  description?: string;
  type?: "default" | "success" | "error" | "warning";
  duration?: number;
};

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = (props: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...props, id };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    if (props.duration !== Number.POSITIVE_INFINITY) {
      setTimeout(() => {
        setToasts((prevToasts) =>
          prevToasts.filter((toast) => toast.id !== id)
        );
      }, props.duration || 3000);
    }

    return id;
  };

  const dismiss = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return { toast, dismiss, toasts };
};

import { useToast } from "../../hooks/use-toast";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-4 w-full max-w-sm">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "p-4 rounded-md shadow-lg flex items-start justify-between",
            "transform transition-all duration-300 ease-in-out",
            "bg-white border",
            toast.type === "success" && "border-green-500",
            toast.type === "error" && "border-red-500",
            toast.type === "warning" && "border-yellow-500"
          )}
        >
          <div>
            <h3 className="font-medium">{toast.title}</h3>
            {toast.description && (
              <p className="text-sm text-gray-500 mt-1">{toast.description}</p>
            )}
          </div>
          <button
            onClick={() => dismiss(toast?.id ?? "")}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

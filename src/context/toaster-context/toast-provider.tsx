import { useState, type ReactNode } from "react";
import ToastManager, { type ToastItem } from "../../components/CustomTost";
import { ToastContext } from "./toster";



const ToastProvider = ({ children }: { children: ReactNode }) => {

    const [toasts, setToasts] = useState<ToastItem[]>([]);

    // Function to add a brand new toast
    const addToast = (message: string, type: ToastItem['type'] = 'info') => {
        const id = crypto.randomUUID(); // Unique tracker id

        setToasts((prev) => [...prev, { id, message, type }]);

        // Self destruct toast item after 4 seconds
        setTimeout(() => {
            removeToast(id);
        }, 4000);
    };

    // Function to filter out closed/expired toasts
    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{
            addToast
        }}>
            {children}
            <div className="p-8 space-y-4">
                {/* <h2 className="text-xl font-bold">daisyUI Custom Toast System</h2> */}

                {/* <div className="flex flex-wrap gap-2">
                    <button className="btn btn-success text-white" onClick={() => addToast('Operation successful!', 'success')}>
                        Success Toast
                    </button>
                    <button className="btn btn-error text-white" onClick={() => addToast('Something went wrong.', 'error')}>
                        Error Toast
                    </button>
                    <button className="btn btn-warning text-white" onClick={() => addToast('Warning: Check your input.', 'warning')}>
                        Warning Toast
                    </button>
                    <button className="btn btn-info text-white" onClick={() => addToast('New update available.', 'info')}>
                        Info Toast
                    </button>
                </div> */}

                {/* Put the ToastManager viewport portal at the root markup layer */}
                <ToastManager toasts={toasts} onClose={removeToast} />
            </div>
        </ToastContext.Provider>
    );
};
export default ToastProvider;
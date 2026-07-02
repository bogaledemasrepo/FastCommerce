import { createContext, useContext } from 'react';
import type { ToastContextType } from '../../constants';

export const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used within an ToastProvider");
    return context;
};




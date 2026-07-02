// Define the structure of an individual toast item
export interface ToastItem {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

interface ToastManagerProps {
  toasts: ToastItem[];
  onClose: (id: string) => void;
}

export default function ToastManager({ toasts, onClose }: ToastManagerProps) {
  if (toasts.length === 0) return null;

  return (
    // daisyUI Toast positioning container
    <div className="toast toast-end toast-bottom z-50 p-4 space-y-2">
      {toasts.map((toast) => {
        // Map types to daisyUI alert classes
        const alertClasses = {
          success: 'alert-success',
          error: 'alert-error',
          info: 'alert-info',
          warning: 'alert-warning',
        };

        return (
          <div 
            key={toast.id} 
            className={`alert ${alertClasses[toast.type]} shadow-lg flex items-center justify-between min-w-[280px] animate-fade-in`}
          >
            <div className="flex items-center gap-2 text-sm font-medium">
              {/* Contextual Icon based on type */}
              {toast.type === 'success' && <svg xmlns="http://w3.org" className="h-5 w-5 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              {toast.type === 'error' && <svg xmlns="http://w3.org" className="h-5 w-5 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              {toast.type === 'info' && <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
              {toast.type === 'warning' && <svg xmlns="http://w3.org" className="h-5 w-5 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
              
              <span>{toast.message}</span>
            </div>

            {/* Manual Dismiss Button */}
            <button 
              onClick={() => onClose(toast.id)} 
              className="btn btn-ghost btn-xs btn-circle ml-4 text-current hover:bg-black/10"
            >
              ✕
            </button>
          </div>
        );
      })}
    </div>
  );
}

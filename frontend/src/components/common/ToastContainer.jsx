import React from 'react';
import { useSelector } from 'react-redux';
import Toast from './Toast';

const ToastContainer = () => {
    const { toasts } = useSelector((state) => state.ui);

    if (toasts.length === 0) return null;

    return (
        <div className="fixed top-4 right-4 flex flex-col gap-3 z-9999 max-w-sm w-full">
            {toasts.map((toast) => (

                <Toast key={toast.id} {...toast} />
            ))}
        </div>
    );
};

export default ToastContainer;

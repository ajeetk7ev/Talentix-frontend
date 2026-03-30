import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CheckCircle, AlertCircle, Info, X, AlertTriangle } from 'lucide-react';
import { removeToast } from '../../store/slices/uiSlice';

const iconMap = {
    success: <CheckCircle className="w-5 h-5 text-emerald-500" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500" />,
    info: <Info className="w-5 h-5 text-cyan-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-500" />,
};

const bgMap = {
    success: 'border-emerald-500/20 bg-emerald-500/10 dark:bg-emerald-500/10',
    error: 'border-rose-500/20 bg-rose-500/10 dark:bg-rose-500/10',
    info: 'border-cyan-500/20 bg-cyan-500/10 dark:bg-cyan-500/10',
    warning: 'border-amber-500/20 bg-amber-500/10 dark:bg-amber-500/10',
};

const Toast = ({ id, message, type, duration }) => {
    const dispatch = useDispatch();
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(removeToast(id));
        }, duration);

        const interval = setInterval(() => {
            setProgress((prev) => Math.max(0, prev - (100 / (duration / 10))));
        }, 10);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [id, duration, dispatch]);

    const handleClose = () => {
        dispatch(removeToast(id));
    };

    return (
        <div 
            className={`
                relative flex items-center gap-3 p-4 pr-10 rounded-xl border 
                backdrop-blur-md shadow-2xl transition-all duration-300 animate-in slide-in-from-right-10
                ${bgMap[type] || bgMap.info}
            `}
        >
            <div className="shrink-0">

                {iconMap[type] || iconMap.info}
            </div>
            
            <div className="flex-1">
                <p className="text-sm font-medium text-foreground/90">
                    {message}
                </p>
            </div>

            <button 
                onClick={handleClose}
                className="absolute top-2 right-2 p-1 rounded-md opacity-50 hover:opacity-100 transition-opacity"
            >
                <X className="w-4 h-4" />
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-current opacity-20 transition-all ease-linear" style={{ width: `${progress}%` }} />
        </div>
    );
};

export default React.memo(Toast);

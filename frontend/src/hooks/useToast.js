import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addToast } from '../store/slices/uiSlice';

const useToast = () => {
    const dispatch = useDispatch();

    const toast = useCallback((message, type = 'success', duration = 3000) => {
        dispatch(addToast({ message, type, duration }));
    }, [dispatch]);

    return {
        success: (msg, dur) => toast(msg, 'success', dur),
        error: (msg, dur) => toast(msg, 'error', dur),
        info: (msg, dur) => toast(msg, 'info', dur),
        warning: (msg, dur) => toast(msg, 'warning', dur),
    };
};

export default useToast;

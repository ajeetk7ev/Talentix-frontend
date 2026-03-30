import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toasts: [],
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        addToast: (state, action) => {
            const id = Date.now();
            state.toasts.push({
                id,
                message: action.payload.message,
                type: action.payload.type || 'info', // success, error, info, warning
                duration: action.payload.duration || 3000,
            });
        },
        removeToast: (state, action) => {
            state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
        },
    },
});

export const { addToast, removeToast } = uiSlice.actions;
export default uiSlice.reducer;

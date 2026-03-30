import React from 'react';
import { Sun, Moon } from 'lucide-react';
import useTheme from '../../hooks/useTheme';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-secondary/50 border border-border hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            ) : (
                <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            )}
        </button>
    );
};

export default ThemeToggle;

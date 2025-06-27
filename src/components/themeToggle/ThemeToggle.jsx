import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = document.documentElement.getAttribute('data-theme');

        const isInitiallyDark = savedTheme
            ? savedTheme === 'dark'
            : systemPrefersDark;

        document.documentElement.setAttribute('data-theme', isInitiallyDark ? 'dark' : 'light');
        setIsDark(isInitiallyDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        setIsDark(!isDark);
    };

    return (
        <div>
            <label className="swap swap-rotate mt-1 cursor-pointer">
                <input type="checkbox" checked={isDark} onChange={toggleTheme} />

                {/* Icon */}
                <FiSun className="swap-on text-warning w-6 h-6" />

                <FiMoon className="swap-off text-primary w-6 h-6" />
            </label>
        </div>
    );
};

export default ThemeToggle;
import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const ThemeWidget = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <button
              onClick={toggleTheme}
              className="min-w-[130px] bg-black hover:bg-gray-900 text-white dark:bg-white hover:dark:bg-stone-100 dark:text-black font-bold py-2 px-4 rounded mx-4"
            >
              {darkMode ? "Dark Mode" : "Light Mode"}
            </button>
        </div>
    );
};

export default ThemeWidget;
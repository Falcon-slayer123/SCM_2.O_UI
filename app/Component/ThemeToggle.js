import { useState, useEffect } from 'react';

export default function ThemeToggle() {


    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check for previously saved theme preference
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
        applyTheme(isDarkMode);
    }, []);

    const applyTheme = (isDarkMode) => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', isDarkMode);
    };

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        applyTheme(newDarkMode);
    };
    return (
        <div className={darkMode ? 'dark' : ''}>
            

                <div className="flex items-center">
                    <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </div>
            
        </div>
        
       


    );
    
}
const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
    // <button
    //     className="ml-4 p-2 rounded-full bg-gray-800 text-white focus:outline-none"
    //     onClick={toggleDarkMode}
    // >
    //     {darkMode ? 'Dark Mode On' : 'Dark Mode Off'}
    // </button>

<label class="inline-flex items-center cursor-pointer absolute-top=0">
<input onClick={toggleDarkMode} type="checkbox" value="" class="sr-only peer">
</input>
<div class="relative w-11 h-6 bg-white-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black-300 dark:peer-focus:ring-dark-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-dark-600"></div>
<span class="ms-3 text-sm font-medium text-gray-900 dark:text-black-300">Dark Mode</span>
</label>
)

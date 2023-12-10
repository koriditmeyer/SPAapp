//* COMPONENT THAT PROVIDE DATA AND FUNCIONALITIES

//import HOOKS AND CONTEXT
import React, {useState} from "react";
import ThemeContext from "./ThemeContext";

//Structure of PROVIDER Component
const ThemeProvider = ({children}) => {             //! difference with a traditional component is that we add children
    const [darkMode, setDarkMode] = useState(true);
    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode)
        darkMode ?
         document.documentElement.classList.add("dark")
         :document.documentElement.classList.remove("dark")
    }
    return (
        <ThemeContext.Provider value={
            {darkMode,setDarkMode,toggleTheme}
        }>  
            {children}                                          
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
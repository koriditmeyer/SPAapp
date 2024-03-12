import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const SelectComponent = ({ currentValue, data, onSelectChange  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null); // Add this line

  // Toggle the dropdown open/close
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close the dropdown when an option is clicked
  const selectOption = (value,event) => { 
    event.stopPropagation(); // Prevent the click from closing immediately
    onSelectChange (value);
    setIsOpen(false);
  };

 // Close the dropdown when clicking outside of it
 useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []); // The empty dependency array ensures this effect is only run on mount and unmount


  return (
    <div ref={wrapperRef} className="relative">
      <button
        id="dropdownButton"
        onClick={toggleDropdown}
        className="text-gray-500 font-medium rounded-lg text-sm plx-1 py-2.5 text-center inline-flex items-center"
      >
        {currentValue}
        <ChevronDownIcon className="h-[20px] m-auto stroke-[2px] pl-1 inline-block" />
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded shadow min-w-[3rem] max-w-md dark:bg-gray-700"
        >
          <ul
            className=" py-1 text-sm text-gray-700 dark:text-gray-200 max-h-60 overflow-auto "
            aria-labelledby="dropdownButton"
          >
             {data.map((item, index) => (
              <li key={index}>
                <button
                  onClick={(event) => selectOption(item, event)}
                  className="block w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectComponent;

import React, { useRef } from "react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { allCategories } from "../../constants";

const Search = () => {
  const truncateLength = 12;
  const maxInputSearchResults = 5
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  // -------- Automaticaly renew search term when typing
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // -------- retreive al collection as can not filter by name in firebase
  useEffect(() => {
    setLoading(true); // Need to set again to true at it can change over time
    let response;
    response = query(collection(db, "products"));
    getDocs(response)
      .then((snapshot) => {
        if (snapshot.empty) {
          throw new Error("No results");
        }
        setSearchResults(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => {
        console.log(`${error.message} - no products found`);
      })
      .finally(() => {
        // finally
        setLoading(false);
      });
  }, [searchTerm]); // Depend on searchTerm

  // -------- filter retreived info and return first 5 elements
  let filteredSearchResults = searchResults
    .filter((item) => {
      const currentSearchTerm = searchTerm.toLowerCase();
      const title = item.title.toLowerCase();
      return (
        currentSearchTerm &&
        title.startsWith(currentSearchTerm) &&
        title !== currentSearchTerm
      );
    })
    .slice(0,maxInputSearchResults );

  // -------- Set the search params and navitage to new search page 
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate({
        pathname: "/search",
        search: `${createSearchParams({
          category: `${category}`,
          searchTerm: `${searchTerm}`,
        })}`,
      });
    } else {
      navigate({
        pathname: "/",
      });
    }
    setSearchTerm("");
    setCategory("All");
  };

  // -------- Disable the category list on clic outside 
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowAll(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  // -------- Press enter to search
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onHandleSubmit(e);
    }
  };


  return (
    <div className=" h-10 rounded-md flex grow relative">
      <span
        onClick={() => setShowAll(!showAll)}
        className="max-w-32 h-full pl-2 bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon-blue font-titleFont flex items-center justify-ccenter rounded-tl-md rounded-bl-md"
      >
        {category.slice(0, truncateLength)}
        {category.length > truncateLength && "..."}
        <ChevronDownIcon className="h-[15px] m-auto stroke-[3px] pl-2" />
      </span>
      {showAll && (
        <div ref={ref}>
          <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon-blue text-black p-2 flex-col gap-1 z-50">
            {allCategories.map((item) => (
              <li
                key={item._id}
                onClick={() => setCategory(item.title)}
                className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon-blue cursor-pointer duration-200"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* <select
        onChange={(e) => setCategory(e.target.value)}
        className="h-[100%] lg:max-w-[100px] p-2  bg-gray-300 border-r text-black  text-xs xl:text-sm rounded-l"
      >
        <option value="">All</option>
        <option>Deals</option>
        <option>Books</option>
        <option>Mobiles fggfhfghfdfg dfg dfgdsert ghh</option>
        <option>Amazon</option>
        <option>Fashion</option>
        <option>Computers</option>
        <option>Home</option>
        <option>Mobiles</option>
      </select> */}
      <div className="flex-grow">
        <input
          className="h-full w-full  text-base text-amazon-blue outline-none border-none px-2"
          type="text"
          placeholder="Search SPAapp"
          value={searchTerm}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        {/* Render search results */}
        <div className="bg-white w-fit text-black z-40 absolute">
          {loading
            ? "Loading..."
            : filteredSearchResults.map((result) => (
                <div
                  key={result.id}
                  className="flex border-b p-2"
                  onClick={() => setSearchTerm(result.title)}
                >
                  <img
                    src={result.img_small}
                    alt={result.title}
                    className="h-20 w-20 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{result.title}</h3>
                    {/* Additional product details can go here */}
                  </div>
                </div>
              ))}
        </div>
      </div>
      <span
        onClick={onHandleSubmit}
        className="w-12 h-full flex items-center justify-center bg-amazon-yellow hover:bg-[#f3a847] duration-300 text-amazon-blue cursor-pointer rounded-tr-md rounded-br-md"
      >
        <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
      </span>
    </div>
  );
};

export default Search;

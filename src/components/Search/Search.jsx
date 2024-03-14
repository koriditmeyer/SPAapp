import React, { useRef } from "react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import SearchFilterQuery from "../SearchFilter/SearchFilterLoader";
import { ItemListContainerLoader } from "..";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Search = () => {
  const truncateLengthCategory = 12;
  const truncateLengthTitle = 23;
  const maxInputSearchResults = 5;
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [EnableSearch, setEnableSearch] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  // -------- Query category data
  const { data: categoriesData, isLoading: isLoadingCategories } =
    SearchFilterQuery("category", false);

  // -------- Automaticaly renew search term when typing
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    // console.log(e.target.value);
    if (searchTerm === "" || searchTerm.length <= 3) {
      // console.log(searchTerm.length<= 3)
      // console.log("hi")
      setEnableSearch(false);
    } else {
      // console.log("hello")
      setEnableSearch(true);
    }
  };
  const searchParams = createSearchParams({
    category: `${category != "All" ? category: ""}`,
    searchTerm: `${searchTerm}`,
    limit:`${maxInputSearchResults}`
  })
  // console.log(EnableSearch)
  // console.log(searchParams.toString());
  let { data: searchResults, isLoading, isError } = ItemListContainerLoader(
    searchParams,
    false,
    EnableSearch
  );

  // console.log(searchResults)
  // -------- Set the search params and navitage to new search page
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate({
        pathname: "/search",
        search: `${searchParams}`,
      });
    } else {
      navigate({
        pathname: "/",
      });
    }
    setSearchTerm("");
    setCategory("All");
    setShowAll(false);
  };

  // -------- Press enter to search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onHandleSubmit(e);
    }
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

  return (
    <div className=" h-10 rounded-md flex grow relative bg-white">
      <span
        onClick={() => setShowAll(!showAll)}
        className="truncate h-full pl-2 bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon-blue font-titleFont flex items-center justify-ccenter rounded-tl-md rounded-bl-md"
      >
        {category.slice(0, truncateLengthCategory)}
        {category.length > truncateLengthCategory && "..."}
        <ChevronDownIcon className="h-[15px] m-auto stroke-[3px] pl-2" />
      </span>
      {showAll && (
        <div ref={ref}>
          <ul className="absolute max-w-[224px] max-h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden border-[1px] bg-white border-amazon-blue text-black p-2 flex-col gap-1 z-50">
            {categoriesData?.payload.map((item, key) => (
              <li
                key={key}
                onClick={() => {
                  setCategory(item)
                  setShowAll(false)
                }}
                className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon-blue cursor-pointer duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex-grow relative">
        <input
          className="h-full w-full  text-base text-amazon-blue outline-none border-none px-2"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        {/* Render search results */}
        <div className=" bg-slate-50   w-full text-black z-40 absolute max-h-64 overflow-hidden overflow-y-scroll cursor-pointer ">
          {!isLoading &&
            searchResults?.payload.products.map((result) => (
              <div
                key={result._id}
                className="flex border-b p-2 hover:bg-slate-100"
                onClick={() => setSearchTerm(result.title)}
              >
                <img
                  src={result.thumbnail[0]}
                  alt={result.title}
                  className="h-14 w-20 object-cover mr-4 rounded-md bg-slate-200"
                />
                <div>
                  <h3 className="font-semibold ">
                  {result.title.slice(0, truncateLengthTitle)}
        {result.title.length > truncateLengthTitle && "..."}
                  </h3>
                  {/* Additional product details can go here */}
                </div>
              </div>
            ))}
        </div>
      </div>
      {isError && (
        <button className="  flex justify-center items-center p-1" onClick={() => {setSearchTerm("")
        setEnableSearch(false)
        }}>
          <XMarkIcon className="w-4 stroke-red-600 stroke-2" />
        </button>
      )}
      {isLoading && (
        <div className="  flex justify-center items-center p-1">
          <div className="animate-spin rounded-full h-4 w-4 border-b-[1px] border-gray-900"></div>
        </div>
      )}
      <button
        onClick={onHandleSubmit}
        className="w-12 h-full flex items-center justify-center bg-amazon-yellow hover:bg-[#f3a847] duration-300 text-amazon-blue cursor-pointer rounded-tr-md rounded-br-md"
      >
        <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
      </button>
    </div>
  );
};

export default Search;

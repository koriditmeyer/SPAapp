import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query } from "firebase/firestore";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const navigate = useNavigate();


  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
    .slice(0, 10);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
        navigate({
          pathname: "/search",
          search: `${createSearchParams({
            category: `${category}`,
            searchTerm: `${searchTerm}`,
          })}`,
        });
    } else{
        navigate({
            pathname: "/"
          });
    }
    setSearchTerm("")
    setCategory("All")
  };

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazon-yellow rounded">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="h-[100%] p-2  bg-gray-300 border-r text-black  text-xs xl:text-sm rounded-l"
        >
          <option>All</option>
          <option>Deals</option>
          <option>Books</option>
          <option>Mobiles</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>

        <input
          className="flex grow items-center h-[100%]  text-black pl-2"
          type="text"
          placeholder="Search SPAapp"
          value={searchTerm}
          onChange={handleOnChange}
        />
        <button onClick={onHandleSubmit} className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {/* Render search results */}
      <div className="bg-white text-black w-full z-40 absolute">
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
  );
};

export default Search;

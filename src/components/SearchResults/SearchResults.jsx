import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query} from "firebase/firestore";
import { ItemList } from "..";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");
    document.title = `Amazon.com : ${searchTerm}`
    setLoading(true); // Need to set again to true at it can change over time
    let response;
    response = query(collection(db, "products"));
    getDocs(response)
      .then((snapshot) => {
        if (snapshot.empty) {
          throw new Error("No results");
        }
        const searchResults = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        let categoryResults;
        if (category === "All") {
          categoryResults = searchResults;
        } else {
          categoryResults = searchResults.filter(
            (item) => item.category === category
          );
        }
        if (searchTerm) {
          const results = categoryResults.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setProducts(results);
        } else {
          setProducts(categoryResults);
        }
      })
      .catch((error) => {
        console.log(`${error.message} - no products found`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <>
      <div className="border-b border-gray-200 p-2 shadow-xl">{`1-${
        products.length
      } of over 40,000 results for ${searchParams.get("searchTerm")}`}</div>
      <div className="m-auto pt-4 px-4">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          products && (
            <div className="grid grid-cols-12 gap-2">
              <div className="hidden md:inline-block md:col-span-3 bg-amazon-lightText">Filter (to be build)</div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="text-xl xl:text-3xl font-bold">Results</h2>
                <div className=" gap-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
                  <ItemList list={products} />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default SearchResults;

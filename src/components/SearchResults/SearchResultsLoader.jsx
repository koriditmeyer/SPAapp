import { db } from "../../services/config";
import { collection, getDocs, query } from "firebase/firestore";


const SearchResultsLoader = async ({ request }) => {
    // Create a URL object from the request URL
    let url = new URL(request.url);
    // Use the URLSearchParams API to parse query parameters
    const searchTerm = url.searchParams.get("searchTerm");
    const category = url.searchParams.get("category");
    let   response = query(collection(db, "products"));    
    const snapshot = await getDocs(response);
    if (snapshot.empty) {
      throw Error("We couldn't get any products");
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
      // console.log(categoryResults)
      if(categoryResults.length===0){
        throw Error("We couldn't find this category");
      }
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        if(results.length===0){
            throw Error(`We couldn't find any products  "${searchTerm}" for the category "${category}"`);
          }
        return(results);
      } else {
        return(categoryResults);
      }
      
  };
  

export default SearchResultsLoader;
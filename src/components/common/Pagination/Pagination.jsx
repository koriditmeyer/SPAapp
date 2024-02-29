import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Pagination = ({ data }) => {
  // Update URL with Page Number
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const updateSearchParams = (page) => {
    // Clone the current search parameters
    const newSearchParams = new URLSearchParams(searchParams);
    console.log(newSearchParams);
    newSearchParams.set("page", page);
    // Navigate to the new URL with updated search parameters
    navigate(`/category?${newSearchParams.toString()}`);
  };

  // sanitizing and validating input before navigating
  const [inputPage, setInputPage] = useState("");
  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    value = isNaN(value) ? "" : Math.min(data.totalPages, e.target.value);
    setInputPage(value);
    if (e.key === "Enter" && value !== "") {
      updateSearchParams(value);
    }
  };

  const maxVisiblePages = 4;
  const visiblePages = () => {
    let pages = [];
    // Show all pages if total pages <= maxVisiblePages
    if (data.totalPages <= maxVisiblePages) {
      for (let p = 1; p <= data.totalPages; p++) {
        pages.push(p);
      }
    } else {
      // Dynamic range calculation
      pages.push(1); // Always show the first page
      let startPage = Math.max(data.page - 1, 2);
      let endPage = Math.min(data.page + 1, data.totalPages - 1);

      if (data.page - 1 <= 2) {
        endPage = startPage + 2;
      } else if (data.totalPages - data.page <= 2) {
        startPage = data.totalPages - 3;
      }

      for (let p = startPage; p <= endPage; p++) {
        pages.push(p);
      }
      pages.push(data.totalPages); // Always show the last page
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {(data.page - 1) * data.limit + 1}
            </span>{" "}
            to <span className="font-medium">{data.limit * data.page}</span> of{" "}
            <span className="font-medium">{data.totalDocs}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {data.hasPrevPage && (
              <button
                onClick={() => updateSearchParams(data.page - 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            )}

            {visiblePages().map((page, index) => {
              if (page === data.page && data.totalPages > maxVisiblePages) {
                return (
                  <input
                    type="number"
                    key="input"
                    value={inputPage}
                    onChange={(e) => setInputPage(e.target.value)}
                    onKeyDown={handleInputChange}
                    className="w-12 text-center text-sm font-medium text-gray-400 bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder={data.page}
                  />
                );
              } else {
                return (
                  <button
                    key={page}
                    aria-current={page === data.page ? "page" : undefined}
                    onClick={() => updateSearchParams(page)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                      page === data.page
                        ? "bg-amazon-yellow text-white"
                        : "text-gray-700 bg-white hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                );
              }
            })}
            {data.hasNextPage && (
              <button
                onClick={() => updateSearchParams(data.page + 1)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

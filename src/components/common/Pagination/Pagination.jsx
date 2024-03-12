import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SelectComponent } from "../..";
import Skeleton from "react-loading-skeleton";

const Pagination = ({ data, isLoading }) => {
  // console.log(data);
  // Update URL with Page Number
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const updateSearchParams = (page, limit) => {
    // Clone the current search parameters
    const newSearchParams = new URLSearchParams(searchParams);
    page && newSearchParams.set("page", page);
    limit && newSearchParams.set("limit", limit);
    const pathName = window.location.pathname;
    navigate(`${pathName}?${newSearchParams.toString()}`);
  };

  // Handling input change for the select dropdown.
  const handleSelectPageChange = (e) => {
    updateSearchParams(e);
  };

  // Handling input change for the select dropdown.
  const handleSelectLimitChange = (e) => {
    updateSearchParams(1, e.key);
  };

  // Generating limit options for the select limit dropdown.
  // Define your limit options
  const possibleLimitOptions = [10, 25, 50, 100];

  const limitOptions = possibleLimitOptions.map((i) => (
    <option key={i} value={i} selected={i === data?.limit}>
      {i}
    </option>
  ));

  // Generating page options for the select pages dropdown.
  const pageOptions = [];
  for (let i = 1; i <= data?.totalPages; i++) {
    pageOptions.push(i);
  }

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
      <div className="hidden sm:flex sm:flex-1  sm:items-center sm:justify-between">
        <div className="flex items-center">
          <p className="text-sm text-gray-700 pr-1">Items per Page</p>
          {isLoading ? (
            <Skeleton className="w-8" />
          ) : (
            <SelectComponent
              currentValue={data?.limit}
              data={limitOptions}
              onSelectChange={handleSelectLimitChange}
            />
          )}
        </div>
        <div className="flex items-center">
          <p className="text-sm text-gray-700 inline-flex gap-1">
            Showing{" "}
            <span className="font-medium">
              {isLoading ? (
                <Skeleton className="w-4" />
              ) : (
                (data?.page - 1) * data?.limit + 1
              )}
            </span>{" "}
            -{" "}
            <span className="font-medium">
              {isLoading ? (
                <Skeleton className="w-4" />
              ) : (
                Math.min(data?.limit * data?.page, data?.totalDocs)
              )}
            </span>{" "}
            of{" "}
            <span className="font-medium">
              {isLoading ? <Skeleton className="w-4" /> : data?.totalDocs}
            </span>{" "}
            results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px "
            aria-label="Pagination"
          >
            <div className="flex items-center   ">
              {isLoading ? (
                <Skeleton className="w-8" />
              ) : (
                <SelectComponent
                  currentValue={data?.page}
                  data={pageOptions}
                  onSelectChange={handleSelectPageChange}
                />
              )}
              <p className="px-2 text-sm text-gray-700 inline-flex gap-1">
                of{" "}
                <span className="font-medium">
                  {isLoading ? <Skeleton className="w-4" /> : data?.totalPages}
                </span>{" "}
                pages
              </p>
            </div>
            <button
              onClick={() => updateSearchParams(data?.page - 1)}
              className="cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2
                 text-gray-400 ring-1 ring-inset ring-gray-300
                  hover:bg-gray-50 disabled:bg-gray-50 disabled:ring-gray-200 disabled:cursor-default focus:z-20 focus:outline-offset-0"
              disabled={data?.hasPrevPage ? false : true}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={() => updateSearchParams(data?.page + 1)}
              className="cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 
                  text-gray-400 ring-1 ring-inset ring-gray-300
                 hover:bg-gray-50 disabled:bg-gray-50 disabled:ring-gray-200  disabled:cursor-default focus:z-20 focus:outline-offset-0"
              disabled={data?.hasNextPage ? false : true}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5 " aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

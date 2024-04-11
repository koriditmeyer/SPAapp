import React from "react";
import BreadCrumbs from "../common/BreadCrumbs/BreadCrumbs";
import { ProfileManageTable, ProgressBar } from "..";
import GetAllUsersQuery from "./ProfileManageUsersLoader";
import Skeleton from "react-loading-skeleton";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useQueryClient } from "@tanstack/react-query";
import handleDeleteUsersByTime from "../../services/handleDeleteUsersByTime";

const ProfileAccount = () => {
  const { data, isLoading } = GetAllUsersQuery(true);
  const queryClient = useQueryClient(); // Initializing queryClient

  const deleteUsersByTime = async () => {
    try {
      await handleDeleteUsersByTime()
      //console.log(`Deleting user with ID: ${userId}`);
      queryClient.invalidateQueries(['GetAllUsers']); // Invalidate and refetch
    } catch (error) {
      console.error("Failed to delete users", error);
    }
  };

  return (
    <>
      <ProgressBar isLoading={isLoading} />
      <div className="max-w-constainer py-2 px-4 xl:px-2 m-auto">
        <BreadCrumbs />
        <h3 className=" text-2xl font-semibold">Manage Users Dashboard</h3>
        <div className=" grid grid-cols-1  py-2 gap-4">
          <div className="flex items-center gap-2 w-full border rounded-md p-2  bg-slate-200 bg-opacity-50">
            <div className="  bg-[#facc15] shadow  items-center flex rounded-lg text-white">
              <p className=" min-w-[60px] font-bold text-3xl text-center">
                {isLoading ? (
                  <Skeleton className="w-12" />
                ) : (
                  data.payload.length
                )}
              </p>
              <div className="flex-col px-2">
                <div className="text-lg font-bold">Users</div>
                <div className="text-sm text-[#1C8191] font-bold">Total</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-4 w-full border rounded-md p-2">
            <div className="">
              <h4 className="text-lg font-bold">Users List</h4>
              <p className="text-xs  text-slate-500">
                Here you will find all the users stored in the database
              </p>
            </div>
            <div>
              <button
              onClick={() => deleteUsersByTime()} 
              className="flex justify-center content-center gap-1 btn px-2 h-full bg-red-500 hover:bg-red-700 text-white">
                <TrashIcon className="w-4  " />
                <div>Delete Inactive Users (≥ 2days)</div>
              </button>
            </div>
          </div>
          <ProfileManageTable users={data?.payload} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
};

export default ProfileAccount;

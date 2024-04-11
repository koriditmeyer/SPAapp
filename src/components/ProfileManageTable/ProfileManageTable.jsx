import {
  CheckIcon,
  TrashIcon,
  PencilSquareIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import MultiSelectDropdown from "../common/MultiSelectDropDown/MultiSelectDropDown";
import handleUserDelete from "../../services/handleUserDelete";
import { useQueryClient } from "@tanstack/react-query";
import handleUserRoleUpdate from "../../services/handleUserRoleUpdate";

const ProfileManageTable = ({ users, isLoading }) => {
  const queryClient = useQueryClient(); // Initializing queryClient
  const [editUserId, setEditUserId] = useState(null);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const roleOptions = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "premium", label: "Premium" },
  ];

  const handleEdit = (user) => {
    setEditUserId(user._id);
    setSelectedRoles(user.roles);
  };

  const handleRoleUpdate = async (userId) => {
    try {
      await handleUserRoleUpdate(userId,selectedRoles)
      queryClient.invalidateQueries(['GetAllUsers']); // Invalidate and refetch
      // Trigger PUT request here using userId and selectedRole
      // console.log(`Updating ${userId} with roles ${selectedRoles.join(", ")}`);
      // Reset edit state
      setEditUserId(null);
    } catch (error) {
      console.error("Failed to update user role", error);
    }
  };

  const handleDelete = async (userId) => {
    // Trigger DELETE request here using userId
    try {
      await handleUserDelete(userId)
      //console.log(`Deleting user with ID: ${userId}`);
      queryClient.invalidateQueries(['GetAllUsers']); // Invalidate and refetch
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Role(s)</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td>
                <Skeleton className="w-12" />
              </td>
              <td>
                <Skeleton className="w-12" />
              </td>
              <td>
                <Skeleton className="w-12" />
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user._id}
                className="bg-white border-b hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-600"
              >
                <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white ">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.profilePhoto[0]}
                    alt={user.first_name}
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">{`${user.first_name} ${user.last_name}`}</div>
                    <div className="font-normal text-gray-500">
                      {user.email}
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {editUserId === user._id ? (
                    <div className="flex  items-center">
                      <MultiSelectDropdown
                        options={roleOptions}
                        selectedValues={selectedRoles}
                        onSelectionChange={setSelectedRoles}
                        placeholder="Select Roles"
                      />
                      <button
                        onClick={() => setEditUserId(null)}
                        className="ml-2 stroke-red-600 hover:text-green-900"
                      >
                        <XMarkIcon className="w-4 stroke-red-600 " />
                      </button>
                      <button
                        onClick={() => handleRoleUpdate(user._id)}
                        className="ml-2 text-green-600 hover:text-green-900"
                      >
                        <CheckIcon className="w-4 stroke-lime-600 " />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-row flex-wrap gap-2">
                      {user.roles.map((role, key) => (
                        <div
                          key={key}
                          className="btn p-2 w-auto items-center cursor-default "
                        >
                          <p>{role}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white">
                  <button onClick={() => handleEdit(user)}>
                    <PencilSquareIcon className="w-4 stroke-indigo-600 " />
                  </button>
                  <button onClick={() => handleDelete(user._id)}>
                    <TrashIcon className="w-4 stroke-red-600 " />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileManageTable;

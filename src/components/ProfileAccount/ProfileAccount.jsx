import React from "react";
import { useSelector } from "react-redux";
import BreadCrumbs from "../common/BreadCrumbs/BreadCrumbs";

const ProfileAccount = () => {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  return (
    <div className="max-w-constainer py-2 px-4 xl:px-2 m-auto">
      <BreadCrumbs />
      <h3 className=" text-2xl font-semibold">Your Account Details</h3>
      <div className=" grid grid-cols-1  py-2 gap-4">
        <div className="w-full border rounded-md p-2  bg-slate-200 bg-opacity-50">
          <div className="text-lg font-bold">{userInfo.userName}</div>
          <div className="text-sm text-slate-500 font-bold">Account Holder</div>
        </div>
        <div className="w-full border rounded-md p-2">
          <h4 className="text-lg font-bold">Contact Details Stored in DB</h4>
          <p className="text-xs  text-slate-500">
            Here you will find all the data available that is stored in our
            database
          </p>
          <h5 className="text-sm  font-bold pt-3">Provider</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Provider Id</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Email</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Name</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Last Name</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Address</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">City</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Postal Code</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Country</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Role</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Registration Date</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Your Hashed Password</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Your Cart Id</h5>
          <div className="text-sm  pt-1">Provider</div>
        </div>
        <div className="w-full border rounded-md p-2">
          <h4 className="text-lg font-bold">
            Your Data from DB shared with the JSON Web Token
          </h4>
          <p className="text-xs  text-slate-500">
            Here you will find the data that was share from the database to the
            JSON Web Token. This data is encripted in a token and stored in a
            cookie
          </p>
          <h5 className="text-sm  font-bold pt-3">Email</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Name</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">City</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Country</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Role</h5>
          <div className="text-sm  pt-1">Provider</div>
        </div>
        <div className="w-full border rounded-md p-2">
          <h4 className="text-lg font-bold">JSON Web Token Additional Info</h4>
          <p className="text-xs  text-slate-500">
            Additional information about your JSON Web Token
          </p>
          <h5 className="text-sm  font-bold pt-3 ">JSON Token</h5>
          <div className="text-sm  pt-1 break-words">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Date created</h5>
          <div className="text-sm  pt-1">Provider</div>
          <h5 className="text-sm  font-bold pt-3">Valid until</h5>
          <div className="text-sm  pt-1">Provider</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAccount;

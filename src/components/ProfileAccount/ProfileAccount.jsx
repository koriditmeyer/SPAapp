import React from "react";
import { useSelector } from "react-redux";
import BreadCrumbs from "../common/BreadCrumbs/BreadCrumbs";
import { useLoaderData } from "react-router-dom";
import { EditableField } from "..";
import handleFieldUpdate from "../../services/handleFieldUpdate";

const ProfileAccount = () => {
  const userInfoDB = useLoaderData().payload;
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
          <h5 className="text-sm  font-bold pt-3">Email</h5>
          <div className="text-sm  pt-1">{userInfoDB.email}</div>
          <h5 className="text-sm  font-bold pt-3">First Name</h5>
          <EditableField
            initialValue={userInfoDB.first_name ? userInfoDB.first_name : "-"}
            fieldName="first_name"
            onUpdate={handleFieldUpdate}
          />
          <h5 className="text-sm  font-bold pt-3">Last Name</h5>
          <EditableField
            initialValue={userInfoDB.last_name ? userInfoDB.last_name : "-"}
            fieldName="last_name"
            onUpdate={handleFieldUpdate}
          />
          <h5 className="text-sm  font-bold pt-3">Phone Number / Whatsapp</h5>
          <EditableField
            initialValue={userInfoDB.phone ? userInfoDB.phone : "-"}
            fieldName="phone"
            onUpdate={handleFieldUpdate}
          />
          <h5 className="text-sm  font-bold pt-3">Address</h5>
          <EditableField
            initialValue={userInfoDB.address ? userInfoDB.address : "-"}
            fieldName="address"
            onUpdate={handleFieldUpdate}
          />
          <h5 className="text-sm  font-bold pt-3">City</h5>
          <EditableField
            initialValue={userInfoDB.city_locality ? userInfoDB.city_locality : "-"}
            fieldName="city_locality"
            onUpdate={handleFieldUpdate}
          />
          <h5 className="text-sm  font-bold pt-3">Postal Code</h5>
          <EditableField
            initialValue={userInfoDB.postal_code ? userInfoDB.postal_code : "-"}
            fieldName="postal_code"
            onUpdate={handleFieldUpdate}
          />
          <h5 className="text-sm  font-bold pt-3">Country</h5>
          <EditableField
            initialValue={userInfoDB.country_code ? userInfoDB.country_code : "-"}
            fieldName="country_code"
            onUpdate={handleFieldUpdate}
          />
          <h5 className="text-sm  font-bold pt-3">Roles</h5>
          <div className="text-sm  pt-1">
            {userInfoDB.roles.map((role) => `${role} `)}
          </div>
          <h5 className="text-sm  font-bold pt-3">Registration Date</h5>
          <div className="text-sm  pt-1">{userInfoDB.date}</div>
          <h5 className="text-sm  font-bold pt-3">Your Hashed Password</h5>
          <div className="text-sm  pt-1">{userInfoDB.password}</div>
          <h5 className="text-sm  font-bold pt-3">Your Cart Id</h5>
          <div className="text-sm  pt-1">{userInfoDB.cartId._id}</div>
          <h5 className="text-sm  font-bold pt-3">Provider</h5>
          <div className="text-sm  pt-1">{userInfoDB.provider}</div>
          {userInfoDB.providerId && (
            <>
              <h5 className="text-sm  font-bold pt-3">Provider Id</h5>
              <div className="text-sm  pt-1">{userInfoDB.providerId}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileAccount;

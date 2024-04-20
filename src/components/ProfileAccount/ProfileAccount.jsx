import React from "react";
import { useSelector } from "react-redux";
import BreadCrumbs from "../common/BreadCrumbs/BreadCrumbs";
import { EditableField, EditablePicture, ProgressBar } from "..";
import handleFieldUpdate from "../../services/handleFieldUpdate";
import ProfileAccountQuery from "./ProfileAccountLoader";
import Skeleton from "react-loading-skeleton";
import handlePhotoUpdate from "../../services/handlePhotoUpdate";

const ProfileAccount = () => {
  const { data: userInfoDB, isLoading } = ProfileAccountQuery(true);
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  return (
    <>
      <ProgressBar isLoading={isLoading} />
      <div className="max-w-constainer py-2 px-4 xl:px-2 m-auto">
        <BreadCrumbs />
        <h3 className=" text-2xl font-semibold">Your Account Details</h3>
        <div className=" grid grid-cols-1  py-2 gap-4">
          <div className="flex items-center gap-2 w-full border rounded-md p-2  bg-slate-200 bg-opacity-50">
            <div className=" w-20">
              {/* <img src={userInfo.profilePhoto} className="rounded-full"></img> */}
              {isLoading ? (
              <Skeleton className="w-20 h-20 rounded-full" />
            ) : (
              <EditablePicture
                initialValue={userInfo.profilePhoto}
                fieldName="thumbnail"
                onUpdate={handlePhotoUpdate}
              />
            )}
            </div>
            <div className="flex-col px-2">
            <div className="text-lg font-bold">{userInfo.first_name}</div>
            <div className="text-sm text-slate-500 font-bold">
              Account Holder
            </div>
            </div>
          </div>
          <div className="w-full border rounded-md p-2">
            <h4 className="text-lg font-bold">Contact Details Stored in DB</h4>
            <p className="text-xs  text-slate-500">
              Here you will find all the data available that is stored in our
              database
            </p>
            <h5 className="text-sm  font-bold pt-3">Email</h5>
            <div className="text-sm  pt-1">{userInfoDB?.payload.email}</div>
            <h5 className="text-sm  font-bold pt-3">First Name</h5>
            {isLoading ? (
              <Skeleton className="w-36" />
            ) : (
              <EditableField
                initialValue={
                  userInfoDB.payload.first_name
                    ? userInfoDB.payload.first_name
                    : "-"
                }
                fieldName="first_name"
                onUpdate={handleFieldUpdate}
              />
            )}
            <h5 className="text-sm  font-bold pt-3">Last Name</h5>
            {isLoading ? (
              <Skeleton className="w-36" />
            ) : (
              <EditableField
                initialValue={
                  isLoading ? (
                    <Skeleton className="w-36" />
                  ) : userInfoDB?.payload.last_name ? (
                    userInfoDB?.payload.last_name
                  ) : (
                    "-"
                  )
                }
                fieldName="last_name"
                onUpdate={handleFieldUpdate}
              />
            )}
            <h5 className="text-sm  font-bold pt-3">Phone Number / Whatsapp</h5>
            {isLoading ? (
              <Skeleton className="w-36" />
            ) : (
              <EditableField
                initialValue={
                  isLoading ? (
                    <Skeleton className="w-36" />
                  ) : userInfoDB?.payload.phone ? (
                    userInfoDB?.payload.phone
                  ) : (
                    "-"
                  )
                }
                fieldName="phone"
                onUpdate={handleFieldUpdate}
              />
            )}
            <h5 className="text-sm  font-bold pt-3">Address</h5>
            {isLoading ? (
              <Skeleton className="w-36" />
            ) : (
              <EditableField
                initialValue={
                  isLoading ? (
                    <Skeleton className="w-36" />
                  ) : userInfoDB?.payload.address ? (
                    userInfoDB?.payload.address
                  ) : (
                    "-"
                  )
                }
                fieldName="address"
                onUpdate={handleFieldUpdate}
              />
            )}
            <h5 className="text-sm  font-bold pt-3">City</h5>
            {isLoading ? (
              <Skeleton className="w-36" />
            ) : (
              <EditableField
                initialValue={
                  isLoading ? (
                    <Skeleton className="w-36" />
                  ) : userInfoDB?.payload.city_locality ? (
                    userInfoDB?.payload.city_locality
                  ) : (
                    "-"
                  )
                }
                fieldName="city_locality"
                onUpdate={handleFieldUpdate}
              />
            )}
            <h5 className="text-sm  font-bold pt-3">Postal Code</h5>
            {isLoading ? (
              <Skeleton className="w-36" />
            ) : (
              <EditableField
                initialValue={
                  isLoading ? (
                    <Skeleton className="w-36" />
                  ) : userInfoDB?.payload.postal_code ? (
                    userInfoDB?.payload.postal_code
                  ) : (
                    "-"
                  )
                }
                fieldName="postal_code"
                onUpdate={handleFieldUpdate}
              />
            )}
            <h5 className="text-sm  font-bold pt-3">Country</h5>
            {isLoading ? (
              <Skeleton className="w-36" />
            ) : (
              <EditableField
                initialValue={
                  isLoading ? (
                    <Skeleton className="w-36" />
                  ) : userInfoDB?.payload.country_code ? (
                    userInfoDB?.payload.country_code
                  ) : (
                    "-"
                  )
                }
                fieldName="country_code"
                onUpdate={handleFieldUpdate}
              />
            )}
            <h5 className="text-sm  font-bold pt-3">Roles</h5>
            <div className="text-sm  pt-1">
              {isLoading ? (
                <Skeleton className="w-36" />
              ) : (
                userInfoDB?.payload.roles?.map((role) => `${role} `)
              )}
            </div>
            <h5 className="text-sm  font-bold pt-3">Registration Date</h5>
            <div className="text-sm  pt-1">
              {isLoading ? (
                <Skeleton className="w-36" />
              ) : (
                userInfoDB?.payload.date
              )}
            </div>
            <h5 className="text-sm  font-bold pt-3 break-words">Your Hashed Password</h5>
            <div className="text-sm  pt-1">
              {isLoading ? ( 
                <Skeleton className="w-36" />
              ) : (
                userInfoDB?.payload.password
              )}
            </div>
            <h5 className="text-sm  font-bold pt-3">Your Cart Id</h5>
            <div className="text-sm  pt-1">
              {isLoading ? (
                <Skeleton className="w-36" />
              ) : (
                userInfoDB?.payload.cartId?._id
              )}
            </div>
            <h5 className="text-sm  font-bold pt-3">Provider</h5>
            <div className="text-sm  pt-1">
              {isLoading ? (
                <Skeleton className="w-36" />
              ) : (
                userInfoDB?.payload.provider
              )}
            </div>
            {userInfoDB?.payload.providerId && (
              <>
                <h5 className="text-sm  font-bold pt-3">Provider Id</h5>
                <div className="text-sm  pt-1">
                  {userInfoDB?.payload.providerId}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileAccount;

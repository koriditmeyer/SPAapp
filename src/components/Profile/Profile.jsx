import React from "react";
import { account, addProduct, contact, order, security } from "../../assets";
import {  ProfileComponent } from "..";
import { useSelector } from "react-redux";

const Profile = () => {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  return (
    <div className="max-w-constainer p-2 m-auto">
      <h3 className=" text-2xl font-semibold">Your Profile</h3>
      <div className=" grid grid-cols-2 sm:grid-cols-3 gap-4 py-2 ">
        <ProfileComponent
          link={"/profile/orders"}
          image={order}
          title={"Your Orders"}
          description={
            "Track, return, cancel an order, download invoice or buy again"
          }
        />
         <ProfileComponent
          link={"/profile/account"}
          image={account}
          title={"Your Account"}
          description={
            "Manage, add, or remove user account for personalized experiences"
          }
        />
        <ProfileComponent
          link={"/profile/security"}
          image={security}
          title={"Login & Security"}
          description={
            "Edit password"
          }
        />
         
            <ProfileComponent
          link={"/contact"}
          image={contact}
          title={"Customer Service"}
          description={
            "Browse self service options, help articles or contact us"
          }
        />
       {userInfo &&(   <ProfileComponent
          link={"/profile/addProduct"}
          image={addProduct}
          title={"Add Product"}
          description={
            "Add Product"
          }
        />)}
      </div>
    </div>
  );
};

export default Profile;

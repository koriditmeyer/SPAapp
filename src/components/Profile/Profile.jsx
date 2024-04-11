import React, { useEffect, useState } from "react";
import { account, addProduct, contact, order, security, manageUsers } from "../../assets";
import {  ProfileComponent } from "..";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Profile = () => {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);



  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="max-w-constainer p-2 m-auto">
      <h3 className=" text-2xl font-semibold">Your Profile</h3>
      <div className=" grid grid-cols-2 sm:grid-cols-3 gap-4 py-2 ">
        <ProfileComponent
          link={"/profile/orders"}
          image={order}
          title={"Your Orders"}
          description={
            "Track, return, cancel an order, download invoice or buy again"
          }
          active={false}
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
          active={false}
         
        />
            <ProfileComponent
          link={"/contact"}
          image={contact}
          title={"Customer Service"}
          description={
            "Browse self service options, help articles or contact us"
          }
          active={false}
        />
       {(["premium","admin"].some(role =>userInfo.roles.includes(role))) &&(   <ProfileComponent
          link={"/profile/addProduct"}
          image={addProduct}
          title={"Add Product"}
          description={
            "Premium and Admin users can add products"
          }
        />)}
          {(["admin"].some(role =>userInfo.roles.includes(role))) &&(   <ProfileComponent
          link={"/profile/admin"}
          image={manageUsers}
          title={"Manage Users"}
          description={
            "Admin can see all users, modify their role and delete users"
          }
        />)}
      </div>
    </motion.div>
  );
};

export default Profile;

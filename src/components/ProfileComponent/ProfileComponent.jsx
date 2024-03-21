import React from 'react';
import { Link } from 'react-router-dom';

const ProfileComponent = ({link,image,title,description, active=true}) => {
  
    return (
        <Link to={active && link} className={`p-2 w-full border rounded-md hover:shadow-md ${!active && " cursor-default bg-slate-100"}`}>
          <div className="flex items-center gap-2 justify-left">
            <img src={image} className="h-14 w-14"></img>
            <div className="flex flex-col group">
              <span className="text-base group-hover:underline">{title}</span>
              <span className=" text-xs text-slate-500 font-semibold group-hover:underline">
                {description}
              </span>
            </div>
          </div>
        </Link>
    );
};

export default ProfileComponent;
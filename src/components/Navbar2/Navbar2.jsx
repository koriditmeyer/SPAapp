import React from 'react';
import { logoDark } from '../../assets';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    return (
        <Link to={"/"} className="w-full bg-gray-100 pb-10 mx-auto flex flex-col items-center">
            <img className="w-32 my-5" src={logoDark} alt="darkLogo" />
        </Link>
    );
};

export default Navbar2;
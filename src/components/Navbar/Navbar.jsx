import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [mobileNav, setMobileNav] = useState("hidden");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/LogIn");
  };

  return (
    <>
      <nav className="z-50 relative flex bg-blue-600 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img className="h-10 mx-4" src="./pharmacy.png" alt="logo" />
          <h1 className="text-2xl font-semibold">Hospital Management</h1>
        </Link>
        <div className="nav-links-bookheaven block md:flex gap-4 items-center">
          <div className="hidden md:flex gap-4">

            {isLoggedIn === true && (
              <Link
                to="/"
                className="px-2 py-1 border border-white rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
                onClick={handleLogout}
              >
                Logout
              </Link>
            )}
          </div>

          {isLoggedIn === false && (
            <>
              <div className="hidden md:flex gap-4">
                <Link
                  to="/LogIn"
                  className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
                >
                  LogIn
                </Link>
                <Link
                  to="/SignUp"
                  className="px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
                >
                  SignUp
                </Link>
              </div>
            </>
          )}

          <button
            className="block md:hidden text-white text-2xl hover:text-zinc-400"
            onClick={() =>
              mobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            <FaGripLines />
          </button>
        </div>
      </nav>
      <div
        className={`${mobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
      >
        

        {isLoggedIn === false && (
          <>
            <Link
              to="/LogIn"
              className={`${mobileNav} px-8 mb-8 text-3xl font-semibold py-2 border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300`}
            >
              LogIn
            </Link>
            <Link
              to="/SignUp"
              className={`${mobileNav} px-8 mb-8 text-3xl font-semibold py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300`}
            >
              SignUp
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;

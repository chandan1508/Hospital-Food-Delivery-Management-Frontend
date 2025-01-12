import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  return (
    <div className="md:h-screen">
      <div className="h-auto  bg-blue-200 flex gap-3 text-2xl p-4 flex-wrap">
        <div>Name: {name}</div>
        <div>Role: {role}</div>
        <div>Email: {email}</div>
      </div>
      {role === "hospital_manager" && (
        <div className=" flex flex-wrap gap-8 p-10 items-center justify-center">
          <Link
            to="/addpatient"
            className="bg-green-500 rounded h-[100px] w-[300px] p-4 flex items-center justify-center"
          >
            <h2 className=" text-3xl text-white font-semibold ">Add Patient</h2>
          </Link>
          <Link
            to="/allpatients"
            className="bg-pink-500 rounded h-[100px] w-[300px] p-4 flex items-center justify-center"
          >
            <h2 className=" text-3xl text-white font-semibold ">
              All Patients
            </h2>
          </Link>
          <Link
            to="/adddiet"
            className="bg-orange-400 rounded h-[100px] w-[300px] p-4 flex items-center justify-center"
          >
            <h2 className=" text-3xl text-white font-semibold ">
              Create Diet Chart
            </h2>
          </Link>
        </div>
      )}

      {/* {role === "pantry_staff" && (
        <div className=" flex flex-wrap gap-8 p-10 items-center justify-center">
          <Link
            to="/addpatient"
            className="bg-green-500 rounded h-[100px] w-[300px] p-4 flex items-center justify-center"
          >
            <h2 className=" text-3xl text-white font-semibold ">Add Patient</h2>
          </Link>
          <Link
            to="/allpatients"
            className="bg-pink-500 rounded h-[100px] w-[300px] p-4 flex items-center justify-center"
          >
            <h2 className=" text-3xl text-white font-semibold ">
              All Patients
            </h2>
          </Link>
        </div>
      )} */}
    </div>
  );
};

export default Profile;

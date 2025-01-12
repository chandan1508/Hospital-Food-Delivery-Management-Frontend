import React, { useEffect, useState } from "react";
import axios from "axios";
import Patient from "../components/Patient/Patient";

import Loader from "../components/Loader/Loader";
const AllPatients = () => {
  const [Data, setData] = useState();

  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://hospital-food-delivery-management-zewt.onrender.com/api/patients/",
        {headers}
      );
      setData(response.data);
      console.log(response);
    };
    fetch();
  }, []);

  return (
    <div className="bg-zinc-900 h-auto md:h-screen   px-12 py-8">
      {" "}
      <h4 className="text-3xl text-yellow-100">All Patients</h4>
      {!Data && (
        <div className="flex items-center h-screen justify-center my-8">
          <Loader/>{" "}
        </div>
      )}
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Data &&
          Data.map((items, i) => (
            <div key={i}>
              <Patient data={items} />{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllPatients;



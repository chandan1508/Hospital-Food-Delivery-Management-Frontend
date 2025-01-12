import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddDietForm = () => {
  const [Data, setData] = useState({
    patientId: "",
    morning: "",
    evening: "",
    night: "",
    specificInstructions: "",
  });

  const navigate = useNavigate();
  //   const location = useLocation();

  //   useEffect(() => {
  //     const data = location.state;
  //   setData({ patientId: data._id });

  //   }, []);

  useEffect(() => {
    const data = location.state;
    if (data && data._id) {
      setData((prevData) => ({
        ...prevData, // Preserve existing structure
        patientId: data._id, // Set the patientId
      }));
    }
  }, [location.state]);

  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        Data.patientId === "" ||
        Data.morning === "" ||
        Data.evening === "" ||
        Data.night === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.get(
          "https://hospital-food-delivery-management-zewt.onrender.com/api/dietcharts/",
          Data,
          { headers }
        );
        setData({
          morning: "",
          evening: "",
          night: "",
          specificInstructions: "",
        });

        alert(response.data.message);
        navigate("/addDiet");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="h-[100%] flex flex-col items-center justify-center p-0 md:p-4">
      <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
        Add Diet Chart
      </h1>
      <div className="p-4 w-[100%] md:w-[70%] flex flex-col bg-zinc-800 rounded">
        <div>
          <label htmlFor="" className="text-zinc-400">
            Morning Meal
          </label>
          <textarea
            type="text"
            rows={3}
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="morning meal..."
            name="morning"
            required
            value={Data.morning}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-zinc-400">
            Evening Meal
          </label>
          <textarea
            type="text"
            rows={3}
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="evening meal..."
            name="evening"
            required
            value={Data.evening}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-zinc-400">
            Night Meal
          </label>
          <textarea
            type="text"
            rows={3}
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="night meal..."
            name="night"
            required
            value={Data.night}
            onChange={change}
          />
        </div>

        <div className="">
          <label htmlFor="" className="text-zinc-400">
            Specific Instructions (Optional)
          </label>
          <textarea
            type="text"
            rows={3}
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="specific instructions..."
            name="specificInstructions"
            required
            value={Data.specificInstructions}
            onChange={change}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-300"
            onClick={submit}
          >
            Add Diet
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDietForm;

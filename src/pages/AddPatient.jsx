import axios from "axios";
import React, { useState } from "react";

const AddPatient = () => {
  const [Data, setData] = useState({
    name: "",
    age: "",
    gender: "",
    diseases: "",
    allergies: "",
    roomNumber: "",
    bedNumber: "",
    floorNumber: "",
    contactInfo: "",
    emergencyContact: "",
    otherDetails: "",
  });

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
        Data.name === "" ||
        Data.age === "" ||
        Data.gender === "" ||
        Data.diseases === "" ||
        Data.allergies === "" ||
        Data.roomNumber === "" ||
        Data.bedNumber === "" ||
        Data.floorNumber === "" ||
        Data.contactInfo === "" ||
        Data.emergencyContact === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "https://hospital-food-delivery-management-zewt.onrender.com/api/patients/",
          Data,
          { headers }
        );
        setData({
          name: "",
          age: "",
          gender: "",
          diseases: "",
          allergies: "",
          roomNumber: "",
          bedNumber: "",
          floorNumber: "",
          contactInfo: "",
          emergencyContact: "",
          otherDetails: "",
        });

        alert(response.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="h-[100%] flex flex-col items-center justify-center p-0 md:p-4">
      <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
        Add Patient
      </h1>
      <div className="p-4 w-[100%] md:w-[70%] flex flex-col bg-zinc-800 rounded">
        <div>
          <label htmlFor="" className="text-zinc-400">
            Name
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="name"
            name="name"
            required
            value={Data.name}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-zinc-400">
            Age
          </label>
          <input
            type="Number"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Age"
            name="age"
            required
            value={Data.age}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-zinc-400">
            Gender
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Gender"
            name="gender"
            required
            value={Data.gender}
            onChange={change}
          />
        </div>

        <div className="">
          <label htmlFor="" className="text-zinc-400">
            Diseases
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="diseases"
            name="diseases"
            required
            value={Data.diseases}
            onChange={change}
          />
        </div>
        <div className="">
          <label htmlFor="" className="text-zinc-400">
             Allergies
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="allergies"
            name="allergies"
            required
            value={Data.allergies}
            onChange={change}
          />
        </div>
        <div className="">
          <label htmlFor="" className="text-zinc-400">
            Room Number
          </label>
          <input
            type="number"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Room number"
            name="roomNumber"
            required
            value={Data.roomNumber}
            onChange={change}
          />
        </div>
        <div className="">
          <label htmlFor="" className="text-zinc-400">
             Bed Number
          </label>
          <input
            type="number"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Bed Number"
            name="bedNumber"
            required
            value={Data.bedNumber}
            onChange={change}
          />
        </div>
        <div className="">
          <label htmlFor="" className="text-zinc-400">
            Floor Number
          </label>
          <input
            type="number"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Floor Number"
            name="floorNumber"
            required
            value={Data.floorNumber}
            onChange={change}
          />
        </div>
        <div className="">
          <label htmlFor="" className="text-zinc-400">
            Contact Info
          </label>
          <input
            type="number"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Contact Info"
            name="contactInfo"
            required
            value={Data.contactInfo}
            onChange={change}
          />
        </div>
        <div className="">
          <label htmlFor="" className="text-zinc-400">
            Emergency Contact
          </label>
          <input
            type="number"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Emergency Contact"
            name="emergencyContact"
            required
            value={Data.emergencyContact}
            onChange={change}
          />
        </div>
        <div className="">
          <label htmlFor="" className="text-zinc-400">
             Other Details(optional)
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Other Details"
            name="otherDetails"
            value={Data.otherDetails}
            onChange={change}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-300"
            onClick={submit}
          >
            Add Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;

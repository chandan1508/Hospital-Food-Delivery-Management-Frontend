import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import AddPatient from "./pages/AddPatient";
import AllPatients from "./pages/AllPatients";
import AddDiet from "./pages/AddDiet";
import AddDietForm from "./components/Diet/AddDietForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/LogIn" element={<LogIn />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/addpatient" element={<AddPatient />} />
        <Route exact path="/allpatients" element={<AllPatients />} />
        <Route exact path="/adddiet" element={<AddDiet />} />
        <Route exact path="/adddietform" element={<AddDietForm />} />
      </Routes>
      <Footer />
    </div>  
  );
};

export default App;


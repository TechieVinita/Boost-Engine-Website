import React from "react";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Home />
    </>
  );
};

export default App;

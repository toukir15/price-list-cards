import React from "react";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <div>
      <Navbar />
      <PriceList />
      <Dashboard />
    </div>
  );
};

export default App;

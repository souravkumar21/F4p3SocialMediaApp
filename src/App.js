import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Item from "./Components/Item";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";

const App = () => {
  const [selectedItem, setSelectedItem] = useState({});
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={<Homepage setSelectedItem={setSelectedItem} />}
        />
        <Route
          path={`/item/:${selectedItem.id}`}
          element={<Item selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>}
        />
        <Route
          path="/notifications"
          element={<Loader/>}
        />
        <Route
          path="/item/"
          element={<Item selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>}
        />
        <Route
          path="/profile"
          element={<Loader/>}
        />
      </Routes>
    </div>
  );
};

export default App;
